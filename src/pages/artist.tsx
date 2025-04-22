
import { Header } from "@/components/landing/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"
import Link from "next/link"
import { BackButton } from "@/components/ui/back-button"

const artists = [
  {
    name: "Dackoo",
    bio: "Digital artist specializing in contemporary visual art and innovative digital experiences",
    expertise: "DIGITAL ARTIST",
    email: "dackoo@samer.com",
    instagram: "@dackoo.art",
    imageUrl: "https://images.unsplash.com/photo-1744204236529-19745600e344?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Imone",
    bio: "Mixed media artist creating unique installations and experimental artworks",
    expertise: "ILLUSTRATOR",
    email: "imone@samer.com",
    instagram: "@imone.arts",
    imageUrl: "/artists/imone.jpg"
  },
  {
    name: "Kindi",
    bio: "Visual artist exploring urban culture through digital and traditional mediums",
    expertise: "UI/UX",
    email: "kindi@samer.com",
    instagram: "@kindi.creative",
    imageUrl: "/artists/kindi.jpg"
  },
  {
    name: "Zani",
    bio: "Contemporary artist blending traditional techniques with modern digital approaches",
    expertise: "DECORATION",
    email: "zani@samer.com",
    instagram: "@zani.studio",
    imageUrl: "/artists/zani.jpg"
  },
  {
    name: "Maman",
    bio: "Multimedia artist creating interactive installations and immersive experiences",
    expertise: "PAINTER",
    email: "maman@samer.com",
    instagram: "@maman.art",
    imageUrl: "/artists/maman.jpg"
  },
  {
    name: "Heru",
    bio: "Digital artist focusing on abstract compositions and innovative design concepts",
    expertise: "DESIGN GRAPHICS",
    email: "heru@samer.com",
    instagram: "@heru.digital",
    imageUrl: "/artists/heru.jpg"
  },
  {
    name: "Nenong",
    bio: "Contemporary artist working across multiple mediums, bridging digital and physical art",
    expertise: "MURAL",
    email: "nenong@samer.com",
    instagram: "@dackkkko",
    imageUrl: "/artists/nenong.jpg"
  }
]

export default function ArtistPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BackButton />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Behind Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Para seniman yang support project ini
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={artist.imageUrl}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 rounded-full text-xs font-semibold text-primary-foreground">
                    {artist.expertise}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{artist.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{artist.bio}</p>
                  <div className="flex flex-col space-y-2">
                    <Link 
                      href={`mailto:${artist.email}`}
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      {artist.email}
                    </Link>
                    <Link 
                      href={`https://instagram.com/${artist.instagram.substring(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      {artist.instagram}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
