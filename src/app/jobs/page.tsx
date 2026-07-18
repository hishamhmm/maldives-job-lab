'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { SAMPLE_JOBS, CATEGORIES } from '@/lib/jobs-data'
import JobModal from '@/components/jobs/JobModal'

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  new:  { bg: '#E8F7EE', color: '#0F6B3A' },
  hot:  { bg: '#FEF0EC', color: '#C94A2A' },
  exp:  { bg: '#FEF8E6', color: '#8A6200' },
  mv:   { bg: '#EEF2FF', color: '#3B47B5' },
  feat: { bg: '#FDF6E3', color: '#7A5C00' },
}

const ATOLLS = [
  'Malé', 'Hulhumale', 'North Malé Atoll', 'South Malé Atoll',
  'Ari Atoll', 'Baa Atoll', 'Lhaviyani Atoll', 'Noonu Atoll',
  'Laamu Atoll', 'Dhaalu Atoll', 'Gaafu Alif Atoll',
]

function JobsContent() {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [atoll, setAtoll] = useState(searchParams.get('atoll') || '')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('newest')
  const [selectedJob, setSelectedJob] = useState<typeof SAMPLE_JOBS[0] | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filtered = SAMPLE_JOBS
    .filter(j => {
      if (filter !== 'all' && j.filter !== filter) return false
      if (category && j.dept !== category) return false
      if (atoll && j.loc !== atoll) return false
      if (search) {
        const hay = (j.title + j.co + j.dept + j.tags.join(' ')).toLowerCase()
        if (!hay.includes(search.toLowerCase())) return false
      }
      return true
    })
    .sort((a, b) => sort === 'salary' ? b.salVal - a.salVal : 0)

  return (
    <>
      <style>{`
        .jobs-page { min-height: 100vh; background: #FAFAFA; }
        .jobs-header {
          background: #fff;
          border-bottom: 1px solid #F0F0F0;
          padding: 2.5rem clamp(1rem,5vw,5rem) 0;
        }
        .jobs-header-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .jobs-h1 {
          font-family: Fraunces, serif;
          font-weight: 700;
          font-size: clamp(1.75rem,3vw,2.5rem);
          color: #0A0A0A;
          letter-spacing: -.03em;
          line-height: 1.1;
        }
        .jobs-count {
          font-size: .82rem;
          color: #aaa;
          margin-top: .3rem;
        }
        .search-row {
          display: flex;
          gap: .5rem;
          flex-wrap: wrap;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #F0F0F0;
        }
        .search-input-wrap {
          display: flex;
          align-items: center;
          gap: .5rem;
          background: #F5F5F5;
          border: 1.5px solid transparent;
          border-radius: 10px;
          padding: .6rem 1rem;
          flex: 1;
          min-width: 200px;
          transition: border-color .15s;
        }
        .search-input-wrap:focus-within {
          background: #fff;
          border-color: #1A7A8A;
        }
        .search-input-wrap input,
        .search-input-wrap select {
          border: none;
          outline: none;
          background: transparent;
          font-size: .875rem;
          color: #0A0A0A;
          font-family: Inter, sans-serif;
          width: 100%;
        }
        .search-input-wrap select { color: #888; cursor: pointer; }
        .search-icon { font-size: .9rem; color: #aaa; flex-shrink: 0; }
        .btn-search {
          background: #0A0A0A;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: .6rem 1.5rem;
          font-size: .875rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          font-family: Inter, sans-serif;
          transition: background .15s;
        }
        .btn-search:hover { background: #1A7A8A; }
        .filter-tabs {
          display: flex;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
          margin-top: 1rem;
        }
        .filter-tabs::-webkit-scrollbar { display: none; }
        .ftab {
          font-size: .82rem;
          font-weight: 500;
          color: #888;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: .75rem 1.25rem;
          cursor: pointer;
          white-space: nowrap;
          transition: all .15s;
          font-family: Inter, sans-serif;
        }
        .ftab:hover { color: #0A0A0A; }
        .ftab.on { color: #0A0A0A; border-bottom-color: #0A0A0A; font-weight: 600; }
        .jobs-body {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 0;
          max-width: 1400px;
          margin: 0 auto;
        }
        .sidebar {
          background: #fff;
          border-right: 1px solid #F0F0F0;
          padding: 1.5rem;
          position: sticky;
          top: 60px;
          height: calc(100vh - 60px);
          overflow-y: auto;
        }
        .sidebar-title {
          font-size: .68rem;
          font-weight: 600;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 1rem;
        }
        .sidebar-section { margin-bottom: 1.75rem; }
        .sidebar-label {
          font-size: .78rem;
          font-weight: 600;
          color: #0A0A0A;
          margin-bottom: .6rem;
          display: block;
        }
        .sidebar-select {
          width: 100%;
          border: 1.5px solid #F0F0F0;
          border-radius: 8px;
          padding: .5rem .75rem;
          font-size: .82rem;
          color: #555;
          background: #FAFAFA;
          outline: none;
          cursor: pointer;
          font-family: Inter, sans-serif;
          transition: border-color .15s;
        }
        .sidebar-select:focus { border-color: #1A7A8A; background: #fff; }
        .cat-pill {
          display: flex;
          align-items: center;
          gap: .5rem;
          padding: .4rem .6rem;
          border-radius: 7px;
          cursor: pointer;
          transition: background .15s;
          font-size: .8rem;
          color: #555;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-family: Inter, sans-serif;
        }
        .cat-pill:hover { background: #F5F5F5; }
        .cat-pill.active { background: #F0F7F8; color: #1A7A8A; font-weight: 600; }
        .cat-pill-icon { font-size: .9rem; }
        .cat-pill-count { font-size: .7rem; color: #bbb; margin-left: auto; }
        .jobs-list { padding: 1.5rem clamp(1rem,3vw,2rem); }
        .jobs-list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: .5rem;
        }
        .jobs-list-count { font-size: .82rem; color: #888; }
        .jobs-list-count strong { color: #0A0A0A; font-weight: 600; }
        .sort-sel {
          font-size: .78rem;
          color: #555;
          border: 1px solid #E5E5E5;
          border-radius: 7px;
          padding: .3rem .65rem;
          background: #fff;
          cursor: pointer;
          outline: none;
          font-family: Inter, sans-serif;
        }
        .job-row {
          display: flex;
          align-items: center;
          padding: 1.1rem .85rem;
          border-bottom: 1px solid #F5F5F5;
          gap: 1rem;
          cursor: pointer;
          border-radius: 10px;
          margin: 0 -.85rem;
          transition: background .12s;
        }
        .job-row:hover { background: #F8F8F8; }
        .job-row:last-child { border-bottom: none; }
        .jr-logo {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #F0F7F8;
          border: 1px solid #EEE;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.15rem;
          flex-shrink: 0;
        }
        .jr-main { flex: 1; min-width: 0; }
        .jr-title {
          font-size: .92rem;
          font-weight: 600;
          color: #0A0A0A;
          margin-bottom: .2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .jr-meta {
          display: flex;
          align-items: center;
          gap: .5rem;
          flex-wrap: wrap;
        }
        .jr-co { font-size: .76rem; color: #1A7A8A; font-weight: 500; }
        .jr-sep { width: 3px; height: 3px; border-radius: 50%; background: #ddd; flex-shrink: 0; }
        .jr-loc { font-size: .74rem; color: #aaa; }
        .jr-badges { display: flex; gap: .3rem; flex-wrap: wrap; margin-top: .4rem; }
        .jbdg {
          font-size: .66rem;
          font-weight: 600;
          padding: .15rem .5rem;
          border-radius: 100px;
        }
        .jr-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: .4rem;
          flex-shrink: 0;
        }
        .jr-salary {
          font-family: Fraunces, serif;
          font-weight: 700;
          font-size: .9rem;
          color: #0A0A0A;
          white-space: nowrap;
        }
        .jr-salary-note { font-family: Inter; font-size: .66rem; font-weight: 400; color: #aaa; }
        .jr-apply {
          background: #0A0A0A;
          color: #fff;
          border: none;
          border-radius: 7px;
          padding: .35rem .9rem;
          font-size: .75rem;
          font-weight: 600;
          cursor: pointer;
          font-family: Inter, sans-serif;
          transition: background .15s;
          white-space: nowrap;
        }
        .jr-apply:hover { background: #1A7A8A; }
        .jr-time { font-size: .68rem; color: #ccc; }
        .empty-state {
          text-align: center;
          padding: 5rem 2rem;
          color: #aaa;
        }
        .empty-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .empty-title {
          font-family: Fraunces, serif;
          font-size: 1.25rem;
          color: #0A0A0A;
          margin-bottom: .4rem;
        }
        .empty-sub { font-size: .875rem; }
        .btn-clear {
          margin-top: 1rem;
          background: #0A0A0A;
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: .6rem 1.25rem;
          font-size: .8rem;
          font-weight: 600;
          cursor: pointer;
          font-family: Inter, sans-serif;
        }
        @media (max-width: 768px) {
          .jobs-body { grid-template-columns: 1fr; }
          .sidebar { display: none; position: static; height: auto; }
          .sidebar.mobile-open { display: block; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 300; overflow-y: auto; }
          .jr-right { display: none; }
          .job-row { align-items: flex-start; }
          .jr-bottom-mobile {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: .5rem;
          }
        }
        @media (min-width: 769px) {
          .jr-bottom-mobile { display: none; }
          .mobile-filter-btn { display: none !important; }
        }
      `}</style>

      <div className="jobs-page">
        {/* Header */}
        <div className="jobs-header">
          <div className="jobs-header-top">
            <div>
              <h1 className="jobs-h1">Jobs in the Maldives</h1>
              <p className="jobs-count">{filtered.length} jobs found</p>
            </div>
            <button
              className="mobile-filter-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ background: '#0A0A0A', color: '#fff', border: 'none', borderRadius: 8, padding: '.5rem 1rem', fontSize: '.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: '.4rem' }}
            >
              ⚙️ Filters
            </button>
          </div>

          {/* Search */}
          <div className="search-row">
            <div className="search-input-wrap" style={{ flex: 2 }}>
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Job title, skill, or employer…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && setSearch(e.currentTarget.value)}
              />
            </div>
            <div className="search-input-wrap">
              <span className="search-icon">📍</span>
              <select value={atoll} onChange={e => setAtoll(e.target.value)}>
                <option value="">All Atolls</option>
                {ATOLLS.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <button className="btn-search" onClick={() => {}}>Search</button>
          </div>

          {/* Filter tabs */}
          <div className="filter-tabs">
            {[
              { key: 'all', label: 'All Jobs' },
              { key: 'resort', label: '🏝️ Resort' },
              { key: 'local', label: '🏙️ Local' },
              { key: 'government', label: '🏛️ Government' },
              { key: 'maldivian', label: '🇲🇻 Maldivians Only' },
            ].map(f => (
              <button
                key={f.key}
                className={`ftab${filter === f.key ? ' on' : ''}`}
                onClick={() => setFilter(f.key)}
              >{f.label}</button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="jobs-body">
          {/* Sidebar */}
          <aside className={`sidebar${sidebarOpen ? ' mobile-open' : ''}`}>
            {sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '.4rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '.82rem', color: '#888', marginBottom: '1.25rem', fontFamily: 'Inter, sans-serif' }}
              >✕ Close filters</button>
            )}
            <p className="sidebar-title">Filters</p>

            {/* Category */}
            <div className="sidebar-section">
              <span className="sidebar-label">Department</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.1rem' }}>
                <button
                  className={`cat-pill${category === '' ? ' active' : ''}`}
                  onClick={() => setCategory('')}
                >
                  <span className="cat-pill-icon">📋</span>
                  All Departments
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.name}
                    className={`cat-pill${category === cat.name ? ' active' : ''}`}
                    onClick={() => { setCategory(cat.name); setSidebarOpen(false) }}
                  >
                    <span className="cat-pill-icon">{cat.icon}</span>
                    {cat.name}
                    <span className="cat-pill-count">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Atoll */}
            <div className="sidebar-section">
              <span className="sidebar-label">Location / Atoll</span>
              <select className="sidebar-select" value={atoll} onChange={e => setAtoll(e.target.value)}>
                <option value="">All Atolls</option>
                {ATOLLS.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            {/* Job type */}
            <div className="sidebar-section">
              <span className="sidebar-label">Job Type</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                {['Full-time', 'Part-time', 'Contract', 'Seasonal'].map(t => (
                  <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.8rem', color: '#555', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ accentColor: '#1A7A8A' }} /> {t}
                  </label>
                ))}
              </div>
            </div>

            {/* Clear */}
            {(category || atoll || search) && (
              <button
                onClick={() => { setCategory(''); setAtoll(''); setSearch('') }}
                style={{ width: '100%', background: 'none', border: '1.5px solid #E5E5E5', borderRadius: 8, padding: '.5rem', fontSize: '.78rem', color: '#888', cursor: 'pointer', fontFamily: 'Inter, sans-serif', marginTop: '.5rem' }}
              >Clear all filters</button>
            )}
          </aside>

          {/* Job list */}
          <main className="jobs-list">
            <div className="jobs-list-header">
              <span className="jobs-list-count"><strong>{filtered.length}</strong> jobs found</span>
              <select className="sort-sel" value={sort} onChange={e => setSort(e.target.value)}>
                <option value="newest">Newest first</option>
                <option value="salary">Highest salary</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3 className="empty-title">No jobs found</h3>
                <p className="empty-sub">Try adjusting your filters or search term.</p>
                <button className="btn-clear" onClick={() => { setCategory(''); setAtoll(''); setSearch(''); setFilter('all') }}>
                  Clear all filters
                </button>
              </div>
            ) : (
              filtered.map(job => (
                <div key={job.id} className="job-row" onClick={() => setSelectedJob(job)}>
                  <div className="jr-logo">{job.icon}</div>
                  <div className="jr-main">
                    <div className="jr-title">{job.title}</div>
                    <div className="jr-meta">
                      <span className="jr-co">{job.co}</span>
                      <span className="jr-sep"></span>
                      <span className="jr-loc">📍 {job.loc}</span>
                      <span className="jr-sep"></span>
                      <span className="jr-loc">{job.type}</span>
                    </div>
                    <div className="jr-badges">
                      {job.badges.map((b, i) => {
                        const s = BADGE_STYLES[b.c] || { bg: '#F5F5F5', color: '#555' }
                        return <span key={i} className="jbdg" style={{ background: s.bg, color: s.color }}>{b.t}</span>
                      })}
                    </div>
                    {/* Mobile salary + apply */}
                    <div className="jr-bottom-mobile">
                      <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '.85rem', color: '#0A0A0A' }}>{job.sal}</div>
                      <button className="jr-apply" onClick={e => { e.stopPropagation(); setSelectedJob(job) }}>Apply →</button>
                    </div>
                  </div>
                  <span className="jr-time">{job.posted}</span>
                  <div className="jr-right">
                    <div className="jr-salary">{job.sal}<span className="jr-salary-note"> {job.salNote}</span></div>
                    <button className="jr-apply" onClick={e => { e.stopPropagation(); setSelectedJob(job) }}>Apply →</button>
                  </div>
                </div>
              ))
            )}
          </main>
        </div>
      </div>

      {selectedJob && <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </>
  )
}

export default function JobsPage() {
  return (
    <Suspense>
      <JobsContent />
    </Suspense>
  )
}