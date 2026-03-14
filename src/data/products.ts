import type { Product, Environment } from '@/types'

export const products: Product[] = [
  // ANC Brand — 2.9mm
  { id: 'anc-ct-29-6', manufacturer: 'ANC', series: "6' Courtside Table", sku: 'ANC-CT-29-6', pixelPitch: 2.9, panelWidth: 1999, panelHeight: 750, nits: 5000, watts: 220, environment: 'indoor' },
  { id: 'anc-ct-29-10', manufacturer: 'ANC', series: "10' Courtside Table", sku: 'ANC-CT-29-10', pixelPitch: 2.9, panelWidth: 2996, panelHeight: 750, nits: 5000, watts: 320, environment: 'indoor' },
  { id: 'anc-ct-29-8', manufacturer: 'ANC', series: "8' Courtside Table", sku: 'ANC-CT-29-8', pixelPitch: 2.9, panelWidth: 2490, panelHeight: 750, nits: 5000, watts: 270, environment: 'indoor' },
  { id: 'anc-ct-29-5', manufacturer: 'ANC', series: "5' Courtside Table", sku: 'ANC-CT-29-5', pixelPitch: 2.9, panelWidth: 1499, panelHeight: 750, nits: 5000, watts: 200, environment: 'indoor' },
  { id: 'anc-st-29-single', manufacturer: 'ANC', series: 'Stanchion Single', sku: 'ANC-ST-29-SINGLE', pixelPitch: 2.9, panelWidth: 1027, panelHeight: 300, nits: 5000, watts: 100, environment: 'indoor' },
  { id: 'anc-st-29-double', manufacturer: 'ANC', series: 'Stanchion Double', sku: 'ANC-ST-29-DOUBLE', pixelPitch: 2.9, panelWidth: 1027, panelHeight: 600, nits: 5000, watts: 200, environment: 'indoor' },
  // ANC Brand — 3.9mm
  { id: 'anc-ct-39-6', manufacturer: 'ANC', series: "6' Courtside Table", sku: 'ANC-CT-39-6', pixelPitch: 3.9, panelWidth: 1999, panelHeight: 750, nits: 5000, watts: 200, environment: 'indoor' },
  { id: 'anc-ct-39-10', manufacturer: 'ANC', series: "10' Courtside Table", sku: 'ANC-CT-39-10', pixelPitch: 3.9, panelWidth: 2996, panelHeight: 750, nits: 5000, watts: 300, environment: 'indoor' },
  { id: 'anc-ct-39-8', manufacturer: 'ANC', series: "8' Courtside Table", sku: 'ANC-CT-39-8', pixelPitch: 3.9, panelWidth: 2490, panelHeight: 750, nits: 5000, watts: 250, environment: 'indoor' },
  { id: 'anc-ct-39-5', manufacturer: 'ANC', series: "5' Courtside Table", sku: 'ANC-CT-39-5', pixelPitch: 3.9, panelWidth: 1499, panelHeight: 750, nits: 5000, watts: 180, environment: 'indoor' },
  { id: 'anc-st-39-single', manufacturer: 'ANC', series: 'Stanchion Single', sku: 'ANC-ST-39-SINGLE', pixelPitch: 3.9, panelWidth: 770, panelHeight: 300, nits: 5000, watts: 80, environment: 'indoor' },
  { id: 'anc-st-39-double', manufacturer: 'ANC', series: 'Stanchion Double', sku: 'ANC-ST-39-DOUBLE', pixelPitch: 3.9, panelWidth: 770, panelHeight: 600, nits: 5000, watts: 160, environment: 'indoor' },
  // Yaham
  { id: 'yaham-r25-mip', manufacturer: 'Yaham', series: 'Radiance R2.5-MIP', sku: 'R2.5-MIP', pixelPitch: 2.5, panelWidth: 480, panelHeight: 540, nits: 3000, watts: 150, environment: 'outdoor', pricePerPanel: 536.25 },
  { id: 'yaham-c25-mip', manufacturer: 'Yaham', series: 'Corona C2.5-MIP', sku: 'C2.5-MIP', pixelPitch: 2.5, panelWidth: 960, panelHeight: 960, nits: 2000, watts: 370, environment: 'indoor', pricePerPanel: 251.57 },
  { id: 'yaham-s3', manufacturer: 'Yaham', series: 'S3', sku: 'S3', pixelPitch: 3.9, panelWidth: 320, panelHeight: 320, nits: 1500, watts: 160, environment: 'indoor' },
  { id: 'yaham-r4', manufacturer: 'Yaham', series: 'Radiance R4', sku: 'R4', pixelPitch: 3.91, panelWidth: 1000, panelHeight: 1000, nits: 7000, watts: 650, environment: 'outdoor', pricePerPanel: 232.53 },
  { id: 'yaham-c4', manufacturer: 'Yaham', series: 'Corona C4', sku: 'C4', pixelPitch: 4, panelWidth: 960, panelHeight: 960, nits: 2000, watts: 370, environment: 'indoor', pricePerPanel: 178.09 },
  { id: 'yaham-r6', manufacturer: 'Yaham', series: 'Radiance R6', sku: 'R6', pixelPitch: 5.95, panelWidth: 1000, panelHeight: 1000, nits: 10000, watts: 650, environment: 'outdoor', pricePerPanel: 260.14 },
  { id: 'yaham-c6', manufacturer: 'Yaham', series: 'Corona C6', sku: 'C6', pixelPitch: 6, panelWidth: 960, panelHeight: 960, nits: 2000, watts: 370, environment: 'indoor', pricePerPanel: 136.51 },
  { id: 'yaham-ho6t', manufacturer: 'Yaham', series: 'Halo Outdoor HO6T', sku: 'HO6T', pixelPitch: 6.25, panelWidth: 800, panelHeight: 900, nits: 10000, watts: 460, environment: 'outdoor', pricePerPanel: 293.20 },
  { id: 'yaham-r8', manufacturer: 'Yaham', series: 'Radiance R8', sku: 'R8', pixelPitch: 8.33, panelWidth: 1000, panelHeight: 1000, nits: 10000, watts: 650, environment: 'outdoor', pricePerPanel: 194.07 },
  { id: 'yaham-h10t', manufacturer: 'Yaham', series: 'Halo H10T', sku: 'H10T', pixelPitch: 10, panelWidth: 960, panelHeight: 960, nits: 2000, watts: 370, environment: 'indoor', pricePerPanel: 116.25 },
  { id: 'yaham-c10', manufacturer: 'Yaham', series: 'Corona C10', sku: 'C10', pixelPitch: 10, panelWidth: 960, panelHeight: 960, nits: 2000, watts: 370, environment: 'indoor', pricePerPanel: 112.22 },
  { id: 'yaham-ho10t', manufacturer: 'Yaham', series: 'Halo Outdoor HO10T', sku: 'HO10T', pixelPitch: 10, panelWidth: 800, panelHeight: 900, nits: 10000, watts: 460, environment: 'outdoor', pricePerPanel: 176.45 },
  { id: 'yaham-a10', manufacturer: 'Yaham', series: 'Aura A10', sku: 'A10', pixelPitch: 10, panelWidth: 1600, panelHeight: 900, nits: 7500, watts: 680, environment: 'outdoor', pricePerPanel: 206.59 },
  { id: 'yaham-r10', manufacturer: 'Yaham', series: 'Radiance R10', sku: 'R10', pixelPitch: 10, panelWidth: 1000, panelHeight: 1000, nits: 10000, watts: 650, environment: 'outdoor', pricePerPanel: 154.79 },
  // LG
  { id: 'lg-lscc-12', manufacturer: 'LG', series: 'LSCC 1.2mm', sku: 'LSCC-12', pixelPitch: 1.2, panelWidth: 600, panelHeight: 337.5, nits: 900, watts: 112, environment: 'indoor' },
  { id: 'lg-lsca-15', manufacturer: 'LG', series: 'LSCA 1.5mm', sku: 'LSCA-15', pixelPitch: 1.5, panelWidth: 600, panelHeight: 337.5, nits: 600, watts: 150, environment: 'indoor' },
  { id: 'lg-lscc-1875', manufacturer: 'LG', series: 'LSCC 1.875mm', sku: 'LSCC-1875', pixelPitch: 1.875, panelWidth: 600, panelHeight: 337.5, nits: 900, watts: 96, environment: 'indoor' },
  { id: 'lg-lscc-25', manufacturer: 'LG', series: 'LSCC 2.5mm', sku: 'LSCC-25', pixelPitch: 2.5, panelWidth: 600, panelHeight: 337.5, nits: 900, watts: 84, environment: 'indoor' },
  { id: 'lg-gscf-26', manufacturer: 'LG', series: 'GSCF 2.6mm', sku: 'GSCF-26', pixelPitch: 2.6, panelWidth: 500, panelHeight: 500, nits: 5500, watts: 200, environment: 'outdoor' },
  { id: 'lg-gsqa-27', manufacturer: 'LG', series: 'GSQA 2.7mm', sku: 'GSQA-27', pixelPitch: 2.7, panelWidth: 250, panelHeight: 250, nits: 1200, watts: 75, environment: 'indoor' },
  { id: 'lg-gsqa-39', manufacturer: 'LG', series: 'GSQA 3.9mm', sku: 'GSQA-39', pixelPitch: 3.9, panelWidth: 250, panelHeight: 250, nits: 7500, watts: 85, environment: 'indoor' },
  { id: 'lg-laa-6', manufacturer: 'LG', series: 'LAA 6mm', sku: 'LAA-6', pixelPitch: 6, panelWidth: 500, panelHeight: 500, nits: 7000, watts: 250, environment: 'outdoor' },
  { id: 'lg-gsqa-8', manufacturer: 'LG', series: 'GSQA 8mm', sku: 'GSQA-8', pixelPitch: 8, panelWidth: 500, panelHeight: 500, nits: 10000, watts: 425, environment: 'outdoor' },
  { id: 'lg-laa-10', manufacturer: 'LG', series: 'LAA 10mm', sku: 'LAA-10', pixelPitch: 10, panelWidth: 500, panelHeight: 500, nits: 8000, watts: 280, environment: 'outdoor' },
  // LG/Yaham
  { id: 'lgy-cmip-12', manufacturer: 'LG/Yaham', series: 'C-MIP 1.2mm', sku: 'C-MIP-12', pixelPitch: 1.2, panelWidth: 600, panelHeight: 337.5, nits: 2000, watts: 120, environment: 'indoor' },
  { id: 'lgy-cmip-18', manufacturer: 'LG/Yaham', series: 'C-MIP 1.8mm', sku: 'C-MIP-18', pixelPitch: 1.8, panelWidth: 600, panelHeight: 337.5, nits: 2000, watts: 110, environment: 'indoor' },
  { id: 'lgy-cmip-25', manufacturer: 'LG/Yaham', series: 'C-MIP 2.5mm', sku: 'C-MIP-25', pixelPitch: 2.5, panelWidth: 600, panelHeight: 337.5, nits: 2000, watts: 100, environment: 'indoor' },
  { id: 'lgy-mesh-p10', manufacturer: 'LG/Yaham', series: 'Mesh P10 3.9mm', sku: 'MESH-P10', pixelPitch: 3.9, panelWidth: 1000, panelHeight: 500, nits: 6000, watts: 300, environment: 'indoor' },
  { id: 'lgy-mesh-p4', manufacturer: 'LG/Yaham', series: 'Mesh P4 4mm', sku: 'MESH-P4', pixelPitch: 4, panelWidth: 1000, panelHeight: 500, nits: 6000, watts: 300, environment: 'outdoor' },
]

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByEnvironment(env: Environment | 'all'): Product[] {
  if (env === 'all') return products
  return products.filter(p => p.environment === env || p.environment === 'both')
}
