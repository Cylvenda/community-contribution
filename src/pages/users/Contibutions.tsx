import { DataTable } from "@/components/data-table"
import type { ContributionsDataTypes } from "@/types/contributions"
import { createColumnHelper } from "@tanstack/react-table"
import data from "con.json"


const Contibutions = () => {
  const columnHelper = createColumnHelper<ContributionsDataTypes>()
  const columns = [
    columnHelper.accessor("id", {
      header: () => "ID"
    }),
  ]

  return (
    <div className="grid grid-rows=[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:-20">
      <DataTable<data, any >  />
    </div>
  )
}

export default Contibutions