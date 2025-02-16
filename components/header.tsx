import {User, ShoppingCart,Heart} from "lucide-react"
import { Input } from "@/components/ui/input"



export function Header() {
    return (
        <div className="h-16 border-b-2 flex justify-between items-center p-4">
        <div className="flex gap-x-4 w-[350]">
            <div>Categories</div>
            <div>Brands</div>
        </div>
        <div className="font-bold text-2xl">NepMart</div>
        <div className="flex gap-x-4">
         <Input placeholder="Search"/>
            <Heart size={32}/>
            <ShoppingCart size={32}/>
            <User size={32}/>
        </div>
     </div>
    );
}