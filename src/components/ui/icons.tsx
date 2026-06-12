// Shared inline SVG icon set — stroke-based, inherits currentColor.

interface IconProps {
  size?: number
  className?: string
}

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
}

export const StadiumIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <ellipse cx="12" cy="12" rx="9.5" ry="6.5" />
    <ellipse cx="12" cy="12" rx="5" ry="3" />
    <path d="M2.5 12v2.2c0 3.6 4.3 6.3 9.5 6.3s9.5-2.7 9.5-6.3V12" />
  </svg>
)

export const ArenaIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.4 4 5.5 4 9s-1.5 6.6-4 9" />
    <path d="M12 3c-2.5 2.4-4 5.5-4 9s1.5 6.6 4 9" />
  </svg>
)

export const RetailIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 9.5 5.2 4h13.6L20 9.5" />
    <path d="M4 9.5a2.6 2.6 0 0 0 5.3 0 2.65 2.65 0 0 0 5.4 0 2.6 2.6 0 0 0 5.3 0" />
    <path d="M5 12v8h14v-8" />
    <path d="M9.5 20v-5h5v5" />
  </svg>
)

export const TransitIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="5" y="3" width="14" height="13" rx="3" />
    <path d="M5 10h14" />
    <circle cx="9" cy="13" r="0.4" fill="currentColor" />
    <circle cx="15" cy="13" r="0.4" fill="currentColor" />
    <path d="m8 21 1.5-3M16 21l-1.5-3M7 21h10" />
  </svg>
)

export const CrowdEmptyIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5.5 20c.7-3.6 3.3-5.6 6.5-5.6s5.8 2 6.5 5.6" strokeDasharray="2 2.4" />
  </svg>
)

export const CrowdHalfIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="9" cy="8.5" r="2.8" />
    <path d="M3.5 19.5c.6-3.1 2.8-4.9 5.5-4.9s4.9 1.8 5.5 4.9" />
    <circle cx="16.8" cy="8" r="2.4" strokeDasharray="2 2" />
    <path d="M15 13.6c2.7.1 4.8 1.9 5.5 4.9" strokeDasharray="2 2.2" />
  </svg>
)

export const CrowdFullIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="8.2" cy="8.5" r="2.6" />
    <path d="M3 19.5c.6-2.9 2.6-4.6 5.2-4.6s4.6 1.7 5.2 4.6" />
    <circle cx="16" cy="8.5" r="2.6" />
    <path d="M13.4 15.5c.8-.4 1.7-.6 2.6-.6 2.6 0 4.6 1.7 5.2 4.6" />
  </svg>
)

export const CompassIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </svg>
)

export const GridIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="4" y="4" width="7" height="7" rx="1.4" />
    <rect x="13" y="4" width="7" height="7" rx="1.4" />
    <rect x="4" y="13" width="7" height="7" rx="1.4" />
    <rect x="13" y="13" width="7" height="7" rx="1.4" />
  </svg>
)

export const BoltIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M13 3 5 13.5h6L11 21l8-10.5h-6z" />
  </svg>
)

export const RevenueIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9.2c-.6-1-1.6-1.5-3-1.5-1.8 0-3 .9-3 2.2 0 2.9 6 1.4 6 4.3 0 1.3-1.2 2.2-3 2.2-1.4 0-2.4-.5-3-1.5" />
    <path d="M12 6v12" />
  </svg>
)

export const AnalyticsIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 20V10M10 20V4M16 20v-8M21 20H3.5" />
  </svg>
)

export const RoiIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="m3.5 17 5.5-5.5 3.5 3.5 7.5-7.5" />
    <path d="M15 7.5h5v5" />
  </svg>
)

export const PlayIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M8 5.5v13l10-6.5z" />
  </svg>
)

export const StopIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="6.5" y="6.5" width="11" height="11" rx="1.6" />
  </svg>
)

export const ResetIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 10a8.3 8.3 0 0 1 14.5-3.2L21 9.5" />
    <path d="M21 4.5v5h-5" />
    <path d="M20 14a8.3 8.3 0 0 1-14.5 3.2L3 14.5" />
    <path d="M3 19.5v-5h5" />
  </svg>
)

export const SetupIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
    <circle cx="16" cy="7" r="2.2" />
    <circle cx="8" cy="17" r="2.2" />
  </svg>
)

export const SaveIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M6 4h9.5L20 8.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M8 4v5h7V4M8 20v-6h8v6" />
  </svg>
)

export const ExportIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5" />
    <path d="M5 19h14" />
  </svg>
)

export const ShareIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M9.5 13.5a4.5 4.5 0 0 0 6.4.4l3-3a4.5 4.5 0 1 0-6.4-6.3l-1.3 1.3" />
    <path d="M14.5 10.5a4.5 4.5 0 0 0-6.4-.4l-3 3a4.5 4.5 0 1 0 6.4 6.3l1.3-1.3" />
  </svg>
)

export const PresentIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="m10 8.5 4 1.5-4 1.5z" fill="currentColor" stroke="none" />
    <path d="M12 16v4M8.5 20h7" />
  </svg>
)

export const DotsIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const CheckIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
)
