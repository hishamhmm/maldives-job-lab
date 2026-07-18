'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 200,
        height: 60, background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #E5E5E5',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1rem,4vw,3rem)',
        gap: '1rem',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ width: 30, height: 30, borderRadius: 7, background: '#0D2B35', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M3 14C3 10 6 6 9 6C12 6 15 10 15 14" stroke="#22AABB" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 14C6 11.5 7.5 9.5 9 9.5C10.5 9.5 12 11.5 12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="9" cy="4.5" r="1.5" fill="#22AABB"/>
            </svg>
          </div>
          <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.05rem', color: '#0A0A0A' }}>
            Maldives <span style={{ color: '#1A7A8A' }}>Job Lab</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center', flex: 1, justifyContent: 'center' }} className="desktop-nav">
          {[['Browse Jobs', '/jobs'], ['Companies', '/companies'], ['Salary Guide', '/salaries'], ['For Employers', '/employers']].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: '.83rem', fontWeight: 500, color: '#888', textDecoration: 'none' }}>{label}</Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', flexShrink: 0 }} className="desktop-nav">
          <Link href="/auth/login" style={{ fontSize: '.8rem', fontWeight: 500, color: '#0A0A0A', background: 'none', border: '1px solid #E5E5E5', borderRadius: 7, padding: '.38rem .85rem', textDecoration: 'none' }}>Sign In</Link>
          <Link href="/employers/post" style={{ fontSize: '.8rem', fontWeight: 600, color: '#fff', background: '#E85D3A', borderRadius: 7, padding: '.42rem 1rem', textDecoration: 'none' }}>Post a Job</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none', color: '#0A0A0A' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, bottom: 0,
          background: '#fff', zIndex: 199,
          padding: '1.5rem 1.25rem',
          display: 'flex', flexDirection: 'column', gap: '0',
          overflowY: 'auto',
        }} className="mobile-drawer">
          {[['Browse Jobs', '/jobs'], ['Companies', '/companies'], ['Salary Guide', '/salaries'], ['For Employers', '/employers']].map(([label, href]) => (
            <Link
              key={href} href={href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '1.1rem', fontWeight: 600, color: '#0A0A0A',
                textDecoration: 'none', padding: '1rem 0',
                borderBottom: '1px solid #F0F0F0',
                display: 'block',
              }}
            >{label}</Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginTop: '1.5rem' }}>
            <Link href="/auth/login" onClick={() => setOpen(false)} style={{
              fontSize: '.95rem', fontWeight: 600, color: '#0A0A0A',
              border: '1.5px solid #E5E5E5', borderRadius: 9,
              padding: '.75rem', textAlign: 'center', textDecoration: 'none',
            }}>Sign In</Link>
            <Link href="/employers/post" onClick={() => setOpen(false)} style={{
              fontSize: '.95rem', fontWeight: 600, color: '#fff',
              background: '#E85D3A', borderRadius: 9,
              padding: '.75rem', textAlign: 'center', textDecoration: 'none',
            }}>Post a Job — MVR 500/mo</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}