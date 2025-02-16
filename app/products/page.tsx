import { Header } from "@/components/sections/header";
import type { Metadata } from "next";
import { ProductList } from "@/components/sections/product-list";


export const metadata: Metadata = {
    title: "Product - NepMart",
    description: "Products available in NepMart",
  };
export default function ProductPage() {
  return (
    <div>
    <Header/>
     <div className="flex m-2 mt-8"> 
        <div className="min-w-[300] w-1/6">filter</div>
      <ProductList/>
     </div>
    </div>
  );
}