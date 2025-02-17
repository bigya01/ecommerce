
"use client";
import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../toggle";
import { Search } from "../header/search";
import { NavMenu } from "../header/nav-menu";
import { Button } from "../ui/button";
import useCart from "@/store/cart";

export function Header() {
  const { items } = useCart();
  return (
    <div className=" border-b-2 flex justify-between  items-center p-4">
      <NavMenu />
      <Link href="/" className="font-bold text-2xl">
        nepmart
      </Link>
      <div className="flex gap-x-4">
        <div className=" hidden lg:block">
          <Search />
        </div>
        <div className="relative">
          <Button variant="outline" size="icon">
            <Link href="/cart">
              <ShoppingCart size="32" />
            </Link>
          </Button>
         {items.length !==0 && <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {items.length}
          </span>}
        </div>
        <Button variant="outline" size="icon">
          <Heart size="32" />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
