
import Head from "next/head"
import { Header } from "@/components/landing/Header"
import { ProjectCard } from "@/components/landing/ProjectCard"
import { motion } from "framer-motion"
import { BackButton } from "@/components/ui/back-button"

const portfolioItems = [
  {
    imageUrl: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
    title: "Brand Identity System",
    author: "Brand Studio",
    price: "Contact for Quote"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1557426272-8e7c054bb38c",
    title: "Logo Design Collection",
    author: "Design Agency",
    price: "Contact for Quote"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1557426272-8d0c7c6b8d81",
    title: "Brand Guidelines",
    author: "Creative Collective",
    price: "Contact for Quote"
  }
]

export default function BrandingPage() {
  return (
    <>
      <Head>
        <title>Branding Services - Saksimerch</title>
        <meta name="description" content="Professional branding and identity design services" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        <BackButton />
        
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Branding Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating distinctive brand identities that leave lasting impressions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </>
  )
}
