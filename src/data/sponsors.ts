import type { Sponsor } from '@/types'

export const sponsors: Sponsor[] = [
  { id: 'none', name: 'No Sponsor', color: '#1a1a2e', logoText: '' },
  { id: 'nike', name: 'Nike', color: '#111111', logoText: 'NIKE' },
  { id: 'pepsi', name: 'Pepsi', color: '#004B93', logoText: 'PEPSI' },
  { id: 'bud', name: 'Budweiser', color: '#8B0000', logoText: 'BUD' },
  { id: 'att', name: 'AT&T', color: '#009FDB', logoText: 'AT&T' },
  { id: 'microsoft', name: 'Microsoft', color: '#505050', logoText: 'MSFT' },
  { id: 'toyota', name: 'Toyota', color: '#CC0000', logoText: 'TOYOTA' },
  { id: 'visa', name: 'Visa', color: '#1A1F71', logoText: 'VISA' },
  { id: 'mcdonalds', name: "McDonald's", color: '#DA8B00', logoText: "McD's" },
  { id: 'cocacola', name: 'Coca-Cola', color: '#D12421', logoText: 'COKE' },
  { id: 'geico', name: 'GEICO', color: '#0055A4', logoText: 'GEICO' },
  { id: 'statefarm', name: 'State Farm', color: '#B71234', logoText: 'STATE FARM' },
  { id: 'verizon', name: 'Verizon', color: '#CD040B', logoText: 'VZ' },
  { id: 'bmw', name: 'BMW', color: '#1C69D4', logoText: 'BMW' },
]

export function getSponsor(id: string): Sponsor {
  return sponsors.find(s => s.id === id) ?? sponsors[0]
}
