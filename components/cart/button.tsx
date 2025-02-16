"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/store/cart";
import toast from "react-hot-toast";

export function CartButton({product}: {product: any}) {
  const {add} = useCart();
  const handleAddtoCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    add(product);
    toast.success("Added to cart");
  };
  return (
    <Button size="lg" className="flex-1" onClick={handleAddtoCart}>
      <ShoppingCart className="w-5 h-5 mr-2" />
      Add to Cart
    </Button>
  );
}