"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileDrawer({ categories }: { categories: string[] }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="my-4 h-1/2">
        <div className="flex  flex-col items-center justify-between px-4  overflow-y-auto">
          <h4 className="font-semibold">Categories</h4>

          {categories.map((category) => (
            <Link
              key={category}
              href={`/products/${category}`}
              className="rounded-md border w-full mx-4 my-1 p-2 font-mono text-sm shadow-sm capitalize"
            >
              {category}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
