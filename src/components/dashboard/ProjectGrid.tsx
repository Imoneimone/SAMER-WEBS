
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "Modern branding project for tech startup",
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2",
    status: "In Progress",
    progress: 65
  },
  {
    id: 2,
    title: "Website Redesign",
    description: "E-commerce website redesign project",
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2",
    status: "Completed",
    progress: 100
  },
  {
    id: 3,
    title: "Mobile App UI",
    description: "Fitness tracking app interface design",
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2",
    status: "In Review",
    progress: 90
  }
]

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    project.status === "Completed" ? "text-green-500" :
                    project.status === "In Review" ? "text-orange-500" :
                    "text-blue-500"
                  }`}>
                    {project.status}
                  </span>
                  <div className="w-24 h-1 rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full ${
                        project.status === "Completed" ? "bg-green-500" :
                        project.status === "In Review" ? "bg-orange-500" :
                        "bg-blue-500"
                      }`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
