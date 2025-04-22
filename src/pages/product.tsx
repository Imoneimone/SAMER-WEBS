
import Head from "next/head"
import { Header } from "@/components/landing/Header"
import { ProjectCard } from "@/components/landing/ProjectCard"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

const products = [
  {
    id: 1,
    images: [
      "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
      "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg",
      "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg"
    ],
    title: "Classic Black T-Shirt",
    author: "Saksimerch",
    price: "IDR 199.000"
  },
  {
    id: 2,
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
      "https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg",
      "https://images.pexels.com/photos/1005332/pexels-photo-1005332.jpeg"
    ],
    title: "Canvas Tote Bag",
    author: "Saksimerch",
    price: "IDR 149.000"
  },
  {
    id: 3,
    images: [
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg",
      "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg",
      "https://images.pexels.com/photos/1451059/pexels-photo-1451059.jpeg"
    ],
    title: "Streetwear Cap",
    author: "Saksimerch",
    price: "IDR 129.000"
  },
  {
    id: 4,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg"
    ],
    title: "Custom Design Sneakers",
    author: "Saksimerch",
    price: "IDR 899.000"
  }
]

export default function ProductPage() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Products - Saksimerch</title>
        <meta name="description" content="Browse our collection of custom merchandise" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Discover our collection of custom merchandise and streetwear
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard 
                  imageUrl={product.images[0]}
                  title={product.title}
                  author={product.author}
                  price={product.price}
                  onClick={() => router.push(`/products/${product.id}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </>
  )
}
