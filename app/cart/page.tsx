import CartItems from "@/components/cart/items"
import UserDetails from "@/components/cart/user-details"

export default function CartPage() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:pr-4">
          <CartItems />
        </div>
        <div className="lg:pl-4">
          <UserDetails />
        </div>
      </div>
    </div>
  )
}