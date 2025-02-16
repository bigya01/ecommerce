import { User, ShoppingCart, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export function Header() {
  return (
    <div className="h-16 border-b-2 flex justify-between p-4">
      <div className="flex gap-x-8 w-[350px]">
        <div>Categories</div>
        <div>Brands</div>
      </div>
      <Link href="/products" className="font-bold text-2xl">nepmart</Link>
      <div className="flex gap-x-4">
        <Input placeholder="Search" />
        <Link href="/cart"><ShoppingCart size="32" /></Link>
        <Heart size="32" />
        <User size="32" />
      </div>
    </div>
  );
}