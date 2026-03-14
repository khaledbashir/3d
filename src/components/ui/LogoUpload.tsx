import { useCallback, useRef, useState } from 'react'
import { useVenueStore } from '@/stores/venueStore'
import { loadLogoImage } from '@/utils/ledRenderer'

interface LogoUploadProps {
  sponsorId: string
}

export function LogoUpload({ sponsorId }: LogoUploadProps) {
  const updateSponsorLogo = useVenueStore(s => s.updateSponsorLogo)
  const sponsors = useVenueStore(s => s.sponsors)
  const sponsor = sponsors.find(s => s.id === sponsorId)
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      if (!dataUrl) return
      updateSponsorLogo(sponsorId, dataUrl)
      loadLogoImage(dataUrl).catch(() => {})
    }
    reader.readAsDataURL(file)
  }, [sponsorId, updateSponsorLogo])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const onDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setDragging(true) }, [])
  const onDragLeave = useCallback(() => setDragging(false), [])

  if (!sponsor || sponsor.id === 'none') return null

  return (
    <div className="mt-2">
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() => inputRef.current?.click()}
        className="rounded border border-dashed cursor-pointer transition-all flex items-center justify-center"
        style={{
          height: '44px',
          borderRadius: '14px',
          borderColor: dragging ? '#0A52EF' : 'rgba(255,255,255,0.08)',
          background: dragging ? 'rgba(10,82,239,0.06)' : 'rgba(8, 14, 22, 0.92)',
        }}
      >
        {sponsor.logoUrl ? (
          <div className="flex items-center gap-2 px-2">
            <img src={sponsor.logoUrl} alt="" className="h-5 object-contain" />
            <span className="text-[9px]" style={{ color: '#5a7a9a' }}>Click to change</span>
          </div>
        ) : (
          <span className="text-[9px]" style={{ color: '#5a7a9a' }}>
            Drop logo PNG/SVG or click to upload
          </span>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
      />
    </div>
  )
}
