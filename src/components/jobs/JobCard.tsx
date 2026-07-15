'use client'

import Link from 'next/link'
import { Job } from '@/types'

export default function JobCard({ job }: { job: Job }) {
  const salaryDisplay = job.salary_min && job.salary_max
    ? `${job.salary_currency} ${job.salary_min.toLocaleString()}–${job.salary_max.toLocaleString()}`
    : 'Salary not disclosed'

  const postedDate = new Date(job.created_at)
  const hoursAgo = Math.floor((Date.now() - postedDate.getTime()) / 1000 / 60 / 60)
  const postedLabel = hoursAgo < 24 ? `${hoursAgo}h ago` : `${Math.floor(hoursAgo / 24)}d ago`

  return (
    <Link href={`/jobs/${job.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        background: 'white',
        border: '1.5px solid #D6E8EB',
        borderRadius: 14, padding: '1.35rem',
        cursor: 'pointer',
        transition: 'all 0.18s',
        display: 'flex', flexDirection: 'column',
        height: '100%',
      }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.borderColor = '#1A7A8A'
          el.style.boxShadow = '0 8px 28px rgba(13,43,53,0.08)'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.borderColor = '#D6E8EB'
          el.style.boxShadow = 'none'
          el.style.transform = 'none'
        }}
      >
        {/* Top */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div style={{
            width: 44, height: 44, borderRadius: 9,
            background: '#E8F4F6', border: '1.5px solid #D6E8EB',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.2rem', flexShrink: 0,
          }}>
            {job.employers?.logo_url ? (
              <img src={job.employers.logo_url} alt={job.employers.name} style={{ width: 32, height: 32, borderRadius: 6, objectFit: 'cover' }} />
            ) : '🏢'}
          </div>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {job.featured && (
              <span style={{ fontSize: '0.66rem', fontWeight: 700, background: '#FDF6E3', color: '#7A5C00', padding: '0.18rem 0.55rem', borderRadius: 100 }}>
                ⭐ Featured
              </span>
            )}
            {job.is_maldivian_only && (
              <span style={{ fontSize: '0.66rem', fontWeight: 700, background: '#EEF2FF', color: '#3B47B5', padding: '0.18rem 0.55rem', borderRadius: 100 }}>
                🇲🇻 MV Only
              </span>
            )}
          </div>
        </div>

        {/* Title & Company */}
        <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: '1.02rem', color: '#0D2B35', lineHeight: 1.3, marginBottom: '0.25rem' }}>
          {job.title}
        </div>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1A7A8A', marginBottom: '0.8rem' }}>
          {job.employers?.name || 'Company'}
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
          {[`📍 ${job.atoll}`, `🕐 ${job.type}`, `🕓 ${postedLabel}`].map(m => (
            <span key={m} style={{ fontSize: '0.74rem', color: '#7A9BA3', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>{m}</span>
          ))}
        </div>

        {/* Tags */}
        {job.tags && (
          <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', flex: 1, marginBottom: '1rem' }}>
            {job.tags.slice(0, 3).map(tag => (
              <span key={tag} style={{ fontSize: '0.69rem', fontWeight: 500, background: '#E8F4F6', color: '#3D5A62', borderRadius: 5, padding: '0.15rem 0.5rem' }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.85rem', borderTop: '1.5px solid #D6E8EB', marginTop: 'auto' }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '0.98rem', color: '#0D2B35' }}>
            {salaryDisplay}
            {job.salary_note && <small style={{ fontFamily: 'Inter', fontSize: '0.68rem', fontWeight: 400, color: '#7A9BA3', marginLeft: 4 }}>{job.salary_note}</small>}
          </div>
          <div style={{
            background: '#0D2B35', color: 'white',
            borderRadius: 7, padding: '0.36rem 0.9rem',
            fontSize: '0.75rem', fontWeight: 600,
          }}>
            Apply →
          </div>
        </div>
      </div>
    </Link>
  )
}