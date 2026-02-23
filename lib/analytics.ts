import { existsSync, readFileSync, writeFileSync } from 'fs'

export interface VisitRecord {
  timestamp: number
  countryCode: string
  region: string
  city: string
  page: string
  ip: string // hashed for privacy
}

export interface RawVisitInput {
  timestamp: number
  countryCode: string
  region: string
  city: string
  page: string
  rawIp: string
}

export interface WeeklyStats {
  totalVisits: number
  uniqueVisitors: number
  byCountry: Record<string, { count: number; code: string }>
  byRegion: Record<string, number>
  byPage: Record<string, number>
  byDay: Record<string, number>
  startDate: string
  endDate: string
}

const ANALYTICS_FILE = '/tmp/portfolio-analytics.json'
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000

const COUNTRY_NAMES: Record<string, string> = {
  AD: 'Andorra', AE: 'UAE', AR: 'Argentina', AT: 'Austria', AU: 'Australia',
  BD: 'Bangladesh', BE: 'Belgium', BG: 'Bulgaria', BO: 'Bolivia', BR: 'Brazil',
  CA: 'Canada', CH: 'Switzerland', CL: 'Chile', CN: 'China', CO: 'Colombia',
  CR: 'Costa Rica', CZ: 'Czech Republic', DE: 'Germany', DK: 'Denmark',
  EC: 'Ecuador', EE: 'Estonia', EG: 'Egypt', ES: 'Spain', FI: 'Finland',
  FR: 'France', GB: 'United Kingdom', GH: 'Ghana', GR: 'Greece', HK: 'Hong Kong',
  HR: 'Croatia', HU: 'Hungary', ID: 'Indonesia', IE: 'Ireland', IL: 'Israel',
  IN: 'India', IT: 'Italy', JP: 'Japan', KE: 'Kenya', KR: 'South Korea',
  LK: 'Sri Lanka', LT: 'Lithuania', LV: 'Latvia', MA: 'Morocco', MX: 'Mexico',
  MY: 'Malaysia', NG: 'Nigeria', NL: 'Netherlands', NO: 'Norway', NP: 'Nepal',
  NZ: 'New Zealand', PH: 'Philippines', PK: 'Pakistan', PL: 'Poland',
  PT: 'Portugal', PY: 'Paraguay', RO: 'Romania', RU: 'Russia', SA: 'Saudi Arabia',
  SE: 'Sweden', SG: 'Singapore', SI: 'Slovenia', SK: 'Slovakia', TH: 'Thailand',
  TR: 'Turkey', TW: 'Taiwan', UA: 'Ukraine', US: 'United States', UY: 'Uruguay',
  VE: 'Venezuela', VN: 'Vietnam', ZA: 'South Africa',
}

/** Converts an ISO 3166-1 alpha-2 code to a flag emoji */
export function codeToFlag(code: string): string {
  if (!code || code.length !== 2) return '🌍'
  return code
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(c.charCodeAt(0) + 127397))
    .join('')
}

/** Returns the full country name for a given ISO code */
export function countryName(code: string): string {
  return COUNTRY_NAMES[code?.toUpperCase()] ?? code ?? 'Unknown'
}

/** Simple SHA-256-like hash for IP anonymisation (no crypto module needed) */
function hashIp(ip: string): string {
  let hash = 5381
  for (let i = 0; i < ip.length; i++) {
    hash = ((hash << 5) + hash) ^ ip.charCodeAt(i)
  }
  return (hash >>> 0).toString(16)
}

function loadData(): VisitRecord[] {
  try {
    if (existsSync(ANALYTICS_FILE)) {
      return JSON.parse(readFileSync(ANALYTICS_FILE, 'utf-8')) as VisitRecord[]
    }
  } catch {
    // ignore read errors
  }
  return []
}

function saveData(visits: VisitRecord[]): void {
  try {
    writeFileSync(ANALYTICS_FILE, JSON.stringify(visits), 'utf-8')
  } catch {
    // ignore write errors (e.g. read-only fs)
  }
}

export function recordVisit(input: RawVisitInput): void {
  const visits = loadData()
  const { rawIp, ...rest } = input
  visits.push({ ...rest, ip: hashIp(rawIp) })

  // Keep only data within the last 7 days to limit storage
  const cutoff = Date.now() - ONE_WEEK_MS
  saveData(visits.filter((v) => v.timestamp > cutoff))
}

export function getWeeklyStats(): WeeklyStats {
  const visits = loadData()
  const cutoff = Date.now() - ONE_WEEK_MS
  const week = visits.filter((v) => v.timestamp > cutoff)

  const byCountry: Record<string, { count: number; code: string }> = {}
  const byRegion: Record<string, number> = {}
  const byPage: Record<string, number> = {}
  const byDay: Record<string, number> = {}
  const uniqueIps = new Set<string>()

  for (const v of week) {
    // Country — derived from stored code
    const cName = countryName(v.countryCode) || v.countryCode || 'Unknown'
    if (!byCountry[cName]) byCountry[cName] = { count: 0, code: v.countryCode }
    byCountry[cName].count++

    // Region
    const region = v.region || 'Unknown'
    byRegion[region] = (byRegion[region] || 0) + 1

    // Page
    const page = v.page || '/'
    byPage[page] = (byPage[page] || 0) + 1

    // Day (short format)
    const day = new Date(v.timestamp).toLocaleDateString('en-US', {
      weekday: 'short',
      month: '2-digit',
      day: '2-digit',
    })
    byDay[day] = (byDay[day] || 0) + 1

    uniqueIps.add(v.ip)
  }

  return {
    totalVisits: week.length,
    uniqueVisitors: uniqueIps.size,
    byCountry,
    byRegion,
    byPage,
    byDay,
    startDate: new Date(cutoff).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    endDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  }
}
