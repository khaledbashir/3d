import type { Sponsor } from '@/types'
import { sponsorLogos } from './sponsorLogos'

export const sponsors: Sponsor[] = [
  { id: 'none', name: 'No Sponsor', color: '#1a1a2e', logoText: '' },
  { id: 'nike', name: 'Nike', color: '#111111', logoText: 'NIKE', logoUrl: sponsorLogos.nike },
  { id: 'pepsi', name: 'Pepsi', color: '#004B93', logoText: 'PEPSI', logoUrl: sponsorLogos.pepsi },
  { id: 'chase', name: 'Chase', color: '#117ACA', logoText: 'CHASE', logoUrl: sponsorLogos.chase },
  { id: 'att', name: 'AT&T', color: '#00264d', logoText: 'AT&T', logoUrl: sponsorLogos.att },
  { id: 'microsoft', name: 'Microsoft', color: '#404040', logoText: 'MSFT', logoUrl: sponsorLogos.microsoft },
  { id: 'toyota', name: 'Toyota', color: '#EB0A1E', logoText: 'TOYOTA', logoUrl: sponsorLogos.toyota },
  { id: 'visa', name: 'Visa', color: '#1A1F71', logoText: 'VISA', logoUrl: sponsorLogos.visa },
  { id: 'mcdonalds', name: "McDonald's", color: '#DA291C', logoText: "McD's", logoUrl: sponsorLogos.mcdonalds },
  { id: 'cocacola', name: 'Coca-Cola', color: '#F40009', logoText: 'COKE', logoUrl: sponsorLogos.cocacola },
  { id: 'delta', name: 'Delta', color: '#003366', logoText: 'DELTA', logoUrl: sponsorLogos.delta },
  { id: 'americanexpress', name: 'American Express', color: '#006FCF', logoText: 'AMEX', logoUrl: sponsorLogos.americanexpress },
  { id: 'verizon', name: 'Verizon', color: '#CD040B', logoText: 'VZ', logoUrl: sponsorLogos.verizon },
  { id: 'bmw', name: 'BMW', color: '#16588E', logoText: 'BMW', logoUrl: sponsorLogos.bmw },
]

export function getSponsor(id: string): Sponsor {
  return sponsors.find(s => s.id === id) ?? sponsors[0]
}
