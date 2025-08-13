import { productsData } from "@/data/products";
import { ProductsPageClient } from "@/components/products/ProductsPageClient";

export const metadata = {
  title: "All products",
};

export default function ProductsPage() {
  return <ProductsPageClient products={productsData} />;
}
