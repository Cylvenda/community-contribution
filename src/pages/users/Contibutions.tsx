import { DataTable } from "@/components/data-table"
import type { ContributionsDataTypes } from "@/types/contributions";
import { createColumnHelper } from "@tanstack/react-table";
import data from "./con.json"
import { Checkbox } from "@/components/ui/checkbox";

const Contibutions = () => {

  const columnHelper = createColumnHelper<ContributionsDataTypes>();
  const columns = [
    columnHelper.display({
      id: "action",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
      )
    }),
    columnHelper.accessor("id", {
      header: () => "ID",
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("title", {
      header: () => "Title",
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("description", {
      header: () => "Description",
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor(("contributors.amount"), {
      header: () => "Contributors",
      cell: (info) => info.getValue()
    }),
  ]
  return (
    <div className="p-5 w-full flex-col justify-center items-center min-h-screen">
      <DataTable<ContributionsDataTypes, any> columns={columns} data={data} />
    </div>
  )
}
export default Contibutions