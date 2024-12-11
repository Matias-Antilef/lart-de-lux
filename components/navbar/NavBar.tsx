import { PublicRoutes } from "@/routes/routes";
import styles from "./navbar.module.css";
import {
  ChartBarBig,
  Heart,
  Search,
  ShoppingBag,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className="flex gap-4">
        <div className={styles.find_product}>
          <Search />
          <input type="text" placeholder="Buscar producto" />
        </div>
      </div>
      <Link href="/" className={styles.title_link}>
        L&apos;art de Luxe
      </Link>
      <div className="flex gap-4">
        <Link href={`/${PublicRoutes.FAVORITES}`}>
          <Heart className="relative" />
        </Link>
        <UserCircle />
        <Link href={`/${PublicRoutes.CART}`}>
          <ShoppingBag className="relative" />
        </Link>
        <ChartBarBig />
      </div>
    </nav>
  );
}
export default NavBar;
