
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"

export function BackButton() {
  const router = useRouter()
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed left-4 top-20 z-50"
      onClick={() => router.back()}
    >
      <ArrowLeft className="h-6 w-6" />
      <span className="sr-only">Go back</span>
    </Button>
  )
}
