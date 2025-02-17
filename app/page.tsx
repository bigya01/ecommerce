'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ShoppingBag, 
  ArrowRight, 
  Sparkles
} from 'lucide-react'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/product-card'
import axios from 'axios'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturedProducts />
      <StatisticsSection />
      <NewsletterSection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Badge variant="outline" className="text-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              New Collection 2024
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Discover Your 
              <span className="text-foreground border-b-2 border-foreground"> Perfect Style</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:w-[80%]">
              Explore our curated collection of premium fashion items designed to elevate your wardrobe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg">
                  Shop Now <ShoppingBag className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              {[
                ['50K+', 'Happy Customers'],
                ['80+', 'Top Brands'],
                ['15+', 'Categories']
              ].map(([number, label]) => (
                <div key={label}>
                  <div className="font-bold text-2xl">{number}</div>
                  <div className="text-muted-foreground text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-full bg-muted">
              <img
                src="https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png" // Replace with your image
                alt="Fashion Model"
                className="absolute inset-0 object-cover rounded-full p-4 grayscale"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -top-6 right-10"
            >
              <Card className="p-3 backdrop-blur-sm bg-background/90 border border-border">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
                  <span className="text-sm font-medium">1.2k+ Shopping</span>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products/")
      .then((response) => setProducts(response.data.products))
  }, [])

  return (
    <section className="py-20 px-4 bg-background">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.slice(0,4).map((product:any) => (
          <ProductCard key={product.id} product={product} href={`/details/${product.id}`} />
        ))}
      </div>
    </section>
  )
}

function StatisticsSection() {
  const stats = [
    { id: 1, value: "10k+", label: "Happy Customers" },
    { id: 2, value: "5k+", label: "Products" },
    { id: 3, value: "99%", label: "Satisfaction Rate" },
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="bg-black text-white dark:bg-white dark:text-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Success in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: stat.id * 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Subscribe to our newsletter for exclusive deals and updates
        </p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow"
          />
          <Button>
            Subscribe <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}