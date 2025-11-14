import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Contributor = {
  id: number
  name: string
  amount: number
  avatar: string
}

type Contribution = {
  id: number
  title: string
  Contributors: Contributor[]
}

type ContributionsTableProps = {
  contributions: Contribution[]
  onContributionClick: (contribution: Contribution) => void
}

export function ContributionsTable({ contributions, onContributionClick }: ContributionsTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "TZS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getTotalAmount = (contributors: Contributor[]) => {
    return contributors.reduce((sum, contributor) => sum + contributor.amount, 0)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Contributions</CardTitle>
        <CardDescription>View all active contribution campaigns</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Contributors</TableHead>
              <TableHead className="text-right">Total Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contributions.map((contribution) => (
              <TableRow
                key={contribution.id}
                onClick={() => onContributionClick(contribution)}
                className="cursor-pointer hover:bg-muted/50 transition-colors"
              >
                <TableCell className="font-medium">{contribution.id}</TableCell>
                <TableCell>{contribution.title}</TableCell>
                <TableCell className="text-right">{contribution.Contributors.length}</TableCell>
                <TableCell className="text-right font-semibold">
                  {formatCurrency(getTotalAmount(contribution.Contributors))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
