
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Settings,
  BarChart,
  LogOut,
  FolderKanban,
  UserCircle
} from "lucide-react"

export function DashboardNav() {
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500"
    },
    {
      label: "Projects",
      icon: FolderKanban,
      href: "/dashboard/projects",
      color: "text-green-500"
    },
    {
      label: "Analytics",
      icon: BarChart,
      href: "/dashboard/analytics",
      color: "text-violet-500"
    },
    {
      label: "Profile",
      icon: UserCircle,
      href: "/dashboard/profile",
      color: "text-yellow-500"
    },
    {
      label: "Orders",
      icon: ShoppingCart,
      href: "/dashboard/orders",
      color: "text-pink-500"
    },
    {
      label: "Customers",
      icon: Users,
      href: "/dashboard/customers",
      color: "text-orange-500"
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      color: "text-gray-500"
    }
  ]

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-gray-50/40">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold tracking-tight">Admin</h2>
      </div>
      <div className="flex-1 px-3 py-2">
        <nav className="space-y-0.5">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 px-3 py-2 h-10 font-normal hover:bg-gray-100/80",
                route.href === "/dashboard" && "bg-gray-100"
              )}
            >
              <route.icon className={cn("h-4 w-4", route.color)} />
              {route.label}
            </Button>
          ))}
        </nav>
      </div>
      <div className="px-3 py-4 border-t mt-auto">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 px-3 py-2 h-10 font-normal text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
