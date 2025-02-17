import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../toggle";
import { Search } from "../header/search";
import { NavMenu } from "../header/nav-menu";
import { Button } from "../ui/button";

export function Header() {
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
        <Button variant="outline" size="icon">
          <Link href="/cart">
            <ShoppingCart size="32" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Heart size="32" />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
