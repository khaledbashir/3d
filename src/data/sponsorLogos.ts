// SVG logo data URLs for built-in sponsors
// White-on-transparent so they render well on colored backgrounds

function svgToDataUrl(svg: string): string {
  return 'data:image/svg+xml;base64,' + btoa(svg)
}

const nikeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160">
  <path d="M 40 120 Q 80 30, 200 60 Q 320 90, 370 30 L 350 50 Q 300 100, 180 85 Q 80 70, 40 120 Z" fill="white"/>
</svg>`

const pepsiSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <circle cx="200" cy="100" r="90" fill="none" stroke="white" stroke-width="6"/>
  <path d="M 110 100 Q 200 50, 290 100" fill="none" stroke="white" stroke-width="5"/>
  <text x="200" y="170" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="36" fill="white">PEPSI</text>
</svg>`

const budSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
  <rect x="50" y="40" width="400" height="120" rx="8" fill="none" stroke="white" stroke-width="3"/>
  <text x="250" y="120" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="52" fill="white" letter-spacing="6">BUDWEISER</text>
  <path d="M 180 50 L 200 25 L 220 50 M 230 50 L 250 25 L 270 50 M 280 50 L 300 25 L 320 50" fill="none" stroke="white" stroke-width="3"/>
</svg>`

const attSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <circle cx="200" cy="90" r="70" fill="none" stroke="white" stroke-width="4"/>
  <path d="M 140 60 Q 170 100, 200 70 Q 230 40, 260 80 Q 240 120, 200 100 Q 160 80, 140 120" fill="none" stroke="white" stroke-width="4"/>
  <text x="200" y="185" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="32" fill="white" letter-spacing="8">AT&amp;T</text>
</svg>`

const microsoftSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <rect x="140" y="40" width="50" height="50" fill="#F25022" rx="3"/>
  <rect x="200" y="40" width="50" height="50" fill="#7FBA00" rx="3"/>
  <rect x="140" y="100" width="50" height="50" fill="#00A4EF" rx="3"/>
  <rect x="200" y="100" width="50" height="50" fill="#FFB900" rx="3"/>
</svg>`

const toyotaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <ellipse cx="200" cy="90" rx="100" ry="60" fill="none" stroke="white" stroke-width="5"/>
  <ellipse cx="200" cy="90" rx="60" ry="35" fill="none" stroke="white" stroke-width="4"/>
  <ellipse cx="200" cy="90" rx="30" ry="55" fill="none" stroke="white" stroke-width="4"/>
  <text x="200" y="175" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="28" fill="white" letter-spacing="10">TOYOTA</text>
</svg>`

const visaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160">
  <text x="200" y="105" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-style="italic" font-size="90" fill="white">VISA</text>
</svg>`

const mcdSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <path d="M 100 180 L 130 30 Q 160 120, 200 30 Q 240 120, 270 30 L 300 180" fill="none" stroke="#FFD700" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const cocaColaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180">
  <text x="250" y="90" text-anchor="middle" font-family="Georgia,Times,serif" font-style="italic" font-weight="700" font-size="64" fill="white">Coca-Cola</text>
  <line x1="90" y1="105" x2="410" y2="105" stroke="white" stroke-width="2" opacity="0.4"/>
</svg>`

const geicoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160">
  <text x="200" y="90" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="70" fill="white">GEICO</text>
  <rect x="80" y="110" width="240" height="3" rx="1" fill="white" opacity="0.5"/>
</svg>`

const statefarmSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
  <ellipse cx="250" cy="70" rx="50" ry="45" fill="none" stroke="white" stroke-width="4"/>
  <ellipse cx="210" cy="80" rx="30" ry="25" fill="none" stroke="white" stroke-width="3"/>
  <ellipse cx="290" cy="80" rx="30" ry="25" fill="none" stroke="white" stroke-width="3"/>
  <text x="250" y="155" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="36" fill="white">STATE FARM</text>
</svg>`

const verizonSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160">
  <text x="210" y="100" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="56" fill="white">verizon</text>
  <path d="M 330 50 L 350 85 L 380 30" fill="none" stroke="#FF0000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const bmwSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <circle cx="150" cy="90" r="70" fill="none" stroke="white" stroke-width="5"/>
  <circle cx="150" cy="90" r="55" fill="none" stroke="white" stroke-width="2"/>
  <line x1="150" y1="35" x2="150" y2="145" stroke="white" stroke-width="2"/>
  <line x1="95" y1="90" x2="205" y2="90" stroke="white" stroke-width="2"/>
  <path d="M 150 35 A 55 55 0 0 1 205 90 L 150 90 Z" fill="#1C69D4"/>
  <path d="M 95 90 A 55 55 0 0 1 150 35 L 150 90 Z" fill="white"/>
  <path d="M 150 145 A 55 55 0 0 1 95 90 L 150 90 Z" fill="#1C69D4"/>
  <path d="M 205 90 A 55 55 0 0 1 150 145 L 150 90 Z" fill="white"/>
  <text x="150" y="182" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="22" fill="white">BMW</text>
</svg>`

export const sponsorLogos: Record<string, string> = {
  nike: svgToDataUrl(nikeSvg),
  pepsi: svgToDataUrl(pepsiSvg),
  bud: svgToDataUrl(budSvg),
  att: svgToDataUrl(attSvg),
  microsoft: svgToDataUrl(microsoftSvg),
  toyota: svgToDataUrl(toyotaSvg),
  visa: svgToDataUrl(visaSvg),
  mcdonalds: svgToDataUrl(mcdSvg),
  cocacola: svgToDataUrl(cocaColaSvg),
  geico: svgToDataUrl(geicoSvg),
  statefarm: svgToDataUrl(statefarmSvg),
  verizon: svgToDataUrl(verizonSvg),
  bmw: svgToDataUrl(bmwSvg),
}
