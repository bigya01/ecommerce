"use client";

import ProductCard from "../product-card";
import { use, useEffect, useState } from "react";
import axios from "axios";

export function ProductList() {
  const [productData, setProductData] = useState<any[]>([]);
  console.log(productData);

  useEffect(() => {
    async  function fetchData  () {
      const response = await axios.get("https://dummyjson.com/products");
      setProductData(response.data.products);
    }
    fetchData();
  }, []);
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
