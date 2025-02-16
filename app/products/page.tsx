import { Header } from "@/components/header";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Product - NepMart",
    description: "Products available in NepMart",
  };
export default function ProductPage() {
  return (
    <div>
    <Header/>
     <div>main
        <div>filter</div>
        <div>product</div>
     </div>
    </div>
  );
}