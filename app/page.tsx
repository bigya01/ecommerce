'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ShoppingBag, 
  ArrowRight, 

  ChevronRight,
  Sparkles
} from 'lucide-react'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
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
            <Badge variant="secondary" className="text-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              New Collection 2024
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Discover Your 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Perfect Style</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:w-[80%]">
              Explore our curated collection of premium fashion items designed to elevate your wardrobe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">
                Shop Now <ShoppingBag className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Lookbook <ChevronRight className="ml-2" />
              </Button>
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
            <div className="relative aspect-square rounded-full bg-gradient-to-tr from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950">
              <img
                src="/hero-image.jpg" // Replace with your image
                alt="Fashion Model"
                className="absolute inset-0 object-cover rounded-full p-4"
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
              <Card className="p-3 backdrop-blur-sm bg-white/80 dark:bg-black/80">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
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
  const products = [
    { id: 1, name: "Smart Watch", price: "$199", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Wireless Earbuds", price: "$129", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Laptop", price: "$999", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <Button variant="outline" className="mt-4 w-full">
                Add to Cart
              </Button>
            </div>
          </motion.div>
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
    <section ref={ref} className="bg-purple-600 text-white py-20 px-4">
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
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="text-xl mb-8 text-gray-600">
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
          <Button className="bg-purple-600 hover:bg-purple-700">
            Subscribe <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

