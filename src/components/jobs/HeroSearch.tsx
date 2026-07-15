'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Briefcase } from 'lucide-react'

const CATEGORIES = [
  'Food & Beverage', 'Front Office', 'Engineering', 'Housekeeping',
  'Spa & Wellness', 'Finance', 'Human Resources', 'Sales & Marketing',
  'Diving & Water Sports', 'IT & Technology', 'Marine Biology', 'Kids Club', 'Legal',
]

const ATOLLS = [
  'Malé', 'Hulhumale', 'North Malé Atoll', 'South Malé Atoll',
  'Ari Atoll', 'Baa Atoll', 'Lhaviyani Atoll', 'Noonu Atoll',
  'Laamu Atoll', 'Dhaalu Atoll', 'Gaafu Alif Atoll',
]

const TRENDING = ['Chef', 'Front Office', 'Dive Instructor', 'Spa Therapist', 'IT', 'Housekeeping']

export default function HeroSearch() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [atoll, setAtoll] = useState('')

  function handleSearch() {
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (category) params.set('category', category)
    if (atoll) params.set('atoll', atoll)
    router.push(`/jobs?${params.toString()}`)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div>
      {/* Search Box */}
      <div style={{
        background: 'white', borderRadius: 14,
        padding: 6, display: 'flex', gap: 6,
        boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px rgba(0,0,0,0.3)',
        flexWrap: 'wrap',
      }}>
        {/* Keyword */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          flex: 2, minWidth: 160, padding: '0.5rem 0.75rem',
        }}>
          <Search size={16} color="#7A9BA3" style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Job title, skill, or employer…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              border: 'none', outline: 'none', background: 'transparent',
              fontSize: '0.9rem', color: '#0D2B35', width: '100%',
              fontFamily: 'Inter, sans-serif',
            }}
          />
        </div>

        {/* Divider */}
        <div style={{ width: 1, background: '#D6E8EB', alignSelf: 'stretch', margin: '8px 0', flexShrink: 0 }} />

        {/* Category */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          flex: 1, minWidth: 140, padding: '0.5rem 0.75rem',
        }}>
          <Briefcase size={16} color="#7A9BA3" style={{ flexShrink: 0 }} />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{
              border: 'none', outline: 'none', background: 'transparent',
              fontSize: '0.9rem', color: category ? '#0D2B35' : '#7A9BA3',
              width: '100%', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
            }}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Divider */}
        <div style={{ width: 1, background: '#D6E8EB', alignSelf: 'stretch', margin: '8px 0', flexShrink: 0 }} />

        {/* Atoll */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          flex: 1, minWidth: 130, padding: '0.5rem 0.75rem',
        }}>
          <MapPin size={16} color="#7A9BA3" style={{ flexShrink: 0 }} />
          <select
            value={atoll}
            onChange={e => setAtoll(e.target.value)}
            style={{
              border: 'none', outline: 'none', background: 'transparent',
              fontSize: '0.9rem', color: atoll ? '#0D2B35' : '#7A9BA3',
              width: '100%', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
            }}
          >
            <option value="">All Atolls</option>
            {ATOLLS.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        {/* Button */}
        <button
          onClick={handleSearch}
          style={{
            background: '#E85D3A', color: 'white', border: 'none',
            borderRadius: 10, padding: '0.65rem 1.5rem',
            fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
            whiteSpace: 'nowrap', transition: 'all 0.15s', alignSelf: 'stretch',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Search Jobs
        </button>
      </div>

      {/* Trending Tags */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem', alignItems: 'center' }}>
        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Trending:</span>
        {TRENDING.map(term => (
          <button
            key={term}
            onClick={() => { setQuery(term); handleSearch() }}
            style={{
              fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 6, padding: '0.18rem 0.6rem',
              cursor: 'pointer', transition: 'all 0.15s',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  )
}