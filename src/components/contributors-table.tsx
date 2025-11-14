"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, FlipVerticalIcon, } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"

type Contributor = {
  id: number
  name: string
  amount: number
  date?: string
  avatar: string
}

type Contribution = {
  id: number
  title: string
  Contributors: Contributor[]
}

type ContributorsTableProps = {
  contribution: Contribution
  onBack: () => void
}

export function ContributorsTable({ contribution, onBack }: ContributorsTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "TZS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getTotalAmount = () => {
    return contribution.Contributors.reduce((sum, contributor) => sum + contributor.amount, 0)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={onBack} className="shrink-0 bg-transparent">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to contributions</span>
          </Button>
          <div className="flex-1">
            <CardTitle>{contribution.title}</CardTitle>
            <CardDescription>
              {contribution.Contributors.length} contributors • Total: {formatCurrency(getTotalAmount())}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20">ID</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Date Of Due</TableHead>
              <TableHead >Amount</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contribution.Contributors.map((contributor) => (
              <TableRow key={contributor.id}>
                <TableCell className="font-medium">{contributor.id}</TableCell>
                <TableCell>
                  {contributor.name}
                </TableCell>
                <TableCell>
                  {contributor.date || Date()}
                </TableCell>
                <TableCell className="font-semibold">{formatCurrency(contributor.amount)}</TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                        size="icon"
                      >
                        <FlipVerticalIcon />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-32">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Make a copy</DropdownMenuItem>
                      <DropdownMenuItem>Favorite</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
