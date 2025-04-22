
import Head from "next/head"
import { Header } from "@/components/landing/Header"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1744202904155-1ef2f876357c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
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

export default function ProductDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const [currentSlide, setCurrentSlide] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel()
  
  const product = products.find(p => p.id === Number(id))

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product?.title} (${product?.price})`
    const url = `https://wa.me/6285239933120?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrentSlide(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  if (!product) {
    return null
  }

  return (
    <>
      <Head>
        <title>{product.title} - Saksimerch</title>
        <meta name="description" content={`${product.title} by ${product.author}`} />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center mb-8"
          >
            <Button
              variant="outline"
              size="icon"
              className="mr-4 rounded-full hover:scale-105 transition-transform"
              onClick={() => router.push("/product")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-3xl font-bold">{product.title}</h1>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <Carousel ref={emblaRef} className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image}
                        alt={`${product.title} - Image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute inset-x-4 top-1/2 flex items-center justify-between -translate-y-1/2 pointer-events-none">
                <div className="pointer-events-auto">
                  <CarouselPrevious className="h-8 w-8 rounded-full opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="pointer-events-auto">
                  <CarouselNext className="h-8 w-8 rounded-full opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Carousel>

            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground mb-2">{product.author}</p>
              <p className="text-2xl font-bold mb-6">{product.price}</p>
              <Button 
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleWhatsApp}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
