
import Link from "next/link"
import { useRouter } from "next/router"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { ShoppingBag, Newspaper, Users, Info } from "lucide-react"
import { motion } from "framer-motion"

export function MainNav() {
  const router = useRouter()
  
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

  return (
    <NavigationMenu className="hidden md:flex md:flex-1 md:justify-center">
      <NavigationMenuList className="flex space-x-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = router.pathname === item.href
          
          return (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    "hover:bg-primary/10 hover:scale-105 active:scale-95",
                    "dark:hover:bg-primary/20",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon size={16} />
                  <span>{item.title}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
