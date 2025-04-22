
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/router"
import { useEffect } from "react"

interface RouteGuardProps {
  children: React.ReactNode
  requiredRole?: "admin" | "customer"
}

export function RouteGuard({ children, requiredRole }: RouteGuardProps) {
  const { user, userData, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/signup")
      } else if (requiredRole && userData?.role !== requiredRole) {
        router.push("/dashboard")
      }
    }
  }, [user, userData, loading, router, requiredRole])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }

  if (requiredRole && userData?.role !== requiredRole) {
    return null
  }

  return <>{children}</>
}
