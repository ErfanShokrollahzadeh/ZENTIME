import NavbarClient from "./NavbarClient";
import { getCurrentUser } from "@/lib/auth";

export default async function Navbar() {
  const user = await getCurrentUser();
  return <NavbarClient user={user} />;
}
