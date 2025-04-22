
import { ColumnDef } from "@tanstack/react-table"

export type PageData = {
  id: string
  page: string
  views: number
  bounceRate: string
  duration: string
}

export const columns: ColumnDef<PageData>[] = [
  {
    accessorKey: "page",
    header: "Page",
  },
  {
    accessorKey: "views",
    header: "Views",
  },
  {
    accessorKey: "bounceRate",
    header: "Bounce Rate",
  },
  {
    accessorKey: "duration",
    header: "Avg. Duration",
  },
]
