
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "@/contexts/AuthContext"
import { Header } from "@/components/landing/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { updateProfile } from "firebase/auth"

export default function UserProfile() {
  const { user, userData } = useAuth()
  const router = useRouter()
  const [displayName, setDisplayName] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
    if (user?.displayName) {
      setDisplayName(user.displayName)
    }
  }, [user, router])

  const handleUpdateName = async () => {
    try {
      if (user) {
        await updateProfile(user, {
          displayName: displayName
        })
        setIsEditing(false)
      }
    } catch (error) {
      console.error("Error updating name:", error)
    }
  }

  const whatsappNumber = "+6285239933120"
  const whatsappMessage = "Halo, saya ingin bertanya tentang SAMER"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">User Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Name</Label>
              {isEditing ? (
                <div className="flex gap-2">
                  <Input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  <Button onClick={handleUpdateName}>Save</Button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <p className="text-lg">{displayName || "No name set"}</p>
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    Edit
                  </Button>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label>Email</Label>
              <p className="text-lg">{user?.email}</p>
            </div>

            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Admin via WhatsApp
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
