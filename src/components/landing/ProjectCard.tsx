
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface ProjectCardProps {
  imageUrl: string
  title: string
  author: string
  price: string
  onClick?: () => void
}

export const ProjectCard = ({
  imageUrl,
  title,
  author,
  price,
  onClick
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <Card className="overflow-hidden group cursor-pointer">
        <CardContent className="p-0">
          <div className="relative w-full h-[300px]">
            <Image 
              src={imageUrl} 
              alt={title}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4 group-hover:bg-gray-50 transition-colors duration-300">
            <h3 className="font-medium text-lg truncate group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{author}</p>
            <p className="text-lg font-bold mt-2">{price}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
