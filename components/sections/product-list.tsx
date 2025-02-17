import ProductCard from "../product-card";
import axios from "axios";

export async function ProductList({ products }: { products: any[] }) {

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          href={`/products/details/${product.id}`}
          product={product}
        />
      ))}
    </div>
  );
}
