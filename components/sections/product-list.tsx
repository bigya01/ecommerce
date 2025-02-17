"use client";

import { PER_PAGE } from "@/lib/constant";
import ProductCard from "../product-card";
import { useState } from "react";
import { PageNumbers } from "./pagination";

export function ProductList({ products }: { products: any[] }) {
  const [page, setPage] = useState(1);
  const total = products.length;
  const totalPages = Math.ceil(total / PER_PAGE);
  const limit = PER_PAGE;
  const [start, end] = [(page - 1) * limit, page * limit];

  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="flex flex-wrap gap-4">
        {products.slice(start, end).map((product) => (
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
