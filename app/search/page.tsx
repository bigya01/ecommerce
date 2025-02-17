import axios from "axios";
import { ProductList } from "@/components/sections/product-list";
import { redirect } from "next/navigation";

export default async function Search({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q;
  if (!query) {
    redirect("/products");
  }

  const response = await axios.get(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const results = response.data.products;

  return (
    <div className="flex m-2 mt-8">
      <div className="min-w-[300] w-1/6">filter</div>
      <div className="flex flex-col gap y-4">
        <span className="text-2xl font-bold mb-4">Search results for "{query}"</span>
        <ProductList products={results} />
      </div>
    </div>
  );
}
