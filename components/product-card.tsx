import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CartButton } from "./cart/button";

export default function ProductCard({
  href,
  product,
}: {
  href: string;
  product: any;
}) {
  return (
    <Card className="w-[250px] h-[400px] group relative space-y-4 overflow-hidden flex flex-col">
      <figure className="group-hover:opacity-90 h-[250px]">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/70 absolute top-3 end-3 rounded-full dark:text-black"
        >
          <HeartIcon className="size-4" />
        </Button>
        <img
          className="h-full w-full object-cover"
          src={product.thumbnail}
          width={300}
          height={500}
          alt={product.title}
        />
      </figure>
      <CardContent className="px-4 py-0 flex-grow">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg">
              <Link href={href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground capitalize">
              {product.category}
            </p>
          </div>
          <p className="text-lg font-semibold">{product.price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-0 border-t">
        <CartButton product={product} />
      </CardFooter>
    </Card>
  );
}