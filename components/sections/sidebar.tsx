"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { MultiSelect } from "../multi-select";

const categories = ["Beauty", "Health"];

export function Sidebar() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-y-8 mx-6">
      <div className="flex flex-col gap-y-4">
        <div className="text-lg font-semibold">Filters</div>
        <div className="h-0.5 w-full bg-black" />
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort By</SelectLabel>
              <SelectItem value="price-asc">Price (Low - High)</SelectItem>
              <SelectItem value="price-dec">Price (High - Low)</SelectItem>
              <SelectItem value="title-asc">Title (A - Z)</SelectItem>
              <SelectItem value="title-dec">Title (Z - A)</SelectItem>
              <SelectItem value="date-asc">Recent</SelectItem>
              <SelectItem value="date-dec">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="text-lg">Price</div>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value)}
          min={0}
          max={1000}
          step={10}
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <div className="text-lg">Categories</div>
        <MultiSelect
          placeholder="Select Categories"
          options={categories.map((category) => ({ label: category, value: category }))}
          onValueChange={(value:string[]) => setSelectedCategories(value)}
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="text-lg font-semibold">Suggested Categories</div>
        <div className="h-0.5 w-full bg-black" />
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="text-sm border rounded-full px-4 py-2"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
