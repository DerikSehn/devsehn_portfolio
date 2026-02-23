import { codeToFlag, countryName, getWeeklyStats, WeeklyStats } from '@/lib/analytics'
import { emailService } from '@/lib/email'
import { NextRequest, NextResponse } from 'next/server'

const REPORT_TO = 'derikbosing@gmail.com'

// Vercel cron jobs send a header "Authorization: Bearer <CRON_SECRET>"
// to authenticate the request. We also allow a ?secret= query param
// for easy manual triggering during development.
function isAuthorised(request: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) return true // open in dev when no secret configured

  const authHeader = request.headers.get('authorization')
  if (authHeader === `Bearer ${cronSecret}`) return true

  const querySecret = new URL(request.url).searchParams.get('secret')
  return querySecret === cronSecret
}

/** Unicode block bar — one char per 10 visits, minimum 1 when > 0 */
function miniBar(value: number, max: number): string {
  if (max === 0) return ''
  const filled = Math.max(value > 0 ? 1 : 0, Math.round((value / max) * 12))
  return '█'.repeat(filled) + '░'.repeat(12 - filled)
}

function generateEmailHTML(stats: WeeklyStats): string {
  const { totalVisits, uniqueVisitors, byCountry, byRegion, byPage, byDay, startDate, endDate } = stats

  // Sort helpers
  const topCountries = Object.entries(byCountry)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 10)

  const topRegions = Object.entries(byRegion)
    .filter(([k]) => k !== 'Unknown')
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  const topPages = Object.entries(byPage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  const dailyEntries = Object.entries(byDay)
  const maxDaily = Math.max(...dailyEntries.map(([, v]) => v), 1)

  const countryRows = topCountries
    .map(
      ([name, { count, code }], i) => `
        <tr style="background:${i % 2 === 0 ? '#ffffff' : '#f8fafc'}">
          <td style="padding:10px 16px;color:#6b7280;font-size:13px;font-weight:600;">${i + 1}</td>
          <td style="padding:10px 16px;font-size:20px;">${codeToFlag(code)}</td>
          <td style="padding:10px 16px;color:#1e293b;font-size:14px;">${countryName(code) || name}</td>
          <td style="padding:10px 16px;color:#3b82f6;font-size:14px;font-weight:700;text-align:right;">${count.toLocaleString()}</td>
          <td style="padding:10px 16px;color:#64748b;font-size:12px;text-align:right;">${totalVisits ? Math.round((count / totalVisits) * 100) : 0}%</td>
        </tr>`
    )
    .join('')

  const regionRows = topRegions
    .map(
      ([region, count], i) => `
        <tr style="background:${i % 2 === 0 ? '#ffffff' : '#f8fafc'}">
          <td style="padding:10px 16px;color:#6b7280;font-size:13px;font-weight:600;">${i + 1}</td>
          <td style="padding:10px 16px;color:#1e293b;font-size:14px;">${region}</td>
          <td style="padding:10px 16px;color:#8b5cf6;font-size:14px;font-weight:700;text-align:right;">${count.toLocaleString()}</td>
          <td style="padding:10px 16px;color:#64748b;font-size:12px;text-align:right;">${totalVisits ? Math.round((count / totalVisits) * 100) : 0}%</td>
        </tr>`
    )
    .join('')

  const pageRows = topPages
    .map(
      ([page, count], i) => `
        <tr style="background:${i % 2 === 0 ? '#ffffff' : '#f8fafc'}">
          <td style="padding:10px 16px;color:#6b7280;font-size:13px;font-weight:600;">${i + 1}</td>
          <td style="padding:10px 16px;color:#1e293b;font-size:14px;font-family:monospace;">${page}</td>
          <td style="padding:10px 16px;color:#10b981;font-size:14px;font-weight:700;text-align:right;">${count.toLocaleString()}</td>
          <td style="padding:10px 16px;color:#64748b;font-size:12px;text-align:right;">${totalVisits ? Math.round((count / totalVisits) * 100) : 0}%</td>
        </tr>`
    )
    .join('')

  const dailyRows = dailyEntries
    .map(
      ([day, count]) => `
        <tr>
          <td style="padding:8px 16px;color:#64748b;font-size:13px;white-space:nowrap;">${day}</td>
          <td style="padding:8px 16px;font-family:monospace;font-size:13px;color:#3b82f6;letter-spacing:-1px;">${miniBar(count, maxDaily)}</td>
          <td style="padding:8px 16px;color:#1e293b;font-size:13px;font-weight:600;text-align:right;">${count}</td>
        </tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Weekly Traffic Report — Dérik Sehn Portfolio</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
    <tr><td align="center">
      <table width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;">

        <!-- ── HEADER ── -->
        <tr>
          <td style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%);border-radius:16px 16px 0 0;padding:40px 40px 32px;">
            <p style="margin:0 0 8px;color:#94a3b8;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Weekly Analytics Report</p>
            <h1 style="margin:0 0 4px;color:#f8fafc;font-size:28px;font-weight:700;letter-spacing:-0.5px;">Dérik Sehn Portfolio</h1>
            <p style="margin:0;color:#64748b;font-size:14px;">${startDate} &rarr; ${endDate}</p>
          </td>
        </tr>

        <!-- ── KPI STRIP ── -->
        <tr>
          <td style="background:#0f172a;padding:0 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="33%" style="padding:20px 12px 20px 0;">
                  <div style="background:#1e293b;border-radius:12px;padding:20px;border-top:3px solid #3b82f6;">
                    <p style="margin:0 0 6px;color:#64748b;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Total Views</p>
                    <p style="margin:0;color:#f8fafc;font-size:32px;font-weight:800;">${totalVisits.toLocaleString()}</p>
                  </div>
                </td>
                <td width="33%" style="padding:20px 6px;">
                  <div style="background:#1e293b;border-radius:12px;padding:20px;border-top:3px solid #8b5cf6;">
                    <p style="margin:0 0 6px;color:#64748b;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Unique Visitors</p>
                    <p style="margin:0;color:#f8fafc;font-size:32px;font-weight:800;">${uniqueVisitors.toLocaleString()}</p>
                  </div>
                </td>
                <td width="33%" style="padding:20px 0 20px 12px;">
                  <div style="background:#1e293b;border-radius:12px;padding:20px;border-top:3px solid #10b981;">
                    <p style="margin:0 0 6px;color:#64748b;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Countries</p>
                    <p style="margin:0;color:#f8fafc;font-size:32px;font-weight:800;">${Object.keys(byCountry).length}</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── DAILY ACTIVITY ── -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px 24px;border-top:1px solid #e2e8f0;">
            <h2 style="margin:0 0 20px;color:#0f172a;font-size:16px;font-weight:700;letter-spacing:-0.3px;">
              📅 Daily Activity
            </h2>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${dailyRows || '<tr><td colspan="3" style="padding:16px;color:#94a3b8;text-align:center;">No data yet</td></tr>'}
            </table>
          </td>
        </tr>

        <!-- ── TOP COUNTRIES ── -->
        <tr>
          <td style="background:#ffffff;padding:24px 40px;border-top:1px solid #e2e8f0;">
            <h2 style="margin:0 0 16px;color:#0f172a;font-size:16px;font-weight:700;">
              🌍 Top Countries
            </h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
              <thead>
                <tr style="background:#f8fafc;">
                  <th style="padding:10px 16px;text-align:left;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">#</th>
                  <th style="padding:10px 16px;text-align:left;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Flag</th>
                  <th style="padding:10px 16px;text-align:left;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Country</th>
                  <th style="padding:10px 16px;text-align:right;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Views</th>
                  <th style="padding:10px 16px;text-align:right;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Share</th>
                </tr>
              </thead>
              <tbody>
                ${countryRows || '<tr><td colspan="5" style="padding:16px;color:#94a3b8;text-align:center;">No data yet</td></tr>'}
              </tbody>
            </table>
          </td>
        </tr>

        <!-- ── TOP STATES / REGIONS ── -->
        <tr>
          <td style="background:#ffffff;padding:24px 40px;border-top:1px solid #e2e8f0;">
            <h2 style="margin:0 0 16px;color:#0f172a;font-size:16px;font-weight:700;">
              📍 Top States / Regions
            </h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
              <thead>
                <tr style="background:#f8fafc;">
                  <th style="padding:10px 16px;text-align:left;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">#</th>
                  <th style="padding:10px 16px;text-align:left;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">State / Region</th>
                  <th style="padding:10px 16px;text-align:right;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Views</th>
                  <th style="padding:10px 16px;text-align:right;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Share</th>
                </tr>
              </thead>
              <tbody>
                ${regionRows || '<tr><td colspan="4" style="padding:16px;color:#94a3b8;text-align:center;">No data yet</td></tr>'}
              </tbody>
            </table>
          </td>
        </tr>

        <!-- ── TOP PAGES ── -->
        <tr>
          <td style="background:#ffffff;padding:24px 40px 32px;border-top:1px solid #e2e8f0;">
            <h2 style="margin:0 0 16px;color:#0f172a;font-size:16px;font-weight:700;">
              📄 Top Pages
            </h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #e2e8f0;">
              <thead>
                <tr style="background:#f8fafc;">
                  <th style="padding:10px 16px;text-align:left;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">#</th>
                  <th style="padding:10px 16px;text-align:left;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Page</th>
                  <th style="padding:10px 16px;text-align:right;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Views</th>
                  <th style="padding:10px 16px;text-align:right;color:#64748b;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Share</th>
                </tr>
              </thead>
              <tbody>
                ${pageRows || '<tr><td colspan="4" style="padding:16px;color:#94a3b8;text-align:center;">No data yet</td></tr>'}
              </tbody>
            </table>
          </td>
        </tr>

        <!-- ── FOOTER ── -->
        <tr>
          <td style="background:linear-gradient(135deg,#0f172a,#1e3a5f);border-radius:0 0 16px 16px;padding:28px 40px;text-align:center;">
            <p style="margin:0 0 6px;color:#f8fafc;font-size:14px;font-weight:600;">Dérik Sehn · Portfolio Analytics</p>
            <p style="margin:0;color:#475569;font-size:12px;">
              Automated weekly report · Generated on ${new Date().toUTCString()}
            </p>
            <p style="margin:12px 0 0;color:#334155;font-size:11px;">
              You receive this email as the portfolio owner.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function GET(request: NextRequest) {
  if (!isAuthorised(request)) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const stats = getWeeklyStats()
  const html = generateEmailHTML(stats)

  const sent = await emailService.sendEmail({
    to: REPORT_TO,
    subject: `📊 Weekly Portfolio Traffic Report — ${stats.startDate} → ${stats.endDate}`,
    html,
  })

  if (!sent) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({
    ok: true,
    sentTo: REPORT_TO,
    stats: {
      totalVisits: stats.totalVisits,
      uniqueVisitors: stats.uniqueVisitors,
      countries: Object.keys(stats.byCountry).length,
    },
  })
}
