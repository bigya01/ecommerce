"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Search() {
  const [term, setTerm] = useState("");
  const handleKeyDown = (e : any) =>{
  if (e.key === "Enter") {
    window.location.href = `/products/search?q=${encodeURIComponent(term)}`;
  }
  };
  return (
    <Input
      placeholder="Search"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

