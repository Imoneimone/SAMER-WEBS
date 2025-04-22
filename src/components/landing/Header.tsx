
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/landing/MobileMenu"
import { Logo } from "@/components/landing/Logo"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/layout/MainNav"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      scrolled 
        ? "bg-black/95 supports-[backdrop-filter]:bg-black/80 shadow-lg" 
        : "bg-black"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <MobileMenu />
        </div>
        <MainNav />
      </div>
    </header>
  )
}
