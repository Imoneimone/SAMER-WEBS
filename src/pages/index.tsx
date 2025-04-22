import Head from "next/head"
import Image from "next/image"
import { Header } from "@/components/landing/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollProgress } from "@/components/landing/ScrollProgress"
import { motion } from "framer-motion"
import { Palette, Paintbrush, Layers, Type, PaintBucket, Wand2, Brush } from "lucide-react"
import Link from 'next/link'

const services = [
  {
    icon: Palette,
    title: 'Illustration',
    description: 'Custom digital and traditional illustrations for your brand, products, or personal projects',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe'
  },
  {
    icon: Layers,
    title: 'Branding',
    description: 'Complete brand identity design including logos, color schemes, and brand guidelines',
    imageUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d'
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    description: 'User-centered interface and experience design for web and mobile applications',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e'
  },
  {
    icon: Type,
    title: 'Typography',
    description: 'Custom typeface design and lettering for unique brand expressions',
    imageUrl: 'https://images.unsplash.com/photo-1588200908342-23b585c03e26'
  },
  {
    icon: Brush,
    title: 'Graffiti Art',
    description: 'Urban art and graffiti design for events, murals, and brand activations',
    imageUrl: 'https://images.unsplash.com/photo-1567784177951-6fa58317e16b'
  },
  {
    icon: PaintBucket,
    title: 'Mural',
    description: 'Large-scale wall murals for offices, public spaces, and commercial venues',
    imageUrl: 'https://images.unsplash.com/photo-1551913902-c92207136625'
  },
  {
    icon: Wand2,
    title: 'Creative Services',
    description: 'Additional creative solutions tailored to your unique needs and vision',
    imageUrl: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Saksimerch - Creative Design Services</title>
        <meta name="description" content="Professional creative services including illustration, animation, branding, UI/UX, typography, graffiti art, and murals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollProgress />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Creative Design Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your vision into reality with our comprehensive range of creative services. 
              From digital art to physical installations, we bring creativity to life.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                        <Icon className="absolute top-4 right-4 h-6 w-6 text-white" />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <span>{service.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </main>
      </div>
    </>
  )
}