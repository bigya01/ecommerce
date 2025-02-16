"use client";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import useCart  from "@/store/cart"

export function Esewa() {
  const { items } = useCart();
  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.count,
    0,
  );



  return (
    <form
      action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      method="POST"
    >
      <div className="hidden">
      <input type="text" id="amount" name="amount" value={subtotal} required />
      <input
        type="text"
        id="tax_amount"
        name="tax_amount"
        value="10"
        required
      />
      <input
        type="text"
        id="total_amount"
        name="total_amount"
        value="110"
        required
      />
      <input
        type="text"
        id="transaction_uuid"
        name="transaction_uuid"
        value="241028"
        required
      />
      <input
        type="text"
        id="product_code"
        name="product_code"
        value="EPAYTEST"
        required
      />
      <input
        type="text"
        id="product_service_charge"
        name="product_service_charge"
        value="0"
        required
      />
      <input
        type="text"
        id="product_delivery_charge"
        name="product_delivery_charge"
        value="0"
        required
      />
      <input
        type="text"
        id="success_url"
        name="success_url"
        value="https://developer.esewa.com.np/success"
        required
      />
      <input
        type="text"
        id="failure_url"
        name="failure_url"
        value="https://developer.esewa.com.np/failure"
        required
      />
      <input
        type="text"
        id="signed_field_names"
        name="signed_field_names"
        value="total_amount,transaction_uuid,product_code"
        required
      />
      <input
        type="text"
        id="signature"
        name="signature"
        value="i94zsd3oXF6ZsSr/kGqT4sSzYQzjj1W/waxjWyRwaME="
        required
      />
      </div>
      <Button type="submit">Pay with eSewa</Button>
    </form>
  );
}
export default function PaymentOptions() {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
      <RadioGroup defaultValue="esewa">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="esewa" id="esewa" />
          <Label htmlFor="esewa">eSewa</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card">Credit/Debit Card</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="cash" id="cash" />
          <Label htmlFor="cash">Cash on Delivery</Label>
        </div>
      </RadioGroup>
      <Esewa />
    </div>
  )
}