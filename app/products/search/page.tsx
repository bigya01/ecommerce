import axios from "axios";
import { ProductList } from "@/components/sections/product-list";
import { redirect } from "next/navigation";

export default async function Search({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const query = (await searchParams).q;
  if (!query) {
    redirect("/products");
  }

  const response = await axios.get(
    `https://dummyjson.com/products/search?q=${query}`
  );
  const results = response.data.products;

  return (
    
      <div className="flex flex-col gap y-4 w-full">
        <span className="text-2xl font-bold mb-4">Showing results for "{query}".</span>
        <ProductList products={results} />
      </div>
    
  );
}
