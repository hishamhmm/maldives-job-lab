import Link from 'next/link'
import { CATEGORIES, SALARIES, EMPLOYERS } from '@/lib/jobs-data'
import JobsSection from '@/components/jobs/JobsSection'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        padding: 'clamp(4rem,8vw,7rem) clamp(1rem,5vw,5rem) clamp(3rem,6vw,5rem)',
        borderBottom: '1px solid #E5E5E5',
        background: '#fff',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'center',
          maxWidth: 1200,
        }}>
          {/* Left */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em',
              textTransform: 'uppercase', color: '#1A7A8A',
              marginBottom: '1.25rem',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22AABB' }} />
              Maldives&apos; Modern Job Platform
            </div>

            <h1 style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(2.8rem,5vw,4.8rem)',
              fontWeight: 700, color: '#0A0A0A',
              lineHeight: 1.04, letterSpacing: '-.03em',
              marginBottom: '1.25rem',
            }}>
              Find work.<br />
              Hire <em style={{ fontStyle: 'italic', color: '#1A7A8A' }}>talent.</em><br />
              In the Maldives.
            </h1>

            <p style={{
              fontSize: '1rem', color: '#555',
              lineHeight: 1.75, maxWidth: 420, marginBottom: '2rem',
            }}>
              The Maldives Job Lab — every sector, every atoll. Real salaries on every listing. No annual contracts.
            </p>

            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="/jobs" style={{
                background: '#0A0A0A', color: '#fff', borderRadius: 9,
                padding: '.75rem 1.75rem', fontSize: '.875rem', fontWeight: 600,
                textDecoration: 'none', transition: 'all .15s',
              }}>
                Browse 2,847 Jobs →
              </Link>
              <Link href="/employers/pricing" style={{
                background: '#fff', color: '#0A0A0A',
                border: '1.5px solid #E5E5E5', borderRadius: 9,
                padding: '.75rem 1.75rem', fontSize: '.875rem', fontWeight: 500,
                textDecoration: 'none',
              }}>
                Post a Job — MVR 500/mo
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { num: '2,847', label: 'live jobs' },
                { num: '340+', label: 'employers' },
                { num: '21k+', label: 'job seekers' },
                { num: '26', label: 'atolls covered' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.78rem', color: '#888' }}>
                  {i > 0 && <span style={{ color: '#ddd' }}>|</span>}
                  <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '.95rem', color: '#0A0A0A' }}>{s.num}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Preview Card */}
          <div style={{
            background: '#FBF8F3', border: '1px solid #E5E5E5',
            borderRadius: 16, padding: '1.5rem',
            display: 'flex', flexDirection: 'column', gap: '.75rem',
          }}>
            <p style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#888', marginBottom: '.25rem' }}>
              Latest postings
            </p>
            {[
              { icon: '🍽️', title: 'Head Chef — Asian Cuisine', co: 'Soneva Fushi · Baa Atoll', sal: 'USD 2,800–3,500' },
              { icon: '🛎️', title: 'Front Office Manager', co: 'Anantara · North Malé Atoll', sal: 'USD 2,400–3,000' },
              { icon: '💻', title: 'IT Systems Administrator', co: 'Bank of Maldives · Malé', sal: 'MVR 18k–22k' },
              { icon: '🐠', title: 'Marine Biologist', co: 'Velaa Private Island · Noonu', sal: 'USD 2,000–2,800' },
            ].map((job, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid #E5E5E5',
                borderRadius: 10, padding: '1rem 1.1rem',
                display: 'flex', alignItems: 'center', gap: '.85rem',
                cursor: 'pointer',
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: '#F0F7F8', border: '1px solid #E5E5E5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', flexShrink: 0,
                }}>{job.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '.85rem', fontWeight: 600, color: '#0A0A0A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{job.title}</div>
                  <div style={{ fontSize: '.74rem', color: '#888', marginTop: '.1rem' }}>{job.co}</div>
                </div>
                <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '.82rem', color: '#1A7A8A', whiteSpace: 'nowrap' }}>{job.sal}</div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              {['🏝️ Resort Jobs', '🏙️ Local Jobs', '🇲🇻 MV Only', '🏛️ Government'].map(tag => (
                <Link key={tag} href="/jobs" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                  background: '#fff', border: '1px solid #E5E5E5',
                  borderRadius: 8, padding: '.5rem .85rem',
                  fontSize: '.72rem', fontWeight: 500, color: '#555',
                  textDecoration: 'none',
                }}>{tag}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{
        borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5',
        padding: '.55rem 0', overflow: 'hidden', background: '#FBF8F3',
      }}>
        <div style={{
          display: 'flex', width: 'max-content',
          animation: 'ticker 35s linear infinite',
        }}>
          {[...Array(2)].map((_, di) => (
            ['Soneva Fushi', 'Four Seasons', 'Anantara', 'Velaa Private Island', 'Six Senses', 'Bank of Maldives', 'Trans Maldivian Airways', 'Kandima'].map((co, i) => (
              <span key={`${di}-${i}`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '.75rem',
                padding: '0 2.5rem', fontSize: '.75rem', color: '#666', whiteSpace: 'nowrap',
              }}>
                <span style={{ fontWeight: 600, color: '#0A0A0A' }}>{co}</span>
                is hiring
                <span style={{
                  background: '#E85D3A', color: '#fff',
                  borderRadius: 100, padding: '.08rem .45rem',
                  fontSize: '.62rem', fontWeight: 700,
                }}>NEW</span>
                <span style={{ color: '#ccc', marginLeft: '2.5rem' }}>·</span>
              </span>
            ))
          ))}
        </div>
        <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      {/* ── JOBS SECTION (Client Component) ── */}
      <JobsSection />

      {/* ── CATEGORIES ── */}
      <section style={{ padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,5vw,5rem)', background: '#FBF8F3' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#1A7A8A', display: 'block', marginBottom: '.35rem' }}>Explore by Role</span>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#0A0A0A', letterSpacing: '-.02em' }}>Browse by Department</h2>
          </div>
          <Link href="/jobs" style={{ fontSize: '.8rem', fontWeight: 500, color: '#1A7A8A', textDecoration: 'none', borderBottom: '1px solid transparent', paddingBottom: 1 }}>View all departments →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '.5rem' }}>
          {CATEGORIES.map(cat => (
            <Link key={cat.name} href={`/jobs?category=${encodeURIComponent(cat.name)}`} style={{
              border: '1.5px solid #E5E5E5', borderRadius: 10,
              padding: '.85rem 1rem', background: '#fff',
              display: 'flex', flexDirection: 'column', gap: '.35rem',
              textDecoration: 'none', color: 'inherit', transition: 'all .15s',
            }}>
              <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>{cat.icon}</span>
              <span style={{ fontSize: '.78rem', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.3 }}>{cat.name}</span>
              <span style={{ fontSize: '.68rem', color: '#888' }}>{cat.count} jobs</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,5vw,5rem)', background: '#fff' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#1A7A8A', display: 'block', marginBottom: '.35rem' }}>Why Switch</span>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#0A0A0A', letterSpacing: '-.02em' }}>Built better than the rest</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {[
            { icon: '💰', title: 'Salary on every listing', desc: 'Real salary ranges shown on every job card. No more clicking into a listing to see "Not Stated".', vs: 'Others hide salaries', we: 'Always transparent here' },
            { icon: '📅', title: 'Monthly, not annual', desc: 'Post jobs from MVR 500/month. No yearly lock-in. Start, pause, or cancel anytime.', vs: 'Others charge annual fees upfront', we: 'Pay as you go' },
            { icon: '📲', title: 'Telegram + Viber + WhatsApp', desc: 'New jobs auto-posted to all three communities the moment they go live. Zero manual work.', vs: 'Other platforms miss these channels', we: 'All 3 covered automatically' },
            { icon: '🏝️', title: 'Resort + local, one platform', desc: 'No split sites. Resort, local, government — everything in one place, one search, one profile.', vs: 'Other platforms split resort and local', we: 'Unified in one platform' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '1.5rem', borderRadius: 12,
              border: '1.5px solid #E5E5E5', background: '#fff',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '.85rem' }}>{item.icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: '.95rem', color: '#0A0A0A', marginBottom: '.4rem' }}>{item.title}</div>
              <div style={{ fontSize: '.8rem', color: '#666', lineHeight: 1.7, marginBottom: '.75rem' }}>{item.desc}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontSize: '.72rem', color: '#1A7A8A', fontWeight: 500 }}>
                <span style={{ textDecoration: 'line-through', color: '#ccc' }}>{item.vs}</span>
                → {item.we}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SALARY GUIDE ── */}
      <section style={{ background: '#0D2B35', padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,5vw,5rem)' }}>
        <div style={{ maxWidth: 540, marginBottom: '2rem' }}>
          <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#22AABB', display: 'block', marginBottom: '.35rem' }}>Salary Transparency</span>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#fff', letterSpacing: '-.02em', marginBottom: '.5rem' }}>What Jobs Pay in the Maldives</h2>
          <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>Real salary ranges by role — something no other platform here publishes. Resort packages include accommodation and meals.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
          {SALARIES.map(s => (
            <div key={s.role} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
              padding: '.9rem 1.1rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}>
              <span style={{ fontSize: '.82rem', color: 'rgba(255,255,255,0.6)' }}>{s.role}</span>
              <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '.88rem', color: '#22AABB', whiteSpace: 'nowrap' }}>{s.range}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.25)', marginTop: '1.1rem', lineHeight: 1.6 }}>
          Ranges vary by employer and experience. Resort packages typically include accommodation, meals & annual flights. Updated July 2026.
        </p>
      </section>

      {/* ── EMPLOYERS ── */}
      <section style={{ padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,5vw,5rem)', background: '#FBF8F3' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#1A7A8A', display: 'block', marginBottom: '.35rem' }}>Top Hiring Partners</span>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#0A0A0A', letterSpacing: '-.02em' }}>Featured Employers</h2>
          </div>
          <Link href="/companies" style={{ fontSize: '.8rem', fontWeight: 500, color: '#1A7A8A', textDecoration: 'none' }}>View all 340+ employers →</Link>
        </div>
        <div style={{ display: 'flex', gap: '.75rem', overflowX: 'auto', paddingBottom: '.5rem', scrollbarWidth: 'none' }}>
          {EMPLOYERS.map(emp => (
            <Link key={emp.name} href="/companies" style={{
              background: '#fff', border: '1.5px solid #E5E5E5',
              borderRadius: 12, padding: '1.1rem',
              minWidth: 185, flexShrink: 0,
              textDecoration: 'none', color: 'inherit',
              display: 'flex', flexDirection: 'column', gap: '.5rem',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 9, background: '#F0F7F8', border: '1px solid #E5E5E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{emp.icon}</div>
              <div style={{ fontSize: '.84rem', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.3 }}>{emp.name}</div>
              <div style={{ fontSize: '.7rem', color: '#888' }}>{emp.type}</div>
              <div style={{ fontSize: '.7rem', fontWeight: 600, color: '#1A7A8A', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22AABB', display: 'inline-block' }}></span>
                {emp.open} open roles
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,5vw,5rem)', background: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#1A7A8A', display: 'block', marginBottom: '.35rem' }}>Simple Pricing</span>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#0A0A0A', letterSpacing: '-.02em' }}>No annual lock-in. Ever.</h2>
          </div>
          <Link href="/employers/pricing" style={{ fontSize: '.8rem', fontWeight: 500, color: '#1A7A8A', textDecoration: 'none' }}>Compare all features →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { name: 'Free', price: 'MVR 0', per: 'forever free', featured: false, features: ['2 active job listings', 'Online applications', 'Basic employer profile'], cta: 'Get Started' },
            { name: 'Pro', price: 'MVR 500', per: 'per month · cancel anytime', featured: true, features: ['20 active job listings', 'Telegram + Viber + WhatsApp posting', 'Applicant tracking dashboard', 'Featured on homepage', 'Priority support'], cta: 'Start Free Trial' },
            { name: 'Unlimited', price: 'MVR 1,200', per: 'per month · cancel anytime', featured: false, features: ['Unlimited job listings', 'CV database access', 'Everything in Pro', 'Bulk hiring tools', 'Dedicated account manager'], cta: 'Contact Us' },
          ].map((plan, i) => (
            <div key={i} style={{
              border: `1.5px solid ${plan.featured ? '#1A7A8A' : '#E5E5E5'}`,
              borderRadius: 12, padding: '1.5rem',
              background: plan.featured ? '#0D2B35' : '#fff',
              position: 'relative',
            }}>
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                  background: '#E85D3A', color: '#fff',
                  fontSize: '.65rem', fontWeight: 700, letterSpacing: '.05em',
                  padding: '.2rem .75rem', borderRadius: '0 0 8px 8px',
                  whiteSpace: 'nowrap',
                }}>MOST POPULAR</div>
              )}
              <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: plan.featured ? 'rgba(255,255,255,0.5)' : '#888', marginBottom: '.5rem' }}>{plan.name}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '2rem', color: plan.featured ? '#fff' : '#0A0A0A', lineHeight: 1, marginBottom: '.2rem' }}>{plan.price}</div>
              <div style={{ fontSize: '.75rem', color: plan.featured ? 'rgba(255,255,255,0.4)' : '#888', marginBottom: '1rem' }}>{plan.per}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.25rem' }}>
                {plan.features.map((f, fi) => (
                  <li key={fi} style={{ fontSize: '.78rem', color: plan.featured ? 'rgba(255,255,255,0.6)' : '#555', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                    <span style={{ color: '#1A7A8A' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button style={{
                width: '100%', borderRadius: 8, padding: '.6rem',
                fontSize: '.8rem', fontWeight: 600, cursor: 'pointer',
                border: plan.featured ? 'none' : '1.5px solid #E5E5E5',
                background: plan.featured ? '#E85D3A' : '#fff',
                color: plan.featured ? '#fff' : '#0A0A0A',
              }}>{plan.cta}</button>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '.75rem', color: '#888', marginTop: '1.25rem', textAlign: 'center' }}>
          Featured listing boost: MVR 150 / 7 days · BML and card payments accepted
        </p>
      </section>

      {/* ── COMMUNITY ── */}
      <section style={{ padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,5vw,5rem)', background: '#FBF8F3' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#1A7A8A', display: 'block', marginBottom: '.35rem' }}>Community Alerts</span>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#0A0A0A', letterSpacing: '-.02em' }}>Jobs delivered to you</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '✈️', name: 'Telegram Channel', desc: 'New jobs posted instantly. Subscribe and get notified the second a matching role goes live.', cta: 'Join Channel' },
            { icon: '📱', name: 'Viber Community', desc: 'The most popular channel in Maldives. Daily job updates, career tips, and employer news.', cta: 'Join Community' },
            { icon: '💬', name: 'WhatsApp Channel', desc: 'Weekly job digest straight to WhatsApp. Curated by sector — resort, local, or government.', cta: 'Follow Channel' },
          ].map((c, i) => (
            <div key={i} style={{
              borderRadius: 12, padding: '1.5rem',
              border: '1.5px solid #E5E5E5', background: '#fff',
              display: 'flex', flexDirection: 'column', gap: '.6rem',
            }}>
              <div style={{ fontSize: '1.75rem' }}>{c.icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: '.95rem', color: '#0A0A0A' }}>{c.name}</div>
              <div style={{ fontSize: '.78rem', color: '#666', lineHeight: 1.6 }}>{c.desc}</div>
              <Link href="#" style={{ fontSize: '.75rem', fontWeight: 600, color: '#1A7A8A', textDecoration: 'none', marginTop: 'auto' }}>{c.cta} →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: '#0D2B35', padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,5vw,5rem)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#22AABB', display: 'block', marginBottom: '.35rem' }}>Simple Process</span>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#fff', letterSpacing: '-.02em' }}>Hired in 4 steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {[
            { num: '01', icon: '🔍', title: 'Search & Filter', desc: 'Filter by atoll, sector, salary, or job type. Results update instantly — no page reloads.' },
            { num: '02', icon: '📋', title: 'Build Your Profile', desc: 'Upload your CV once. Employers can find you even when you\'re not actively looking.' },
            { num: '03', icon: '🚀', title: 'One-Click Apply', desc: 'Apply with your saved profile. Track every application in your dashboard.' },
            { num: '04', icon: '🔔', title: 'Get Alerts', desc: 'New matching jobs by Telegram or email the moment they\'re posted.' },
          ].map((step, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem' }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '2rem', color: 'rgba(255,255,255,0.07)', lineHeight: 1, marginBottom: '.75rem' }}>{step.num}</div>
              <div style={{ width: 38, height: 38, borderRadius: 8, background: 'rgba(34,170,187,0.15)', border: '1px solid rgba(34,170,187,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', marginBottom: '.85rem' }}>{step.icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: '.9rem', color: '#fff', marginBottom: '.4rem' }}>{step.title}</div>
              <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div style={{
        background: '#E85D3A',
        padding: 'clamp(2.5rem,5vw,4rem) clamp(1rem,5vw,5rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '2rem', flexWrap: 'wrap',
      }}>
        <div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', color: '#fff', letterSpacing: '-.02em', marginBottom: '.3rem' }}>
            Hiring? Reach 21,000+ Maldivian candidates.
          </h2>
          <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,0.7)' }}>Free trial · No annual contract · Post in under 10 minutes · MVR 500/month</p>
        </div>
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
          <Link href="/employers/post" style={{ background: '#fff', color: '#E85D3A', borderRadius: 9, padding: '.65rem 1.4rem', fontSize: '.875rem', fontWeight: 700, textDecoration: 'none' }}>
            Post a Job — Free Trial
          </Link>
          <Link href="/employers/pricing" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: 9, padding: '.65rem 1.4rem', fontSize: '.875rem', fontWeight: 500, textDecoration: 'none' }}>
            See Pricing
          </Link>
        </div>
      </div>
    </>
  )
}