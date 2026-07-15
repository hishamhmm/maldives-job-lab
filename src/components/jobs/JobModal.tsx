'use client'

import { useEffect } from 'react'
import { SAMPLE_JOBS } from '@/lib/jobs-data'

type Job = typeof SAMPLE_JOBS[0]

export default function JobModal({ job, onClose }: { job: Job; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 16,
          maxWidth: 560, width: '100%',
          maxHeight: '88vh', overflowY: 'auto',
          padding: '2rem', position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            width: 30, height: 30, borderRadius: 6,
            background: '#F0F7F8', border: 'none',
            cursor: 'pointer', fontSize: '.85rem', color: '#888',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>

        {/* Header */}
        <div style={{ display: 'flex', gap: '.9rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 10,
            background: '#F0F7F8', border: '1px solid #E5E5E5',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', flexShrink: 0,
          }}>{job.icon}</div>
          <div>
            <div style={{ fontSize: '.76rem', fontWeight: 600, color: '#1A7A8A', marginBottom: '.2rem' }}>{job.co}</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.25rem', color: '#0A0A0A', lineHeight: 1.2 }}>{job.title}</div>
          </div>
        </div>

        {/* Chips */}
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', marginBottom: '1.1rem' }}>
          {[
            { label: `📍 ${job.loc}` },
            { label: `🕐 ${job.type}` },
            { label: `🏢 ${job.dept}` },
          ].map((chip, i) => (
            <span key={i} style={{
              fontSize: '.74rem', fontWeight: 500,
              background: '#F0F7F8', color: '#555',
              borderRadius: 6, padding: '.25rem .65rem',
            }}>{chip.label}</span>
          ))}
          <span style={{
            fontSize: '.74rem', fontWeight: 700,
            background: '#FDF6E3', color: '#7A5C00',
            borderRadius: 6, padding: '.25rem .65rem',
            fontFamily: 'Fraunces, serif',
          }}>💰 {job.sal} {job.salNote}</span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E5E5E5', margin: '1rem 0' }} />

        {/* Body */}
        <div>
          <h4 style={{ fontFamily: 'Fraunces, serif', fontSize: '.88rem', fontWeight: 600, color: '#0A0A0A', marginBottom: '.55rem' }}>About the Role</h4>
          <p style={{ fontSize: '.82rem', color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>{job.desc}</p>

          <h4 style={{ fontFamily: 'Fraunces, serif', fontSize: '.88rem', fontWeight: 600, color: '#0A0A0A', marginBottom: '.55rem' }}>Requirements</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.4rem', marginBottom: '1rem' }}>
            {job.reqs.map((req, i) => (
              <li key={i} style={{ fontSize: '.82rem', color: '#555', paddingLeft: '1.1rem', position: 'relative', lineHeight: 1.6 }}>
                <span style={{ position: 'absolute', left: 0, color: '#1A7A8A', fontSize: '.7rem', top: '.15rem' }}>→</span>
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', gap: '.6rem',
          marginTop: '1.1rem', paddingTop: '1.1rem',
          borderTop: '1px solid #E5E5E5',
        }}>
          <button style={{
            flex: 1, background: '#1A7A8A', color: '#fff', border: 'none',
            borderRadius: 9, padding: '.75rem',
            fontSize: '.875rem', fontWeight: 600, cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
          }}>
            Apply Now →
          </button>
          <button style={{
            width: 40, height: 40, borderRadius: 9,
            border: '1.5px solid #E5E5E5', background: '#fff',
            cursor: 'pointer', fontSize: '.9rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>🔖</button>
        </div>
      </div>
    </div>
  )
}