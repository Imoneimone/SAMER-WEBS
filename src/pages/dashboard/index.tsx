import { Card } from "@/components/ui/card"
import { DashboardShell } from "@/components/dashboard/DashboardShell"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { Overview } from "@/components/dashboard/Overview"
import { RecentSales } from "@/components/dashboard/RecentSales"
import { Search, Plus, FileText, Users, Settings } from "lucide-react"
import { RouteGuard } from "@/components/auth/RouteGuard"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'

export default function DashboardPage() {
  const { userData } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const quickActions = [
    { icon: Plus, label: "New Project", action: () => {} },
    { icon: FileText, label: "Create Invoice", action: () => {} },
    { icon: Users, label: "Team Members", action: () => {} },
    { icon: Settings, label: "Settings", action: () => {} }
  ]

  return (
    <RouteGuard>
      <DashboardShell>
        <DashboardHeader 
          heading={`Welcome ${userData?.role === 'admin' ? 'Admin' : 'Customer'}`}
          text='Your dashboard overview.'
        >
          {userData?.role === 'admin' && (
            <div 
              className='flex items-center gap-4'
              onMouseEnter={() => setIsSearchVisible(true)}
              onMouseLeave={() => setIsSearchVisible(false)}
            >
              <AnimatePresence>
                <motion.div 
                  className='relative flex items-center'
                  initial={{ width: 40 }}
                  animate={{ width: isSearchVisible ? 200 : 40 }}
                  transition={{ duration: 0.2 }}
                >
                  <Search className='absolute left-3 h-4 w-4 text-muted-foreground' />
                  <motion.input
                    type='search'
                    placeholder='Search...'
                    className='pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isSearchVisible ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </DashboardHeader>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
          {quickActions.map((action, index) => (
            <Card key={index} className="p-4 hover:bg-accent cursor-pointer transition-colors">
              <Button variant="ghost" className="w-full h-full flex flex-col gap-2 items-center justify-center" onClick={action.action}>
                <action.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{action.label}</span>
              </Button>
            </Card>
          ))}
        </div>

        {userData?.role === "admin" ? (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-4">
                {isLoading ? (
                  <Skeleton className="h-20 w-full" />
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">$45,231.89</p>
                    <p className="text-sm text-green-600">+12.5% from last month</p>
                  </div>
                )}
              </Card>
              <Card className="p-4">
                {isLoading ? (
                  <Skeleton className="h-20 w-full" />
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Subscriptions</p>
                    <p className="text-2xl font-bold">+2350</p>
                    <p className="text-sm text-green-600">+8.2% from last month</p>
                  </div>
                )}
              </Card>
              <Card className="p-4">
                {isLoading ? (
                  <Skeleton className="h-20 w-full" />
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Sales</p>
                    <p className="text-2xl font-bold">+12,234</p>
                    <p className="text-sm text-green-600">+15.3% from last month</p>
                  </div>
                )}
              </Card>
              <Card className="p-4">
                {isLoading ? (
                  <Skeleton className="h-20 w-full" />
                ) : (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                    <p className="text-2xl font-bold">+573</p>
                    <p className="text-sm text-green-600">+4.6% from last month</p>
                  </div>
                )}
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-8">
              <Card className="col-span-4">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold tracking-tight">Overview</h3>
                      <p className="text-sm text-muted-foreground">
                        Monthly revenue and sales overview
                      </p>
                    </div>
                    <Button variant="outline">Download Report</Button>
                  </div>
                  <div className="h-[350px]">
                    {isLoading ? <Skeleton className="h-full w-full" /> : <Overview />}
                  </div>
                </div>
              </Card>
              <Card className="col-span-3">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold tracking-tight">Recent Sales</h3>
                      <p className="text-sm text-muted-foreground">
                        Recent sales activity
                      </p>
                    </div>
                    <Button variant="outline">View All</Button>
                  </div>
                  <div className="mt-4">
                    {isLoading ? <Skeleton className="h-[400px] w-full" /> : <RecentSales />}
                  </div>
                </div>
              </Card>
            </div>
          </>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Your Projects</h3>
              {isLoading ? (
                <Skeleton className="h-[200px] w-full" />
              ) : (
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Project
                  </Button>
                  <p className="text-muted-foreground text-center">No projects yet. Start creating!</p>
                </div>
              )}
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              {isLoading ? (
                <Skeleton className="h-[200px] w-full" />
              ) : (
                <div className="space-y-4">
                  <p className="text-muted-foreground text-center">No recent activity</p>
                </div>
              )}
            </Card>
          </div>
        )}
      </DashboardShell>
    </RouteGuard>
  )
}