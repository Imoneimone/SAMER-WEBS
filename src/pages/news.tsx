
import Head from "next/head"
import Image from "next/image"
import { Header } from "@/components/landing/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Bell } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BackButton } from "@/components/ui/back-button"

const newsArticles = [
  {
    category: "Latest News",
    title: "Peluncuran Koleksi Terbaru SAMER 2024",
    summary: "BKSM-SAKSI memperkenalkan lini merchandise terbaru yang menampilkan desain-desain inovatif karya mahasiswa",
    date: "21 Maret 2024",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    author: "Tim SAMER"
  },
  {
    category: "Events",
    title: "Workshop Seni Digital",
    summary: "Workshop kreativitas digital untuk mahasiswa UIN Mataram dengan mentor profesional",
    date: "25 Maret 2024",
    location: "Aula Utama UIN Mataram",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    registration: "Terbuka"
  }
]

const upcomingEvents = [
  {
    title: "Pameran Seni Mahasiswa",
    date: "1 April 2024",
    location: "Galeri Seni UIN Mataram",
    imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd75a9160"
  },
  {
    title: "Workshop Kaligrafi Modern",
    date: "5 April 2024",
    location: "Ruang Kreatif BKSM",
    imageUrl: "https://images.unsplash.com/photo-1569091791842-7cfb64e04797"
  }
]

const announcements = [
  {
    title: "Pendaftaran Anggota Baru BKSM-SAKSI",
    priority: "high",
    date: "Deadline: 30 Maret 2024"
  },
  {
    title: "Perubahan Jadwal Workshop Mingguan",
    priority: "medium",
    date: "Efektif 1 April 2024"
  }
]

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>Berita - SAMER BKSM-SAKSI</title>
        <meta name="description" content="Berita terkini dan informasi kegiatan BKSM-SAKSI dan SAMER" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        <BackButton />
        
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">Berita & Informasi</h1>
            <p className="text-lg text-muted-foreground">
              Tetap terhubung dengan perkembangan terbaru dari BKSM-SAKSI dan SAMER
            </p>
          </motion.div>

          <Tabs defaultValue="latest" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide">
              <TabsTrigger value="latest">Terbaru</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="announcements">Pengumuman</TabsTrigger>
            </TabsList>

            <TabsContent value="latest" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/news/${article.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300">
                        <div className="relative w-full h-48">
                          <Image 
                            src={article.imageUrl} 
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover rounded-t-lg"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                          <Badge className="absolute top-2 left-2">{article.category}</Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                          <p className="text-sm line-clamp-3">{article.summary}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <div className="relative w-full h-48">
                        <Image 
                          src={event.imageUrl} 
                          alt={event.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                          className="object-cover rounded-t-lg"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="announcements">
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="flex items-center space-x-4 py-4">
                        <Bell className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-medium">{announcement.title}</h3>
                          <p className="text-sm text-muted-foreground">{announcement.date}</p>
                        </div>
                        <Badge variant={announcement.priority === "high" ? "destructive" : "secondary"} className="ml-auto">
                          {announcement.priority === "high" ? "Penting" : "Info"}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </>
  )
}
