"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/product-card";


export default function Search(){
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    if (!query){
        window.location.href = '/products';
        return null;
    }
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
            setResults(response.data.products);
        }
        search();
    }, []);

    return (
    <div className="flex m-2 mt-8">
          <div className="min-w-[300] w-1/6">filter</div>
          <div className="flex flex-col gap y-4">
          <span className="text-2xl font-bold">Search results for "{query}"</span>

          <div className="flex flex-wrap gap-4">
               {results.map((product : any) => (
                 <ProductCard
                   key={product.id}
                   href={`/products/${product.id}`}
                   product={product}
                 />
                ))}
                </div>
                </div>
                </div>
    );
}