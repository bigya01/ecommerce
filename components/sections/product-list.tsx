"use client";

import { PER_PAGE } from "@/lib/constant";
import ProductCard from "../product-card";
import { useState, useEffect } from "react";
import { PageNumbers } from "./pagination";
import useProducts from "../../store/products";

export function ProductList({ products }: { products: any[] }) {
  const { setProducts, filteredProducts } = useProducts();
  
  const [page, setPage] = useState(1);
  console.log(filteredProducts());
  
  const total = filteredProducts().length;
  const totalPages = Math.ceil(total / PER_PAGE);
  const limit = PER_PAGE;
  const [start, end] = [(page - 1) * limit, page * limit];

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="flex flex-wrap gap-4">
        {filteredProducts().slice(start, end).map((product) => (
          <ProductCard
            key={product.id}
            href={`/details/${product.id}`}
            product={product}
          />
        ))}
      </div>
      <PageNumbers page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
}
