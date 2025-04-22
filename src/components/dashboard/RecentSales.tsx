
import { Avatar } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      {[
        {
          name: "Olivia Martin",
          email: "olivia.martin@email.com",
          amount: "+$1,999.00"
        },
        {
          name: "Jackson Lee",
          email: "jackson.lee@email.com",
          amount: "+$39.00"
        },
        {
          name: "Isabella Nguyen",
          email: "isabella.nguyen@email.com",
          amount: "+$299.00"
        },
        {
          name: "William Kim",
          email: "will@email.com",
          amount: "+$99.00"
        },
        {
          name: "Sofia Davis",
          email: "sofia.davis@email.com",
          amount: "+$39.00"
        }
      ].map((sale) => (
        <div key={sale.email} className="flex items-center">
          <Avatar className="h-9 w-9" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  )
}
