import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SAMPLE_JOBS } from '@/lib/jobs-data'

export async function generateMetadata({ params }: { params: { id: string } }) {
  const job = SAMPLE_JOBS.find(j => j.id === parseInt(params.id))
  if (!job) return {}
  return {
    title: `${job.title} at ${job.co} — Maldives Job Lab`,
    description: `${job.title} at ${job.co} in ${job.loc}. Salary: ${job.sal}. Apply now on Maldives Job Lab.`,
  }
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = SAMPLE_JOBS.find(j => j.id === parseInt(params.id))
  if (!job) notFound()

  const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
    new:  { bg: '#E8F7EE', color: '#0F6B3A' },
    hot:  { bg: '#FEF0EC', color: '#C94A2A' },
    exp:  { bg: '#FEF8E6', color: '#8A6200' },
    mv:   { bg: '#EEF2FF', color: '#3B47B5' },
    feat: { bg: '#FDF6E3', color: '#7A5C00' },
  }

  return (
    <>
      <style>{`
        .job-detail-page {
          min-height: 100vh;
          background: #FAFAFA;
          padding: 2rem clamp(1rem,5vw,5rem);
        }
        .job-detail-inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          font-size: .82rem;
          color: #888;
          text-decoration: none;
          margin-bottom: 1.5rem;
          transition: color .15s;
        }
        .back-link:hover { color: #0A0A0A; }
        .job-card {
          background: #fff;
          border: 1px solid #F0F0F0;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        .job-card-header {
          padding: 2rem 2rem 1.5rem;
          border-bottom: 1px solid #F5F5F5;
        }
        .job-card-top {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .jd-logo {
          width: 64px;
          height: 64px;
          border-radius: 14px;
          background: #F0F7F8;
          border: 1px solid #E5E5E5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          flex-shrink: 0;
        }
        .jd-co {
          font-size: .8rem;
          font-weight: 600;
          color: #1A7A8A;
          margin-bottom: .3rem;
        }
        .jd-title {
          font-family: Fraunces, serif;
          font-weight: 700;
          font-size: clamp(1.4rem,2.5vw,1.9rem);
          color: #0A0A0A;
          line-height: 1.2;
          letter-spacing: -.02em;
        }
        .jd-badges {
          display: flex;
          gap: .4rem;
          flex-wrap: wrap;
          margin-top: .75rem;
        }
        .jd-bdg {
          font-size: .7rem;
          font-weight: 600;
          padding: .2rem .65rem;
          border-radius: 100px;
        }
        .jd-chips {
          display: flex;
          gap: .5rem;
          flex-wrap: wrap;
          margin-top: 1.25rem;
        }
        .jd-chip {
          display: flex;
          align-items: center;
          gap: .35rem;
          background: #F5F5F5;
          border-radius: 8px;
          padding: .35rem .8rem;
          font-size: .78rem;
          color: #555;
        }
        .jd-chip.salary {
          background: #FDF6E3;
          color: #7A5C00;
          font-family: Fraunces, serif;
          font-weight: 700;
          font-size: .85rem;
        }
        .job-card-body {
          padding: 2rem;
        }
        .jd-section { margin-bottom: 2rem; }
        .jd-section-title {
          font-family: Fraunces, serif;
          font-weight: 600;
          font-size: 1rem;
          color: #0A0A0A;
          margin-bottom: .85rem;
          letter-spacing: -.01em;
        }
        .jd-desc {
          font-size: .9rem;
          color: #555;
          line-height: 1.85;
        }
        .jd-reqs {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: .6rem;
        }
        .jd-reqs li {
          font-size: .88rem;
          color: #555;
          padding-left: 1.25rem;
          position: relative;
          line-height: 1.6;
        }
        .jd-reqs li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #1A7A8A;
          font-size: .75rem;
          top: .15rem;
        }
        .jd-tags {
          display: flex;
          gap: .4rem;
          flex-wrap: wrap;
        }
        .jd-tag {
          background: #F5F5F5;
          color: #555;
          border-radius: 7px;
          padding: .3rem .75rem;
          font-size: .78rem;
          font-weight: 500;
        }
        .apply-sidebar {
          background: #fff;
          border: 1px solid #F0F0F0;
          border-radius: 16px;
          padding: 1.5rem;
          position: sticky;
          top: 80px;
        }
        .apply-salary {
          font-family: Fraunces, serif;
          font-weight: 700;
          font-size: 1.4rem;
          color: #0A0A0A;
          letter-spacing: -.02em;
          margin-bottom: .2rem;
        }
        .apply-salary-note {
          font-size: .75rem;
          color: #aaa;
          margin-bottom: 1.25rem;
          font-family: Inter, sans-serif;
          font-weight: 400;
        }
        .btn-apply-main {
          display: block;
          width: 100%;
          background: #0A0A0A;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: .85rem;
          font-size: .9rem;
          font-weight: 600;
          cursor: pointer;
          font-family: Inter, sans-serif;
          text-align: center;
          transition: background .15s;
          margin-bottom: .6rem;
          text-decoration: none;
        }
        .btn-apply-main:hover { background: #1A7A8A; }
        .btn-save-job {
          display: block;
          width: 100%;
          background: #fff;
          color: #0A0A0A;
          border: 1.5px solid #E5E5E5;
          border-radius: 10px;
          padding: .75rem;
          font-size: .85rem;
          font-weight: 500;
          cursor: pointer;
          font-family: Inter, sans-serif;
          text-align: center;
          transition: border-color .15s;
        }
        .btn-save-job:hover { border-color: #0A0A0A; }
        .apply-divider {
          border: none;
          border-top: 1px solid #F0F0F0;
          margin: 1.25rem 0;
        }
        .apply-detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: .78rem;
          margin-bottom: .5rem;
        }
        .apply-detail-label { color: #aaa; }
        .apply-detail-value { color: #0A0A0A; font-weight: 500; }
        .layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 1.5rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .layout { grid-template-columns: 1fr; }
          .apply-sidebar { position: static; }
          .job-detail-page { padding: 1rem; }
          .job-card-header { padding: 1.25rem; }
          .job-card-body { padding: 1.25rem; }
        }
      `}</style>

      <div className="job-detail-page">
        <div className="job-detail-inner">
          <Link href="/jobs" className="back-link">← Back to jobs</Link>

          <div className="layout">
            {/* Main content */}
            <div>
              <div className="job-card">
                <div className="job-card-header">
                  <div className="job-card-top">
                    <div className="jd-logo">{job!.icon}</div>
                    <div>
                      <div className="jd-co">{job!.co}</div>
                      <h1 className="jd-title">{job!.title}</h1>
                      <div className="jd-badges">
                        {job!.badges.map((b, i) => {
                          const s = BADGE_STYLES[b.c] || { bg: '#F5F5F5', color: '#555' }
                          return <span key={i} className="jd-bdg" style={{ background: s.bg, color: s.color }}>{b.t}</span>
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="jd-chips">
                    <span className="jd-chip">📍 {job!.loc}</span>
                    <span className="jd-chip">🕐 {job!.type}</span>
                    <span className="jd-chip">🏢 {job!.dept}</span>
                    <span className="jd-chip salary">💰 {job!.sal} <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '.72rem' }}>{job!.salNote}</span></span>
                  </div>
                </div>

                <div className="job-card-body">
                  <div className="jd-section">
                    <h2 className="jd-section-title">About the Role</h2>
                    <p className="jd-desc">{job!.desc}</p>
                  </div>

                  <div className="jd-section">
                    <h2 className="jd-section-title">Requirements</h2>
                    <ul className="jd-reqs">
                      {job!.reqs.map((req, i) => <li key={i}>{req}</li>)}
                    </ul>
                  </div>

                  <div className="jd-section">
                    <h2 className="jd-section-title">Skills & Tags</h2>
                    <div className="jd-tags">
                      {job!.tags.map(tag => <span key={tag} className="jd-tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="apply-sidebar">
              <div className="apply-salary">{job!.sal}</div>
              <div className="apply-salary-note">{job!.salNote}</div>
              <a href="#" className="btn-apply-main">Apply Now →</a>
              <button className="btn-save-job">🔖 Save Job</button>
              <hr className="apply-divider" />
              <div className="apply-detail">
                <span className="apply-detail-label">Location</span>
                <span className="apply-detail-value">{job!.loc}</span>
              </div>
              <div className="apply-detail">
                <span className="apply-detail-label">Job Type</span>
                <span className="apply-detail-value">{job!.type}</span>
              </div>
              <div className="apply-detail">
                <span className="apply-detail-label">Department</span>
                <span className="apply-detail-value">{job!.dept}</span>
              </div>
              <div className="apply-detail">
                <span className="apply-detail-label">Posted</span>
                <span className="apply-detail-value">{job!.posted}</span>
              </div>
              <hr className="apply-divider" />
              <p style={{ fontSize: '.72rem', color: '#aaa', lineHeight: 1.6 }}>
                Create a free profile to apply instantly and track your application status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}// Sat Jul 18 15:05:32 +05 2026
