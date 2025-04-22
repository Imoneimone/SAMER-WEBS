
import Head from "next/head"
import { Header } from "@/components/landing/Header"
// Add these imports
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/router"

interface ArticleDetails {
  title: string
  category: string
  date: string
  location: string
  imageUrl: string
  author: string
  content: {
    what: string
    who: string
    where: string
    when: string
    why: string
    how: string
    fullContent: string[]
  }
}

const articleData: { [key: string]: ArticleDetails } = {
  "peluncuran-koleksi-terbaru-samer-2024": {
    title: "Peluncuran Koleksi Terbaru SAMER 2024",
    category: "Latest News",
    date: "21 Maret 2024",
    location: "UIN Mataram",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    author: "Tim SAMER",
    content: {
      what: "Peluncuran koleksi merchandise terbaru SAMER untuk tahun 2024",
      who: "BKSM-SAKSI dan para mahasiswa desainer UIN Mataram",
      where: "Gedung Utama UIN Mataram",
      when: "21 Maret 2024, 09:00 WITA",
      why: "Memperkenalkan karya-karya terbaru mahasiswa dan memperkuat identitas kampus",
      how: "Melalui pameran dan presentasi desain yang dihadiri oleh civitas akademika",
      fullContent: [
        "BKSM-SAKSI dengan bangga memperkenalkan koleksi merchandise terbaru untuk tahun 2024. Koleksi ini merupakan hasil kolaborasi dengan para mahasiswa berbakat dari UIN Mataram.",
        "Setiap desain dalam koleksi ini memiliki cerita dan makna tersendiri, mencerminkan kreativitas dan semangat mahasiswa dalam mengekspresikan identitas kampus.",
        "Acara peluncuran ini juga menjadi wadah bagi para mahasiswa untuk menunjukkan bakat dan potensi mereka dalam dunia desain."
      ]
    }
  }
}

export default function ArticlePage() {
  const router = useRouter()
  const { slug } = router.query
  const article = articleData[slug as string]

  if (!article) return null

  return (
    <>
      <Head>
        <title>{article.title} - SAMER News</title>
        <meta name="description" content={article.content.what} />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Add back button here */}
          <Link 
            href="/news" 
            className="inline-flex items-center mb-6 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image 
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <Badge className="mb-4">{article.category}</Badge>
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {article.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {article.author}
                  </div>
                </div>
              </div>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">What</h3>
                      <p>{article.content.what}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Who</h3>
                      <p>{article.content.who}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Where</h3>
                      <p>{article.content.where}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">When</h3>
                      <p>{article.content.when}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Why</h3>
                      <p>{article.content.why}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">How</h3>
                      <p>{article.content.how}</p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  {article.content.fullContent.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </>
  )
}
