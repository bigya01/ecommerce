import ProductCard from "../product-card";
import axios from "axios";

export async function ProductList() {
  const response= await axios.get("https://dummyjson.com/products");
const productData : any[]= response.data.products;

  return (
    <div className="flex flex-wrap gap-4">
        {productData.map((product) => (
            <ProductCard
            key={product.id}
            name={product.title}
            href={`/products/${product.id}`}
            image={product.thumbnail}
            price={product.price}
            category={product.category}
            />
        ))}
    </div>
  );
}
