/**
 * Creates a placeholder image data URL
 */
export function createPlaceholderImage(width: number, height: number, text: string, bgColor = '#F9FAFB'): string {
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      
      <!-- Status bar -->
      <rect x="20" y="50" width="60" height="20" rx="10" fill="#000000"/>
      <rect x="${width - 80}" y="50" width="60" height="20" rx="10" fill="#000000"/>
      
      <!-- Header -->
      <rect x="20" y="100" width="${width - 40}" height="60" rx="12" fill="#6C39F9"/>
      <text x="${width / 2}" y="135" fill="white" font-size="18" font-weight="600" text-anchor="middle" font-family="system-ui">${text}</text>
      
      <!-- Content area -->
      <rect x="20" y="180" width="${width - 40}" height="200" rx="12" fill="#FFFFFF" stroke="#E5E7EB"/>
      
      <!-- Chart placeholder -->
      <path d="M40 320L80 280L120 300L160 260L200 280L240 240L280 220L${width - 40} 200" stroke="#6C39F9" stroke-width="3" fill="none"/>
      
      <!-- Cards -->
      <rect x="20" y="400" width="${(width - 60) / 2}" height="80" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
      <rect x="${40 + (width - 60) / 2}" y="400" width="${(width - 60) / 2}" height="80" rx="8" fill="#FFFFFF" stroke="#E5E7EB"/>
      
      <!-- Bottom navigation -->
      <rect x="0" y="${height - 100}" width="${width}" height="100" fill="#FFFFFF" stroke="#E5E7EB"/>
      <circle cx="${width / 4}" cy="${height - 50}" r="20" fill="#6C39F9"/>
      <circle cx="${(width / 4) * 2}" cy="${height - 50}" r="15" fill="#E5E7EB"/>
      <circle cx="${(width / 4) * 3}" cy="${height - 50}" r="15" fill="#E5E7EB"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

