import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0D2B35', padding: 'clamp(3rem,6vw,5rem) clamp(1rem,4vw,3rem)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '3rem', marginBottom: '3rem',
      }}>
        {/* Brand */}
        <div>
          <Link href="/" style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            textDecoration: 'none', marginBottom: '1rem',
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 7,
              background: '#1A7A8A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 14C3 10 6 6 9 6C12 6 15 10 15 14" stroke="#22AABB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 14C6 11.5 7.5 9.5 9 9.5C10.5 9.5 12 11.5 12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="9" cy="4.5" r="1.5" fill="#22AABB"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1rem', color: 'white' }}>
              Maldives <span style={{ color: '#22AABB' }}>Job Lab</span>
            </span>
          </Link>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 220, marginBottom: '1.25rem' }}>
            Find work, hire talent — the Maldives' modern career platform.
          </p>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {['✈', 'f', '◉', 'in'].map(icon => (
              <a key={icon} href="#" style={{
                width: 32, height: 32, borderRadius: 6,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem',
                textDecoration: 'none', transition: 'all 0.15s',
              }}>{icon}</a>
            ))}
          </div>
        </div>

        {/* Job Seekers */}
        <div>
          <h4 style={{ fontFamily: 'Fraunces, serif', color: 'white', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.9rem' }}>Job Seekers</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[['Browse Jobs', '/jobs'], ['Create Profile', '/profile'], ['Salary Guide', '/salaries'], ['Job Alerts', '/alerts'], ['Career Resources', '/resources']].map(([label, href]) => (
              <li key={href}><Link href={href} style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.8rem' }}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h4 style={{ fontFamily: 'Fraunces, serif', color: 'white', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.9rem' }}>Employers</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[['Post a Job', '/employers/post'], ['CV Database', '/employers/cvs'], ['Pricing', '/employers/pricing'], ['Bulk Hiring', '/employers/bulk'], ['Employer Branding', '/employers/branding']].map(([label, href]) => (
              <li key={href}><Link href={href} style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.8rem' }}>{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontFamily: 'Fraunces, serif', color: 'white', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.9rem' }}>Company</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[['About Us', '/about'], ['Contact', '/contact'], ['Privacy Policy', '/privacy'], ['Terms of Use', '/terms'], ['ދިވެހި', '/dv']].map(([label, href]) => (
              <li key={href}><Link href={href} style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.8rem' }}>{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '1.5rem',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
      }}>
        <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.2)' }}>
          © 2026 Maldives Job Lab · Aquate Enterprises Pvt Ltd · Made in Malé 🇲🇻
        </p>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {['EN', 'ދިވެހި'].map(lang => (
            <button key={lang} style={{
              fontSize: '0.7rem', background: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.3)', borderRadius: 4,
              padding: '0.12rem 0.45rem', cursor: 'pointer',
            }}>{lang}</button>
          ))}
        </div>
      </div>
    </footer>
  )
}