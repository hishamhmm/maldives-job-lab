'use client'

import { useState } from 'react'
import { SAMPLE_JOBS } from '@/lib/jobs-data'
import JobModal from '@/components/jobs/JobModal'

const FILTERS = [
  { key: 'all', label: 'All Jobs' },
  { key: 'resort', label: '🏝️ Resort' },
  { key: 'local', label: '🏙️ Local' },
  { key: 'government', label: '🏛️ Government' },
  { key: 'maldivian', label: '🇲🇻 Maldivians Only' },
]

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  new:      { bg: '#E8F7EE', color: '#0F6B3A' },
  hot:      { bg: '#FEF0EC', color: '#C94A2A' },
  exp:      { bg: '#FEF8E6', color: '#8A6200' },
  mv:       { bg: '#EEF2FF', color: '#3B47B5' },
  feat:     { bg: '#FDF6E3', color: '#7A5C00' },
}

export default function JobsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('newest')
  const [selectedJob, setSelectedJob] = useState<typeof SAMPLE_JOBS[0] | null>(null)

  const filtered = SAMPLE_JOBS
    .filter(j => {
      if (activeFilter !== 'all' && j.filter !== activeFilter) return false
      if (search) {
        const hay = (j.title + j.co + j.dept + j.tags.join(' ')).toLowerCase()
        if (!hay.includes(search.toLowerCase())) return false
      }
      return true
    })
    .sort((a, b) => sort === 'salary' ? b.salVal - a.salVal : 0)

  return (
    <section id="jobs" style={{
      padding: 'clamp(2.5rem,5vw,4.5rem) clamp(1rem,5vw,5rem)',
      background: '#fff',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#1A7A8A', display: 'block', marginBottom: '.35rem' }}>
          Latest Opportunities
        </span>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(1.5rem,2.5vw,2rem)', color: '#0A0A0A', letterSpacing: '-.02em' }}>
          Open Positions
        </h2>
      </div>

      {/* Filter Bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '.75rem',
        marginBottom: '1.25rem', paddingBottom: '1.25rem',
        borderBottom: '1px solid #E5E5E5',
      }}>
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap' }}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                fontSize: '.78rem', fontWeight: 500,
                background: activeFilter === f.key ? '#0A0A0A' : '#fff',
                color: activeFilter === f.key ? '#fff' : '#555',
                border: `1.5px solid ${activeFilter === f.key ? '#0A0A0A' : '#E5E5E5'}`,
                borderRadius: 100, padding: '.28rem .85rem',
                cursor: 'pointer', transition: 'all .15s',
                fontFamily: 'Inter, sans-serif',
              }}
            >{f.label}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <span style={{ fontSize: '.8rem', color: '#888' }}>
            <strong style={{ color: '#0A0A0A' }}>{filtered.length}</strong> jobs found
          </span>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{
              fontSize: '.78rem', color: '#555',
              border: '1px solid #E5E5E5', borderRadius: 7,
              padding: '.28rem .65rem', background: '#fff',
              cursor: 'pointer', outline: 'none',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <option value="newest">Newest first</option>
            <option value="salary">Highest salary</option>
          </select>
        </div>
      </div>

      {/* Job Rows */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#888' }}>
          <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>🔍</div>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', color: '#0A0A0A', marginBottom: '.35rem' }}>No jobs found</h3>
          <p style={{ fontSize: '.875rem' }}>Try different filters or a broader search term.</p>
        </div>
      ) : (
        <div>
          {filtered.map(job => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              style={{
                display: 'flex', alignItems: 'center',
                padding: '1.1rem .75rem',
                borderBottom: '1px solid #F0F0F0',
                gap: '1rem', cursor: 'pointer',
                borderRadius: 8, margin: '0 -.75rem',
                transition: 'background .12s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#FAFAFA')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Logo */}
              <div style={{
                width: 42, height: 42, borderRadius: 9,
                background: '#F0F7F8', border: '1px solid #EEE',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', flexShrink: 0,
              }}>{job.icon}</div>

              {/* Main */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '.9rem', fontWeight: 600, color: '#0A0A0A', marginBottom: '.15rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {job.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '.76rem', color: '#1A7A8A', fontWeight: 500 }}>{job.co}</span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#ccc', flexShrink: 0 }}></span>
                  <span style={{ fontSize: '.74rem', color: '#888' }}>📍 {job.loc}</span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#ccc', flexShrink: 0 }}></span>
                  <span style={{ fontSize: '.74rem', color: '#888' }}>{job.type}</span>
                </div>
              </div>

              {/* Badges */}
              <div style={{ display: 'flex', gap: '.3rem', flexShrink: 0 }}>
                {job.badges.map((b, i) => {
                  const style = BADGE_STYLES[b.c] || { bg: '#F5F5F5', color: '#555' }
                  return (
                    <span key={i} style={{
                      fontSize: '.66rem', fontWeight: 600,
                      padding: '.15rem .5rem', borderRadius: 100,
                      background: style.bg, color: style.color,
                    }}>{b.t}</span>
                  )
                })}
              </div>

              {/* Time */}
              <span style={{ fontSize: '.7rem', color: '#bbb', whiteSpace: 'nowrap', flexShrink: 0 }}>{job.posted}</span>

              {/* Salary + Apply */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexShrink: 0 }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '.88rem', color: '#0A0A0A', whiteSpace: 'nowrap' }}>{job.sal}</div>
                  <div style={{ fontSize: '.66rem', color: '#888' }}>{job.salNote}</div>
                </div>
                <button
                  onClick={e => { e.stopPropagation(); setSelectedJob(job) }}
                  style={{
                    background: '#0A0A0A', color: '#fff', border: 'none',
                    borderRadius: 7, padding: '.35rem .9rem',
                    fontSize: '.75rem', fontWeight: 600,
                    cursor: 'pointer', whiteSpace: 'nowrap',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >Apply →</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  )
}