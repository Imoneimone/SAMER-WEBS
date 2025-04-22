import { Card } from "@/components/ui/card"
import { DashboardShell } from "@/components/dashboard/DashboardShell"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { AnalyticsCharts } from "@/components/dashboard/AnalyticsCharts"
import { DataTable } from "@/components/dashboard/DataTable"
import { columns } from "@/components/dashboard/columns"
import { RouteGuard } from '@/components/auth/RouteGuard'

const data = [
  {
    id: "1",
    page: "/home",
    views: 2345,
    bounceRate: "42%",
    duration: "2m 13s",
  },
  {
    id: "2",
    page: "/products",
    views: 1234,
    bounceRate: "38%",
    duration: "1m 45s",
  },
  {
    id: "3",
    page: "/blog",
    views: 987,
    bounceRate: "45%",
    duration: "3m 02s",
  },
  {
    id: "4",
    page: "/contact",
    views: 654,
    bounceRate: "52%",
    duration: "0m 45s",
  },
  {
    id: "5",
    page: "/about",
    views: 432,
    bounceRate: "37%",
    duration: "1m 21s",
  }
]

export default function AnalyticsPage() {
  return (
    <RouteGuard requiredRole='admin'>
      <DashboardShell>
        <DashboardHeader 
          heading="Analytics"
          text="Detailed analytics and statistics."
        />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Page Views</p>
              <p className="text-2xl font-bold">5,642</p>
              <p className="text-sm text-green-600">+12.3% from last month</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Bounce Rate</p>
              <p className="text-2xl font-bold">42.8%</p>
              <p className="text-sm text-red-600">+2.1% from last month</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Avg. Session</p>
              <p className="text-2xl font-bold">2m 13s</p>
              <p className="text-sm text-green-600">+0.3% from last month</p>
            </div>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Traffic Overview</h3>
            <div className="h-[350px]">
              <AnalyticsCharts />
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
            <DataTable columns={columns} data={data} />
          </Card>
        </div>
      </DashboardShell>
    </RouteGuard>
  )
}