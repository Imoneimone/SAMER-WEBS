
import Head from "next/head"
import { Header } from "@/components/landing/Header"
import { ProjectCard } from "@/components/landing/ProjectCard"
import { motion } from "framer-motion"
import { BackButton } from "@/components/ui/back-button"

const portfolioItems = [
  {
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    title: "Digital Character Design",
    author: "Creative Studio",
    price: "Contact for Quote"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
    title: "Editorial Illustration",
    author: "Art House",
    price: "Contact for Quote"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1618005198784-63b846ee2edf",
    title: "Children's Book Illustration",
    author: "Design Collective",
    price: "Contact for Quote"
  }
]

export default function IllustrationPage() {
  return (
    <>
      <Head>
        <title>Illustration Services - Saksimerch</title>
        <meta name="description" content="Custom digital and traditional illustrations for your projects" />
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
            <h1 className="text-4xl font-bold mb-4">Illustration Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bringing your ideas to life through custom digital and traditional illustrations
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
