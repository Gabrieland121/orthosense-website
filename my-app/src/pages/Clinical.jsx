const outcomes = [
  { metric: '92%', label: 'detection accuracy', detail: 'Across retrospective validation on hip and knee cohorts.' },
  { metric: '0.7%', label: 'alert rate', detail: 'Optimized to avoid alarm fatigue while staying sensitive.' },
  { metric: '2 days', label: 'time-to-pilot', detail: 'Standard build with sandbox validation and IRB templates.' },
]

const timeline = [
  { title: 'Data readiness', body: 'Connectivity with EHR, PACS, and implant registry; mapping to OrthoSense schema.' },
  { title: 'Shadow mode', body: 'Model runs silently to benchmark sensitivity/specificity against your population.' },
  { title: 'Governance', body: 'Clinical sign-off on thresholds, escalation paths, and documentation for compliance.' },
  { title: 'Pilot launch', body: 'Live alerts to care team, weekly reviews, and tuning with surgeon champions.' },
  { title: 'Scale', body: 'Multi-site rollout with change management, training, and quarterly safety review.' },
]

function Clinical() {
  return (
    <div className="section clinical">
      <div className="section-heading">
        <p className="eyebrow">Clinical evidence</p>
        <h2>Medical rigor from day one.</h2>
        <p className="body">
          OrthoSense is designed for busy orthopedic teams: measurable accuracy, stable alerting, and transparent
          validation steps.
        </p>
      </div>

      <div className="stat-grid">
        {outcomes.map((item) => (
          <div key={item.label} className="stat-card">
            <div className="stat-metric">{item.metric}</div>
            <p className="stat-label">{item.label}</p>
            <p className="stat-detail">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="section-heading compact">
        <p className="eyebrow">Rollout path</p>
        <h3>Evidence-based onboarding.</h3>
      </div>
      <div className="timeline">
        {timeline.map((step, index) => (
          <div key={step.title} className="timeline-row">
            <div className="timeline-marker">{index + 1}</div>
            <div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clinical
