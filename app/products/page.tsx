import type { Metadata } from "next";
import { ProductList } from "@/components/sections/product-list";
import axios from "axios";

export const metadata: Metadata = {
  title: "Product - NepMart",
  description: "Products available in NepMart",
};
export default async function ProductPage() {
  const init_response = await axios.get("https://dummyjson.com/products");
  const total = init_response.data.total;
  const response = await axios.get("https://dummyjson.com/products?limit=" + total);
  const productData: any[] = response.data.products;

  return (
    <div className="flex m-2 mt-8">
      <div className="min-w-[300] w-1/6">filter</div>
      <ProductList products={productData} />
    </div>
  );
}
