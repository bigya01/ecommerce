import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import PaymentOptions from "./payment"

export default function UserDetails() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Your Details</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <form className="space-y-4">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john@example.com" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St, City, Country" />
            </div>
          </div>
          <PaymentOptions />
        </form>
      </CardContent>
      
    </Card>
  )
}