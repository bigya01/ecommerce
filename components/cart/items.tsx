"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import useCart from "@/store/cart";

export default function CartItems() {
  const { items } = useCart();
  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.count,
    0,
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Cart Items</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length !== 0 ? (
          <div>
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product.thumbnail || "/placeholder.svg"}
                      alt={item.product.title}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{item.product.title}</h3>
                      <p className="text-sm text-gray-500">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.count}</span>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <p className="text-lg font-semibold">
                Subtotal: ${subtotal.toFixed(2)}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center">No items in the cart</p>
        )}
      </CardContent>
    </Card>
  );
}