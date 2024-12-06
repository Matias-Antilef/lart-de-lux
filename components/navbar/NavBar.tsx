import { PublicRoutes } from "@/routes/routes";
import {
  BarChartHorizontalBig,
  Heart,
  Search,
  ShoppingBag,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="z-50 flex justify-between px-10 h-16 items-center bg-transparent fixed text-white w-screen left-0 top-0">
      <div className="flex gap-4">
        <BarChartHorizontalBig />
        <div className="flex gap-1">
          <Search />
          <p>Buscar producto</p>
        </div>
      </div>
      <h1 className="text-3xl absolute text-center  w-screen left-0  ">
        L&apos;art de Luxe
      </h1>
      <div className="flex gap-4">
        <Link href={`/${PublicRoutes.FAVORITES}`}>
          <Heart className="relative" />
        </Link>
        <UserCircle />
        <Link href={`/${PublicRoutes.CART}`}>
          <ShoppingBag className="relative" />
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
