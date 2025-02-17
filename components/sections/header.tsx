import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../toggle";
import { Search } from "../header/search";
import { NavMenu } from "../header/nav-menu";

export function Header() {
  return (
    <div className=" border-b-2 flex justify-between  items-center p-4">
      <NavMenu/>
      <Link href="/products" className="font-bold text-2xl">nepmart</Link>
      <div className="flex gap-x-4">
        <Search />
        <Link href="/cart"><ShoppingCart size="32" /></Link>
        <Heart size="32" />
        <ModeToggle />
      </div>
    </div>
  );
}