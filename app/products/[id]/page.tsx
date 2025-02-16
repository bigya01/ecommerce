import axios from "axios";

import { Star, ShoppingCart, Heart, TruckIcon, RotateCcw, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default async function ProductDetail({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id;
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const product= response.data;
    console.log(product);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <img
              src={product.images[0]}
              alt={product.title}
              className="rounded-lg object-cover inset-0"
            />
          </div>
          
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-lg text-muted-foreground">by {product.brand}</p>
            <Badge variant="secondary">
            Low Stock
          </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
          </div>
          <div>
            <span className="text-3xl font-bold">${(product.price).toFixed(2)}</span>
            <span className="text-lg text-muted-foreground line-through ml-2">${(product.price / (1 - (product.discountPercentage/100))).toFixed(2)}</span>
            <span className="text-green-600 ml-2">{product.discountPercentage} % OFF</span>
          </div>
          <p className="text-muted-foreground">
            {product.description}
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TruckIcon className="w-5 h-5 text-muted-foreground" />
              <span>Ships in {product.shippingInformation}</span>
            </div>
            <div className="flex items-center space-x-2">
              <RotateCcw className="w-5 h-5 text-muted-foreground" />
              <span>{product.returnPolicy}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <span>{product.warrantyInformation}</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="font-medium">SKU</dt>
                <dd>{product.sku}</dd>
              </div>
              <div>
                <dt className="font-medium ">Category</dt>
                <dd className="capitalize">{product.category}</dd>
              </div>
              <div>
                <dt className="font-medium">Weight</dt>
                <dd> </dd>
              </div>
              <div>
                <dt className="font-medium">Dimensions</dt>
                <dd>{product.dimensions.width}x{product.dimensions.height}x{product.dimensions.depth} cm</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>/{product.shippingInformation}</p>
            <p className="mt-2">Minimum order quantity: {product.minimumOrderQuantity}</p>
          </CardContent>
        </Card>
        </div>
       
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {product.reviews.map((review:any, index:any) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                   {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Reviews
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}