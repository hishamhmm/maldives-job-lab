'use client'

import { useState } from 'react'
import { SAMPLE_JOBS } from '@/lib/jobs-data'
import JobModal from '@/components/jobs/JobModal'

const FILTERS = [
  { key: 'all', label: 'All Jobs' },
  { key: 'resort', label: '🏝️ Resort' },
  { key: 'local', label: '🏙️ Local' },
  { key: 'government', label: '🏛️ Govt' },
  { key: 'maldivian', label: '🇲🇻 MV Only' },
]

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  new:  { bg: '#E8F7EE', color: '#0F6B3A' },
  hot:  { bg: '#FEF0EC', color: '#C94A2A' },
  exp:  { bg: '#FEF8E6', color: '#8A6200' },
  mv:   { bg: '#EEF2FF', color: '#3B47B5' },
  feat: { bg: '#FDF6E3', color: '#7A5C00' },
}

export default function JobsSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sort, setSort] = useState('newest')
  const [selectedJob, setSelectedJob] = useState<typeof SAMPLE_JOBS[0] | null>(null)

  const filtered = SAMPLE_JOBS
    .filter(j => activeFilter === 'all' || j.filter === activeFilter)
    .sort((a, b) => sort === 'salary' ? b.salVal - a.salVal : 0)

  return (
    <>
      <style>{`
        .jobs-section {
          padding: clamp(2rem,5vw,4.5rem) clamp(1rem,5vw,5rem);
          background: #fff;
        }
        .filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: .75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #E5E5E5;
        }
        .filter-pills {
          display: flex;
          gap: .35rem;
          flex-wrap: wrap;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .filter-pills::-webkit-scrollbar { display: none; }
        .fpill {
          font-size: .78rem;
          font-weight: 500;
          background: #fff;
          border: 1.5px solid #E5E5E5;
          border-radius: 100px;
          padding: .28rem .85rem;
          cursor: pointer;
          color: #555;
          transition: all .15s;
          white-space: nowrap;
          font-family: Inter, sans-serif;
        }
        .fpill.on {
          background: #0A0A0A;
          border-color: #0A0A0A;
          color: #fff;
        }
        .job-row {
          display: grid;
          grid-template-columns: 42px 1fr auto;
          gap: .75rem;
          padding: 1rem .75rem;
          border-bottom: 1px solid #F0F0F0;
          cursor: pointer;
          border-radius: 8px;
          margin: 0 -.75rem;
          transition: background .12s;
          align-items: start;
        }
        .job-row:hover { background: #FAFAFA; }
        .job-row:last-child { border-bottom: none; }
        .jr-logo {
          width: 42px;
          height: 42px;
          border-radius: 9px;
          background: #F0F7F8;
          border: 1px solid #EEE;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .jr-main { min-width: 0; }
        .jr-title {
          font-size: .9rem;
          font-weight: 600;
          color: #0A0A0A;
          margin-bottom: .2rem;
          line-height: 1.3;
        }
        .jr-meta {
          display: flex;
          align-items: center;
          gap: .5rem;
          flex-wrap: wrap;
          margin-bottom: .4rem;
        }
        .jr-co { font-size: .76rem; color: #1A7A8A; font-weight: 500; }
        .jr-sep { width: 3px; height: 3px; border-radius: 50%; background: #ccc; flex-shrink: 0; }
        .jr-loc { font-size: .74rem; color: #888; }
        .jr-badges { display: flex; gap: .3rem; flex-wrap: wrap; margin-bottom: .5rem; }
        .jbdg {
          font-size: .66rem;
          font-weight: 600;
          padding: .15rem .5rem;
          border-radius: 100px;
        }
        .jr-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: .5rem;
          margin-top: .25rem;
        }
        .jr-salary {
          font-family: Fraunces, serif;
          font-weight: 700;
          font-size: .88rem;
          color: #0A0A0A;
        }
        .jr-salary small {
          font-family: Inter, sans-serif;
          font-size: .66rem;
          font-weight: 400;
          color: #888;
          margin-left: 2px;
        }
        .jr-apply {
          background: #0A0A0A;
          color: #fff;
          border: none;
          border-radius: 7px;
          padding: .35rem .85rem;
          font-size: .75rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          font-family: Inter, sans-serif;
          flex-shrink: 0;
        }
        .jr-apply:hover { background: #1A7A8A; }
        .jr-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: .4rem;
          flex-shrink: 0;
        }
        .jr-time { font-size: .68rem; color: #bbb; }
        @media (max-width: 640px) {
          .jobs-section {
            padding: 1.5rem 1rem;
          }
          .jr-title { font-size: .85rem; }
          .jr-right { display: none; }
          .jr-bottom { display: flex; }
        }
      `}</style>

      <section className="jobs-section" id="jobs">
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
        <div className="filter-bar">
          <div className="filter-pills">
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`fpill${activeFilter === f.key ? ' on' : ''}`}
              >{f.label}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexShrink: 0 }}>
            <span style={{ fontSize: '.8rem', color: '#888' }}>
              <strong style={{ color: '#0A0A0A' }}>{filtered.length}</strong> jobs
            </span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{ fontSize: '.78rem', color: '#555', border: '1px solid #E5E5E5', borderRadius: 7, padding: '.28rem .65rem', background: '#fff', cursor: 'pointer', outline: 'none', fontFamily: 'Inter, sans-serif' }}
            >
              <option value="newest">Newest</option>
              <option value="salary">Salary</option>
            </select>
          </div>
        </div>

        {/* Job Rows */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#888' }}>
            <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>🔍</div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', color: '#0A0A0A', marginBottom: '.35rem' }}>No jobs found</h3>
          </div>
        ) : (
          <div>
            {filtered.map(job => (
              <div key={job.id} className="job-row" onClick={() => setSelectedJob(job)}>
                {/* Logo */}
                <div className="jr-logo">{job.icon}</div>

                {/* Main content */}
                <div className="jr-main">
                  <div className="jr-title">{job.title}</div>
                  <div className="jr-meta">
                    <span className="jr-co">{job.co}</span>
                    <span className="jr-sep"></span>
                    <span className="jr-loc">📍 {job.loc}</span>
                  </div>
                  <div className="jr-badges">
                    {job.badges.map((b, i) => {
                      const s = BADGE_STYLES[b.c] || { bg: '#F5F5F5', color: '#555' }
                      return <span key={i} className="jbdg" style={{ background: s.bg, color: s.color }}>{b.t}</span>
                    })}
                  </div>
                  <div className="jr-bottom">
                    <div className="jr-salary">{job.sal}<small>{job.salNote}</small></div>
                    <button className="jr-apply" onClick={e => { e.stopPropagation(); setSelectedJob(job) }}>Apply →</button>
                  </div>
                </div>

                {/* Right side — hidden on mobile */}
                <div className="jr-right">
                  <span className="jr-time">{job.posted}</span>
                  <span style={{ fontSize: '.7rem', color: '#888' }}>{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedJob && <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
      </section>
    </>
  )
}