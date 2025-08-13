"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface CartItem {
  id: string; // product slug
  name: string;
  price: string; // formatted like $349
  qty: number;
  addedAt: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number; // numeric total
  addItem: (item: Omit<CartItem, "addedAt">) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "zentime_cart";

function parsePrice(price: string): number {
  const n = Number(price.replace(/[^0-9.]/g, ""));
  return isNaN(n) ? 0 : n;
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]); // uniform SSR/CSR initial state
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage only after mount to avoid hydration mismatch
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(parsed.filter(i => i && typeof i.id === "string"));
        }
      }
    } catch {/* ignore parse errors */}
    setLoaded(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!loaded) return; // don't persist before initial load
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {/* ignore */}
  }, [items, loaded]);

  const addItem = (item: Omit<CartItem, "addedAt">) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i);
      }
      return [...prev, { ...item, addedAt: Date.now() }];
    });
    // Fire legacy event so older code still reacts (optional)
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("cart:add", { detail: { qty: item.qty, price: item.price } }));
    }
  };

  const updateQty = (id: string, qty: number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  };

  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));
  const clear = () => setItems([]);

  const value = useMemo(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);
    return { items, count, total, addItem, updateQty, removeItem, clear };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
