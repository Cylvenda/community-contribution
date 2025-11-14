import { DataTable } from "@/components/data-table"
import data from "./data.json"

function Members() {
  return (
    <div className="mt-3">
      <DataTable data={data} /> 
    </div>
  )
}

export default Members
