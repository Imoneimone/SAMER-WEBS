
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Newspaper, Users, Info } from "lucide-react"

const navItems = [
  {
    title: "Product",
    href: "/product",
    icon: ShoppingBag
  },
  {
    title: "News",
    href: "/news",
    icon: Newspaper
  },
  {
    title: "Artist",
    href: "/artist",
    icon: Users
  },
  {
    title: "About",
    href: "/about",
    icon: Info
  }
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex flex-col gap-4 mt-8">
          <AnimatePresence>
            {navItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200",
                      "hover:bg-primary/10 active:scale-95",
                      "dark:hover:bg-primary/20",
                      router.pathname === item.href 
                        ? "text-primary bg-primary/10"
                        : "text-foreground/60 hover:text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
