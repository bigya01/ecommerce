import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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
    </div>
  )
}