import { useMemo } from 'react'

export interface RoiInputs {
  projectCost: number
  venueCapacity: number
  eventsPerYear: number
  adCpmRate: number
  sponsorPackages: number
  avgSponsorRate: number
}

export interface RoiResults {
  annualAdRevenue: number
  annualSponsorRevenue: number
  totalAnnualRevenue: number
  paybackMonths: number
  fiveYearProfit: number
  yearlyBreakdown: { year: number; revenue: number; cumulative: number; profit: number }[]
}

export const DEFAULT_ROI_INPUTS: RoiInputs = {
  projectCost: 2500000,
  venueCapacity: 20000,
  eventsPerYear: 82,
  adCpmRate: 45,
  sponsorPackages: 8,
  avgSponsorRate: 150000,
}

export function useRoiCalculation(inputs: RoiInputs): RoiResults {
  return useMemo(() => {
    const annualAdRevenue = (inputs.venueCapacity * inputs.eventsPerYear / 1000) * inputs.adCpmRate
    const annualSponsorRevenue = inputs.sponsorPackages * inputs.avgSponsorRate
    const totalAnnualRevenue = annualAdRevenue + annualSponsorRevenue
    const paybackMonths = totalAnnualRevenue > 0
      ? Math.round((inputs.projectCost / totalAnnualRevenue) * 12)
      : 0
    const fiveYearProfit = (totalAnnualRevenue * 5) - inputs.projectCost

    const yearlyBreakdown = Array.from({ length: 5 }, (_, i) => {
      const year = i + 1
      const revenue = totalAnnualRevenue
      const cumulative = revenue * year
      const profit = cumulative - inputs.projectCost
      return { year, revenue, cumulative, profit }
    })

    return { annualAdRevenue, annualSponsorRevenue, totalAnnualRevenue, paybackMonths, fiveYearProfit, yearlyBreakdown }
  }, [inputs.projectCost, inputs.venueCapacity, inputs.eventsPerYear, inputs.adCpmRate, inputs.sponsorPackages, inputs.avgSponsorRate])
}
