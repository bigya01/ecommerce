import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

const cartItems = [
  { id: 1, name: "Product 1", price: 19.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Product 2", price: 29.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
]

export default function CartItems() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Cart Items</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
                <span>{item.quantity}</span>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  )
}