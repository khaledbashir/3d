import type { Product, CabinetLayout } from '@/types'

const FT_TO_MM = 304.8
const KG_TO_LBS = 2.205
const WATTS_TO_BTU = 3.412
// Approximate weight: 30 kg per square meter of LED panel
const KG_PER_SQM = 30

export function calculateCabinetLayout(zoneWidthFt: number, zoneHeightFt: number, product: Product): CabinetLayout {
  const widthMm = zoneWidthFt * FT_TO_MM
  const heightMm = zoneHeightFt * FT_TO_MM

  const cols = Math.max(1, Math.round(widthMm / product.panelWidth))
  const rows = Math.max(1, Math.round(heightMm / product.panelHeight))
  const totalCabinets = cols * rows

  const actualWidthMm = cols * product.panelWidth
  const actualHeightMm = rows * product.panelHeight
  const actualWidthFt = actualWidthMm / FT_TO_MM
  const actualHeightFt = actualHeightMm / FT_TO_MM

  const areaSqM = (actualWidthMm / 1000) * (actualHeightMm / 1000)
  const totalWeightKg = areaSqM * KG_PER_SQM
  const totalWeightLbs = Math.round(totalWeightKg * KG_TO_LBS)

  const totalPowerW = totalCabinets * product.watts
  const heatLoadBtu = Math.round(totalPowerW * WATTS_TO_BTU)

  const pixelsPerPanelW = Math.round(product.panelWidth / product.pixelPitch)
  const pixelsPerPanelH = Math.round(product.panelHeight / product.pixelPitch)
  const resolutionW = pixelsPerPanelW * cols
  const resolutionH = pixelsPerPanelH * rows

  return {
    cols,
    rows,
    totalCabinets,
    actualWidthFt: Math.round(actualWidthFt * 100) / 100,
    actualHeightFt: Math.round(actualHeightFt * 100) / 100,
    totalWeightLbs,
    totalPowerW,
    heatLoadBtu,
    resolutionW,
    resolutionH,
  }
}
