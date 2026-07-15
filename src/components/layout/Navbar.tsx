'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 200,
      height: '62px',
      background: 'rgba(251,248,243,0.97)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #D6E8EB',
      display: 'flex', alignItems: 'center',
      padding: '0 clamp(1rem,4vw,3rem)',
      gap: '2rem',
    }}>
      {/* Logo */}
      <Link href="/" style={{
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        textDecoration: 'none', flexShrink: 0,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: '#0D2B35',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 14C3 10 6 6 9 6C12 6 15 10 15 14" stroke="#22AABB" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 14C6 11.5 7.5 9.5 9 9.5C10.5 9.5 12 11.5 12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="9" cy="4.5" r="1.5" fill="#22AABB"/>
          </svg>
        </div>
        <span style={{
          fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.1rem',
          color: '#0D2B35',
        }}>
          Maldives <span style={{ color: '#1A7A8A' }}>Job Lab</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div style={{
        display: 'flex', gap: '1.5rem', alignItems: 'center',
        flex: 1, justifyContent: 'center',
      }} className="desktop-nav">
        {[
          { href: '/jobs', label: 'Browse Jobs' },
          { href: '/companies', label: 'Companies' },
          { href: '/salaries', label: 'Salary Guide' },
          { href: '/employers', label: 'For Employers' },
        ].map(link => (
          <Link key={link.href} href={link.href} style={{
            fontSize: '0.85rem', fontWeight: 500,
            color: '#3D5A62', textDecoration: 'none',
            transition: 'color 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1A7A8A')}
            onMouseLeave={e => (e.currentTarget.style.color = '#3D5A62')}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexShrink: 0 }}>
        <Link href="/auth/login" style={{
          background: 'transparent',
          border: '1.5px solid #D6E8EB',
          borderRadius: 8, padding: '0.38rem 0.85rem',
          fontSize: '0.8rem', fontWeight: 600,
          color: '#3D5A62', textDecoration: 'none',
          transition: 'all 0.15s',
        }}>
          Sign In
        </Link>
        <Link href="/employers/post" style={{
          background: '#E85D3A', color: 'white',
          border: 'none', borderRadius: 8,
          padding: '0.42rem 1rem',
          fontSize: '0.8rem', fontWeight: 600,
          textDecoration: 'none', transition: 'all 0.15s',
        }}>
          Post a Job
        </Link>
      </div>
    </nav>
  )
}
