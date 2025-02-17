import axios from "axios";
import { ProductList } from "@/components/sections/product-list";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const response = await axios.get(
    `https://dummyjson.com/products/category/${category}`
  );
  const products = response.data.products;

  return (
    <div className="flex flex-col gap y-4">
      <span className="text-2xl font-bold mb-4">
        Showing results for "{category}".
      </span>
      <ProductList products={products} />
    </div>
  );
}
