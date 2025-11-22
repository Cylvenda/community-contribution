import { useState } from "react"
import { ContributionsTable } from "@/components/contributions-table"
import { ContributorsTable } from "@/components/contributors-table"

import contributionsData from './con.json'

export default function Contibutions() {
  const [selectedContribution, setSelectedContribution] = useState<(typeof contributionsData)[0] | null>(null)

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {!selectedContribution ? (
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Contributions</h1>
              <p className="text-muted-foreground">Click on any contribution to view its contributors</p>
            </div>
            <ContributionsTable contributions={contributionsData} onContributionClick={setSelectedContribution} />
          </div>
        ) : (
          <div className="space-y-4">
            <ContributorsTable contribution={selectedContribution} onBack={() => setSelectedContribution(null)} />
          </div>
        )}
      </div>
    </main>
  )
}
