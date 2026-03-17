import type { Sponsor } from '@/types'
import { sponsorLogos } from './sponsorLogos'

export const sponsors: Sponsor[] = [
  { id: 'none', name: 'No Sponsor', color: '#1a1a2e', logoText: '' },
  { id: 'nike', name: 'Nike', color: '#111111', logoText: 'NIKE', logoUrl: sponsorLogos.nike },
  { id: 'pepsi', name: 'Pepsi', color: '#004B93', logoText: 'PEPSI', logoUrl: sponsorLogos.pepsi },
  { id: 'bud', name: 'Budweiser', color: '#8B0000', logoText: 'BUD', logoUrl: sponsorLogos.bud },
  { id: 'att', name: 'AT&T', color: '#009FDB', logoText: 'AT&T', logoUrl: sponsorLogos.att },
  { id: 'microsoft', name: 'Microsoft', color: '#505050', logoText: 'MSFT', logoUrl: sponsorLogos.microsoft },
  { id: 'toyota', name: 'Toyota', color: '#CC0000', logoText: 'TOYOTA', logoUrl: sponsorLogos.toyota },
  { id: 'visa', name: 'Visa', color: '#1A1F71', logoText: 'VISA', logoUrl: sponsorLogos.visa },
  { id: 'mcdonalds', name: "McDonald's", color: '#DA8B00', logoText: "McD's", logoUrl: sponsorLogos.mcdonalds },
  { id: 'cocacola', name: 'Coca-Cola', color: '#D12421', logoText: 'COKE', logoUrl: sponsorLogos.cocacola },
  { id: 'geico', name: 'GEICO', color: '#0055A4', logoText: 'GEICO', logoUrl: sponsorLogos.geico },
  { id: 'statefarm', name: 'State Farm', color: '#B71234', logoText: 'STATE FARM', logoUrl: sponsorLogos.statefarm },
  { id: 'verizon', name: 'Verizon', color: '#CD040B', logoText: 'VZ', logoUrl: sponsorLogos.verizon },
  { id: 'bmw', name: 'BMW', color: '#1C69D4', logoText: 'BMW', logoUrl: sponsorLogos.bmw },
]

export function getSponsor(id: string): Sponsor {
  return sponsors.find(s => s.id === id) ?? sponsors[0]
}
