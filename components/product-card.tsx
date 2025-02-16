import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";



export default function ProductCard({
  name,
  href,
  image,
  price,
  category,
}: {
  name: string;
  href: string;
  image: string;
  price: string;
  category: string;
}) {
  return (
    <Card className="w-[250px] group relative space-y-4 overflow-hidden">
      <figure className="group-hover:opacity-90">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/70 absolute top-3 end-3 rounded-full dark:text-black"
        >
          <HeartIcon className="size-4" />
        </Button>
        <img
          className="aspect-square w-full"
          src={image}
          width={300}
          height={500}
          alt={name}
        />
      </figure>
      <CardContent className="px-4 py-0">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg">
              <Link href={href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground capitalize">{category}</p>
          </div>
          <p className="text-lg font-semibold">{price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-0 border-t">
        <Button variant="ghost" className="w-full">
          <PlusIcon className="size-4 me-1" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
