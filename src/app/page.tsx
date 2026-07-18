import Link from 'next/link'
import { CATEGORIES, SALARIES, EMPLOYERS } from '@/lib/jobs-data'
import JobsSection from '@/components/jobs/JobsSection'

export default function HomePage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: .5; transform: scale(.85); } }
        .fade-up { animation: fadeUp .8s cubic-bezier(.16,1,.3,1) both; }
        .fade-up-2 { animation: fadeUp .8s .15s cubic-bezier(.16,1,.3,1) both; }
        .fade-up-3 { animation: fadeUp .8s .3s cubic-bezier(.16,1,.3,1) both; }
        .fade-up-4 { animation: fadeUp .8s .45s cubic-bezier(.16,1,.3,1) both; }
        .hero-section { padding: clamp(6rem,12vw,10rem) clamp(1.5rem,6vw,6rem) clamp(4rem,8vw,7rem); background: #fff; text-align: center; border-bottom: 1px solid #F0F0F0; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: .5rem; font-size: .72rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: #1A7A8A; margin-bottom: 2rem; }
        .hero-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #22AABB; animation: pulse 2s ease-in-out infinite; }
        .hero-h1 { font-family: Fraunces, serif; font-size: clamp(3rem,7vw,6rem); font-weight: 700; color: #0A0A0A; line-height: 1.02; letter-spacing: -.04em; margin-bottom: 1.5rem; max-width: 900px; margin-left: auto; margin-right: auto; }
        .hero-h1 em { font-style: italic; color: #1A7A8A; }
        .hero-sub { font-size: clamp(1rem,2vw,1.2rem); color: #888; line-height: 1.7; max-width: 520px; margin: 0 auto 2.5rem; }
        .hero-actions { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
        .hero-trust { display: flex; align-items: center; justify-content: center; gap: 2rem; flex-wrap: wrap; }
        .htrust-item { display: flex; flex-direction: column; align-items: center; gap: .2rem; }
        .htrust-num { font-family: Fraunces, serif; font-weight: 700; font-size: 1.5rem; color: #0A0A0A; letter-spacing: -.02em; line-height: 1; }
        .htrust-label { font-size: .72rem; color: #aaa; font-weight: 500; letter-spacing: .04em; }
        .htrust-div { width: 1px; height: 28px; background: #E5E5E5; }
        .btn-primary { display: inline-flex; align-items: center; background: #0A0A0A; color: #fff; border-radius: 100px; padding: .75rem 1.75rem; font-size: .875rem; font-weight: 600; text-decoration: none; transition: all .2s; border: none; cursor: pointer; font-family: Inter, sans-serif; }
        .btn-primary:hover { background: #1A7A8A; transform: scale(1.02); }
        .btn-secondary { display: inline-flex; align-items: center; background: transparent; color: #0A0A0A; border-radius: 100px; padding: .75rem 1.75rem; font-size: .875rem; font-weight: 500; text-decoration: none; border: 1.5px solid #E0E0E0; transition: all .2s; cursor: pointer; font-family: Inter, sans-serif; }
        .btn-secondary:hover { border-color: #0A0A0A; transform: scale(1.02); }
        .ticker-wrap { background: #FAFAFA; border-bottom: 1px solid #F0F0F0; padding: .6rem 0; overflow: hidden; }
        .ticker-inner { display: flex; width: max-content; animation: ticker 40s linear infinite; }
        .ticker-item { display: inline-flex; align-items: center; gap: .6rem; padding: 0 2.5rem; font-size: .75rem; color: #999; white-space: nowrap; }
        .ticker-co { font-weight: 600; color: #444; }
        .ticker-badge { background: #E85D3A; color: #fff; border-radius: 100px; padding: .06rem .4rem; font-size: .6rem; font-weight: 700; letter-spacing: .04em; }
        .ticker-sep { color: #ddd; }
        .sec { padding: clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem); }
        .sec-white { background: #fff; }
        .sec-gray { background: #FAFAFA; }
        .sec-teal { background: #0D2B35; }
        .sec-label { font-size: .68rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: #1A7A8A; display: block; margin-bottom: .75rem; }
        .sec-label-light { color: #22AABB; }
        .sec-title { font-family: Fraunces, serif; font-weight: 700; font-size: clamp(2rem,4vw,3rem); color: #0A0A0A; letter-spacing: -.03em; line-height: 1.1; }
        .sec-title-light { color: #fff; }
        .sec-body { font-size: 1rem; color: #888; line-height: 1.75; max-width: 480px; margin-top: .75rem; }
        .sec-body-light { color: rgba(255,255,255,.5); }
        .sec-hd { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 3rem; }
        .sec-link { font-size: .82rem; font-weight: 500; color: #1A7A8A; text-decoration: none; white-space: nowrap; opacity: .8; transition: opacity .15s; }
        .sec-link:hover { opacity: 1; }
        .feature-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); border-top: 1px solid #F0F0F0; border-left: 1px solid #F0F0F0; }
        .feature-item { padding: 2.5rem 2rem; border-right: 1px solid #F0F0F0; border-bottom: 1px solid #F0F0F0; transition: background .2s; }
        .feature-item:hover { background: #FAFAFA; }
        .fi-icon { font-size: 1.5rem; margin-bottom: 1.25rem; display: block; }
        .fi-title { font-family: Fraunces, serif; font-weight: 600; font-size: 1rem; color: #0A0A0A; margin-bottom: .5rem; letter-spacing: -.01em; }
        .fi-desc { font-size: .82rem; color: #888; line-height: 1.7; margin-bottom: .75rem; }
        .fi-vs { font-size: .72rem; color: #bbb; text-decoration: line-through; display: block; margin-bottom: .2rem; }
        .fi-we { font-size: .72rem; color: #1A7A8A; font-weight: 600; }
        .cats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1px; background: #F0F0F0; border: 1px solid #F0F0F0; border-radius: 16px; overflow: hidden; }
        .cat-item { background: #fff; padding: 1.5rem 1.25rem; display: flex; flex-direction: column; gap: .4rem; text-decoration: none; color: inherit; transition: background .15s; cursor: pointer; }
        .cat-item:hover { background: #F7F7F7; }
        .cat-icon { font-size: 1.4rem; line-height: 1; margin-bottom: .25rem; }
        .cat-name { font-size: .82rem; font-weight: 600; color: #0A0A0A; line-height: 1.3; }
        .cat-count { font-size: .7rem; color: #aaa; }
        .salary-table { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); border: 1px solid rgba(255,255,255,.08); border-radius: 16px; overflow: hidden; }
        .s-row { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.1rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,.05); border-right: 1px solid rgba(255,255,255,.05); transition: background .15s; }
        .s-row:hover { background: rgba(255,255,255,.03); }
        .s-role { font-size: .84rem; color: rgba(255,255,255,.55); }
        .s-range { font-family: Fraunces, serif; font-weight: 700; font-size: .9rem; color: #22AABB; white-space: nowrap; }
        .emp-rail { display: flex; gap: 1rem; overflow-x: auto; padding-bottom: .5rem; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .emp-rail::-webkit-scrollbar { display: none; }
        .emp-card { background: #fff; border: 1px solid #F0F0F0; border-radius: 16px; padding: 1.5rem; min-width: 200px; flex-shrink: 0; text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: .5rem; transition: all .2s; }
        .emp-card:hover { border-color: #E0E0E0; box-shadow: 0 8px 32px rgba(0,0,0,.06); transform: translateY(-2px); }
        .emp-logo { width: 48px; height: 48px; border-radius: 12px; background: #F5F5F5; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: .25rem; }
        .emp-name { font-family: Fraunces, serif; font-weight: 600; font-size: .9rem; color: #0A0A0A; line-height: 1.3; }
        .emp-type { font-size: .72rem; color: #aaa; }
        .emp-open { display: inline-flex; align-items: center; gap: .3rem; font-size: .72rem; font-weight: 600; color: #1A7A8A; margin-top: .25rem; }
        .emp-dot { width: 5px; height: 5px; border-radius: 50%; background: #22AABB; }
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1px; background: #F0F0F0; border: 1px solid #F0F0F0; border-radius: 20px; overflow: hidden; }
        .price-card { background: #fff; padding: 2.5rem 2rem; position: relative; transition: background .15s; }
        .price-card.featured { background: #0A0A0A; }
        .price-badge { display: inline-block; background: #E85D3A; color: #fff; font-size: .62rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: .25rem .75rem; border-radius: 100px; margin-bottom: 1.25rem; }
        .price-name { font-size: .7rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #aaa; margin-bottom: .5rem; }
        .price-card.featured .price-name { color: rgba(255,255,255,.4); }
        .price-amount { font-family: Fraunces, serif; font-weight: 700; font-size: 2.5rem; color: #0A0A0A; line-height: 1; letter-spacing: -.03em; margin-bottom: .3rem; }
        .price-card.featured .price-amount { color: #fff; }
        .price-per { font-size: .75rem; color: #aaa; margin-bottom: 2rem; }
        .price-card.featured .price-per { color: rgba(255,255,255,.35); }
        .price-features { list-style: none; display: flex; flex-direction: column; gap: .65rem; margin-bottom: 2rem; }
        .price-features li { font-size: .82rem; color: #555; display: flex; align-items: flex-start; gap: .5rem; line-height: 1.5; }
        .price-card.featured .price-features li { color: rgba(255,255,255,.6); }
        .pf-check { color: #1A7A8A; flex-shrink: 0; font-size: .8rem; }
        .btn-price { width: 100%; border-radius: 100px; padding: .7rem; font-size: .82rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E0E0E0; background: #fff; color: #0A0A0A; transition: all .2s; font-family: Inter, sans-serif; }
        .btn-price:hover { border-color: #0A0A0A; }
        .price-card.featured .btn-price { background: #E85D3A; border-color: #E85D3A; color: #fff; }
        .price-card.featured .btn-price:hover { background: #c94a2a; border-color: #c94a2a; }
        .comm-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #F0F0F0; border: 1px solid #F0F0F0; border-radius: 16px; overflow: hidden; }
        .comm-card { background: #fff; padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: .6rem; transition: background .15s; }
        .comm-card:hover { background: #FAFAFA; }
        .comm-icon { font-size: 2rem; margin-bottom: .5rem; }
        .comm-name { font-family: Fraunces, serif; font-weight: 600; font-size: 1rem; color: #0A0A0A; letter-spacing: -.01em; }
        .comm-desc { font-size: .82rem; color: #888; line-height: 1.65; }
        .comm-link { font-size: .78rem; font-weight: 600; color: #1A7A8A; text-decoration: none; margin-top: auto; padding-top: .5rem; display: inline-flex; align-items: center; gap: .25rem; transition: gap .15s; }
        .comm-link:hover { gap: .5rem; }
        .how-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.06); border-radius: 16px; overflow: hidden; }
        .how-card { padding: 2.5rem 2rem; background: rgba(255,255,255,.02); transition: background .15s; }
        .how-card:hover { background: rgba(255,255,255,.05); }
        .how-num { font-family: Fraunces, serif; font-size: 3rem; font-weight: 700; color: rgba(255,255,255,.06); line-height: 1; margin-bottom: 1.25rem; }
        .how-icon { font-size: 1.25rem; margin-bottom: 1rem; display: block; }
        .how-title { font-family: Fraunces, serif; font-weight: 600; font-size: .95rem; color: #fff; margin-bottom: .5rem; }
        .how-desc { font-size: .8rem; color: rgba(255,255,255,.38); line-height: 1.7; }
        .cta-section { background: #0A0A0A; padding: clamp(5rem,10vw,8rem) clamp(1.5rem,6vw,6rem); text-align: center; }
        .cta-label { color: #22AABB; }
        .cta-title { font-family: Fraunces, serif; font-weight: 700; font-size: clamp(2rem,5vw,3.5rem); color: #fff; letter-spacing: -.03em; line-height: 1.1; margin: .75rem auto 1.25rem; max-width: 700px; }
        .cta-sub { font-size: .95rem; color: rgba(255,255,255,.4); margin-bottom: 2.5rem; }
        .cta-actions { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }
        .btn-cta-primary { display: inline-flex; align-items: center; background: #fff; color: #0A0A0A; border-radius: 100px; padding: .85rem 2rem; font-size: .9rem; font-weight: 700; text-decoration: none; transition: all .2s; font-family: Inter, sans-serif; }
        .btn-cta-primary:hover { background: #F0F0F0; transform: scale(1.02); }
        .btn-cta-secondary { display: inline-flex; align-items: center; background: transparent; color: rgba(255,255,255,.6); border-radius: 100px; padding: .85rem 2rem; font-size: .9rem; font-weight: 500; text-decoration: none; border: 1.5px solid rgba(255,255,255,.15); transition: all .2s; font-family: Inter, sans-serif; }
        .btn-cta-secondary:hover { border-color: rgba(255,255,255,.4); color: #fff; }
        @media (max-width: 768px) {
          .hero-section { text-align: left; padding-top: 4rem; }
          .hero-actions { justify-content: flex-start; }
          .hero-trust { justify-content: flex-start; gap: 1.25rem; }
          .feature-strip { grid-template-columns: 1fr; }
          .cats-grid { grid-template-columns: repeat(2, 1fr); }
          .salary-table { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .comm-grid { grid-template-columns: 1fr; }
          .how-grid { grid-template-columns: 1fr 1fr; }
          .cta-section { text-align: left; }
          .cta-actions { justify-content: flex-start; }
          .htrust-div { display: none; }
          .hero-trust { gap: 1rem; }
        }
        @media (max-width: 480px) {
          .hero-h1 { font-size: 2.6rem; }
          .cats-grid { grid-template-columns: repeat(2, 1fr); }
          .how-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-eyebrow fade-up">
          <div className="hero-eyebrow-dot"></div>
          Maldives&apos; Modern Job Platform
        </div>
        <h1 className="hero-h1 fade-up-2">
          Find work.<br />
          Hire <em>talent.</em><br />
          In the Maldives.
        </h1>
        <p className="hero-sub fade-up-3">
          Every sector. Every atoll. Real salaries on every listing — no annual contracts, no hidden fees.
        </p>
        <div className="hero-actions fade-up-4">
          <Link href="/jobs" className="btn-primary">Browse 2,847 Jobs →</Link>
          <Link href="/employers/pricing" className="btn-secondary">Post a Job — MVR 500/mo</Link>
        </div>
        <div className="hero-trust fade-up-4">
          {[
            { num: '2,847', label: 'Live vacancies' },
            null,
            { num: '340+', label: 'Verified employers' },
            null,
            { num: '21,000+', label: 'Job seekers' },
            null,
            { num: '26', label: 'Atolls covered' },
          ].map((s, i) =>
            s === null
              ? <div key={i} className="htrust-div"></div>
              : <div key={i} className="htrust-item">
                  <span className="htrust-num">{s.num}</span>
                  <span className="htrust-label">{s.label}</span>
                </div>
          )}
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...Array(4)].map((_, di) =>
            ['Soneva Fushi', 'Four Seasons', 'Anantara', 'Velaa Private Island', 'Six Senses', 'Bank of Maldives', 'Trans Maldivian Airways', 'Kandima', 'Atmosphere Hotels'].map((co, i) => (
              <span key={`${di}-${i}`} className="ticker-item">
                <span className="ticker-co">{co}</span>
                is hiring
                <span className="ticker-badge">NEW</span>
                <span className="ticker-sep">·</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── JOBS ── */}
      <JobsSection />

      {/* ── CATEGORIES ── */}
      <section className="sec sec-gray">
        <div className="sec-hd">
          <div>
            <span className="sec-label">Explore by role</span>
            <h2 className="sec-title">Browse by Department</h2>
          </div>
          <Link href="/jobs" className="sec-link">View all departments →</Link>
        </div>
        <div className="cats-grid">
          {CATEGORIES.map(cat => (
            <Link key={cat.name} href={`/jobs?category=${encodeURIComponent(cat.name)}`} className="cat-item">
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-name">{cat.name}</span>
              <span className="cat-count">{cat.count} jobs</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="sec sec-white" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="feature-strip">
          {[
            { icon: '💰', title: 'Salary on every listing', desc: 'Real salary ranges on every job card. No more "Not Stated".', vs: 'Others hide salaries', we: 'Always transparent' },
            { icon: '📅', title: 'Monthly pricing', desc: 'MVR 500/month. No annual lock-in. Cancel anytime.', vs: 'Others: annual fees upfront', we: 'Pay as you go' },
            { icon: '📲', title: 'Telegram · Viber · WhatsApp', desc: 'New jobs auto-posted to all three the moment they go live.', vs: 'Other platforms miss these', we: 'All 3 channels, automated' },
            { icon: '🏝️', title: 'One platform', desc: 'Resort, local, government — everything in one search, one profile.', vs: 'Others split resort and local', we: 'Unified experience' },
          ].map((item, i) => (
            <div key={i} className="feature-item">
              <span className="fi-icon">{item.icon}</span>
              <div className="fi-title">{item.title}</div>
              <div className="fi-desc">{item.desc}</div>
              <span className="fi-vs">{item.vs}</span>
              <span className="fi-we">→ {item.we}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SALARY GUIDE ── */}
      <section className="sec sec-teal">
        <div style={{ maxWidth: 560, marginBottom: '3rem' }}>
          <span className="sec-label sec-label-light">Salary transparency</span>
          <h2 className="sec-title sec-title-light" style={{ marginTop: '.5rem' }}>What jobs pay<br />in the Maldives</h2>
          <p className="sec-body sec-body-light" style={{ marginTop: '1rem' }}>
            Real salary ranges by role — something no other platform here publishes openly. Resort packages include accommodation and meals.
          </p>
        </div>
        <div className="salary-table">
          {SALARIES.map(s => (
            <div key={s.role} className="s-row">
              <span className="s-role">{s.role}</span>
              <span className="s-range">{s.range}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.2)', marginTop: '1.25rem', lineHeight: 1.6 }}>
          Ranges vary by employer and experience. Resort packages typically include accommodation, meals & annual flights. Updated July 2026.
        </p>
      </section>

      {/* ── EMPLOYERS ── */}
      <section className="sec sec-white">
        <div className="sec-hd">
          <div>
            <span className="sec-label">Top hiring partners</span>
            <h2 className="sec-title">Featured Employers</h2>
          </div>
          <Link href="/companies" className="sec-link">View all 340+ employers →</Link>
        </div>
        <div className="emp-rail">
          {EMPLOYERS.map(emp => (
            <Link key={emp.name} href="/companies" className="emp-card">
              <div className="emp-logo">{emp.icon}</div>
              <div className="emp-name">{emp.name}</div>
              <div className="emp-type">{emp.type}</div>
              <div className="emp-open"><span className="emp-dot"></span>{emp.open} open roles</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="sec sec-gray">
        <div className="sec-hd">
          <div>
            <span className="sec-label">Simple pricing</span>
            <h2 className="sec-title">No annual lock-in.<br />Ever.</h2>
          </div>
          <Link href="/employers/pricing" className="sec-link">Compare all features →</Link>
        </div>
        <div className="pricing-grid">
          {[
            { name: 'Free', price: 'MVR 0', per: 'Free forever', featured: false, badge: null, features: ['2 active job listings', 'Online applications', 'Basic employer profile'], cta: 'Get started' },
            { name: 'Pro', price: 'MVR 500', per: 'Per month · cancel anytime', featured: true, badge: 'Most popular', features: ['20 active job listings', 'Telegram + Viber + WhatsApp auto-posting', 'Applicant tracking dashboard', 'Featured on homepage', 'Priority support'], cta: 'Start free trial' },
            { name: 'Unlimited', price: 'MVR 1,200', per: 'Per month · cancel anytime', featured: false, badge: null, features: ['Unlimited job listings', 'CV database access', 'Everything in Pro', 'Bulk hiring tools', 'Dedicated account manager'], cta: 'Contact us' },
          ].map((plan, i) => (
            <div key={i} className={`price-card${plan.featured ? ' featured' : ''}`}>
              {plan.badge && <span className="price-badge">{plan.badge}</span>}
              <div className="price-name">{plan.name}</div>
              <div className="price-amount">{plan.price}</div>
              <div className="price-per">{plan.per}</div>
              <ul className="price-features">
                {plan.features.map((f, fi) => (
                  <li key={fi}><span className="pf-check">✓</span>{f}</li>
                ))}
              </ul>
              <button className="btn-price">{plan.cta}</button>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '.75rem', color: '#aaa', marginTop: '1.5rem', textAlign: 'center' }}>
          Featured listing boost: MVR 150 / 7 days · BML and international card payments accepted
        </p>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="sec sec-white">
        <div className="sec-hd">
          <div>
            <span className="sec-label">Community alerts</span>
            <h2 className="sec-title">Jobs delivered to you</h2>
          </div>
        </div>
        <div className="comm-grid">
          {[
            { icon: '✈️', name: 'Telegram Channel', desc: 'New jobs posted the second they go live. The fastest way to stay ahead of every opening.', cta: 'Join Channel' },
            { icon: '📱', name: 'Viber Community', desc: 'The most-used platform in Maldives. Daily updates, career tips, and direct employer news.', cta: 'Join Community' },
            { icon: '💬', name: 'WhatsApp Channel', desc: 'Weekly curated digest by sector — resort, local, or government. Straight to your phone.', cta: 'Follow Channel' },
          ].map((c, i) => (
            <div key={i} className="comm-card">
              <div className="comm-icon">{c.icon}</div>
              <div className="comm-name">{c.name}</div>
              <div className="comm-desc">{c.desc}</div>
              <Link href="#" className="comm-link">{c.cta} →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sec sec-teal">
        <div style={{ marginBottom: '3rem' }}>
          <span className="sec-label sec-label-light">Simple process</span>
          <h2 className="sec-title sec-title-light" style={{ marginTop: '.5rem' }}>Hired in 4 steps</h2>
        </div>
        <div className="how-grid">
          {[
            { num: '01', icon: '🔍', title: 'Search & Filter', desc: 'By atoll, sector, salary, or type. Results update instantly — no page reloads.' },
            { num: '02', icon: '📋', title: 'Build Your Profile', desc: "Upload your CV once. Employers can find you even when you're not actively looking." },
            { num: '03', icon: '🚀', title: 'One-Click Apply', desc: 'Apply with your saved profile. Track every application in your dashboard.' },
            { num: '04', icon: '🔔', title: 'Get Alerts', desc: "Matching jobs by Telegram or email the moment they're posted. Never miss a role." },
          ].map((step, i) => (
            <div key={i} className="how-card">
              <div className="how-num">{step.num}</div>
              <span className="how-icon">{step.icon}</span>
              <div className="how-title">{step.title}</div>
              <div className="how-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <span className="sec-label cta-label">For employers</span>
        <h2 className="cta-title">
          Reach 21,000+ candidates<br />across every atoll.
        </h2>
        <p className="cta-sub">
          Free trial · No annual contract · Live in under 10 minutes · MVR 500/month
        </p>
        <div className="cta-actions">
          <Link href="/employers/post" className="btn-cta-primary">Post a Job — Free Trial</Link>
          <Link href="/employers/pricing" className="btn-cta-secondary">See Pricing</Link>
        </div>
      </section>
    </>
  )
}