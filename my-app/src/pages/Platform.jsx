const modules = [
  {
    title: 'Signal fusion',
    body: 'Combines intra-op imaging, implant metadata, gait metrics, vitals, and PROMs into a unified loosening score.',
  },
  {
    title: 'Clinical-grade AI',
    body: 'Validated models with surgeon-in-the-loop review and explainability to support care team adoption.',
  },
  {
    title: 'Actionable worklists',
    body: 'Prioritized patients, triage categories, and suggested next steps mapped to your perioperative protocols.',
  },
]

const safeguards = [
  'HIPAA-ready architecture with encryption at rest and in transit',
  'Role-based access, SSO/SAML, and audit trails per event',
  'Configurable alert thresholds with clinical governance controls',
  'Data residency options and automated retention policies',
]

const integration = [
  { title: 'FHIR + HL7', detail: 'Bidirectional data exchange for orders, encounters, and imaging.' },
  { title: 'PACS & modalities', detail: 'Radiographs and CT ingested with structured implant tagging.' },
  { title: 'Implant registries', detail: 'Registry feeds enrich model context and longitudinal tracking.' },
  { title: 'Notifications', detail: 'EHR inbox, email, and SMS options with escalation paths.' },
]

function Platform() {
  return (
    <div className="section platform">
      <div className="section-heading">
        <p className="eyebrow">Platform</p>
        <h2>Clinical-grade AI for orthopedic surveillance.</h2>
        <p className="body">
          OrthoSense is a medical-grade platform tuned for early diagnosis of prosthetic loosening with clean
          integration, governance, and reliability.
        </p>
      </div>

      <div className="feature-grid">
        {modules.map((module) => (
          <div key={module.title} className="feature-card">
            <h3>{module.title}</h3>
            <p>{module.body}</p>
          </div>
        ))}
      </div>

      <div className="section-heading compact">
        <p className="eyebrow">Safety & compliance</p>
        <h3>Built for hospital security teams.</h3>
      </div>
      <ul className="checklist">
        {safeguards.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="section-heading compact">
        <p className="eyebrow">Interoperability</p>
        <h3>Drop into your stack.</h3>
        <p className="body">Clinical teams keep their workflows; OrthoSense does the orchestration behind the scenes.</p>
      </div>
      <div className="cards">
        {integration.map((item) => (
          <div key={item.title} className="card">
            <div className="card-number">{item.title}</div>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Platform
