import { Link } from 'react-router-dom'

const highlights = [
  { label: 'Early flagging', text: 'Detect loosening risk before symptoms surface.' },
  { label: 'Ortho-native', text: 'Built with surgeons, nurses, and administrators.' },
  { label: 'Fast rollout', text: 'Drop into your existing perioperative workflow.' },
]

const proofPoints = [
  { metric: '14%', detail: 'of hip/knee implants show radiographic loosening within 10 years. OrthoSense finds risk earlier.' },
  { metric: '3-6x', detail: 'higher revision cost vs. index surgery. Avoid preventable revisions with proactive alerts.' },
  { metric: '48 hrs', detail: 'to go live. Pre-built playbooks for multi-site deployments.' },
]

const features = [
  { title: 'Continuous signals', body: 'Sensors + imaging + patient-reported outcomes unified into one risk score.' },
  { title: 'Decision support', body: 'Contextual recommendations tailored to surgeon preferences and hospital policy.' },
  { title: 'Interoperable', body: 'FHIR-first data exchange; interfaces with EHR, PACS, and implant registries.' },
]

const workflow = [
  'Ingest perioperative data (intra-op imaging, implant data, vitals, PROMs).',
  'Model assigns loosening probability and confidence per patient.',
  'Clinicians receive prioritized worklists with recommended next actions.',
  'Closed-loop monitoring tracks progress and adapts to new evidence.',
]

const personas = [
  {
    title: 'Surgeons',
    bullets: ['Earlier intervention windows', 'Reduced revisions and OR strain', 'Support for shared decision making'],
  },
  {
    title: 'Administrators',
    bullets: ['Better implant economics', 'Documented pathways for compliance', 'Cleaner data for quality reporting'],
  },
  {
    title: 'Patients',
    bullets: ['Transparency on risk status', 'Simplified follow-up tasks', 'Confidence in recovery plans'],
  },
]

const faqs = [
  {
    q: 'How does OrthoSense detect loosening early?',
    a: 'We fuse intra-op imaging, implant data, and post-op signals into a single risk score tuned for orthopedic workflows.',
  },
  { q: 'Is it secure?', a: 'Yes. HIPAA-ready architecture, encryption in transit and at rest, and audit trails for every action.' },
  { q: 'Will it fit my stack?', a: 'We integrate via FHIR, HL7, and modern APIs. No rip-and-replace required.' },
  { q: 'How fast can we pilot?', a: 'Most sites are live in under two days with our pre-built playbooks and sandbox environment.' },
]

const imagingShots = [
  { title: 'Hip AP overlay', detail: 'Loosening focus area with overlay, model confidence 0.92', tag: 'Radiograph' },
  { title: 'Knee lateral', detail: 'Comparison to prior study with variance map applied', tag: 'Radiograph' },
]

const mediaSlots = [
  { label: 'Radiograph overlay', hint: 'Drop a hip or knee AP/lat with your overlay' },
  { label: 'Dashboard', hint: 'Upload a clinician dashboard or worklist screenshot' },
  { label: 'Team photo', hint: 'Add your surgical team or site image' },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Early diagnosis of prosthetic loosening</div>
            <h1>See implant risk before patients feel it.</h1>
            <p className="lede">
              OrthoSense delivers real-time detection of prosthetic loosening, built with orthopedic teams to keep
              patients safe and ORs efficient.
            </p>
            <div className="cta-row">
              <Link className="primary" to="/contact">
                Start a pilot
              </Link>
              <Link className="ghost" to="/platform">
                See the platform
              </Link>
            </div>
            <div className="highlight-grid">
              {highlights.map((item) => (
                <div key={item.label} className="pill">
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header">Risk overview</div>
            <div className="score">
              <span className="score-value">92%</span>
              <span className="score-label">Loosening detection accuracy in validation</span>
            </div>
            <div className="panel-metrics">
              {proofPoints.map((item) => (
                <div key={item.metric} className="metric">
                  <span className="metric-number">{item.metric}</span>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="imaging-deck">
              <div className="imaging-header">
                <p className="eyebrow">Imaging</p>
                <p className="body">AI-assisted radiographs with overlays and confidence notes.</p>
              </div>
              <div className="filmstrip">
                {imagingShots.map((scan, index) => (
                  <div key={scan.title} className="film-card">
                    <div className="film-top">
                      <span className="film-tag">{scan.tag}</span>
                      <span className="film-meta">Study #{index + 12}</span>
                    </div>
                    <div className="film-image">
                      <div className="film-grid" />
                      <div className="film-glow" />
                      <div className="film-blob" />
                    </div>
                    <div className="film-footer">
                      <h4>{scan.title}</h4>
                      <p>{scan.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Media</p>
          <h2>Swap in your imagery.</h2>
          <p className="body">These slots are ready for radiographs, dashboards, or team photography.</p>
        </div>
        <div className="media-grid">
          {mediaSlots.map((slot) => (
            <div key={slot.label} className="media-card">
              <div className="image-slot">
                <span className="slot-label">{slot.label}</span>
                <span className="slot-hint">{slot.hint}</span>
              </div>
              <div className="media-footer">
                <p className="body">Replace this area with your image file.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Why now</p>
          <h2>Catch loosening before it becomes revision surgery.</h2>
          <p className="body">
            The signal is already in your data. OrthoSense turns imaging, implant metadata, and patient-reported outcomes
            into confident calls to action.
          </p>
        </div>
        <div className="cards">
          {proofPoints.map((item) => (
            <div key={item.metric} className="card">
              <div className="card-number">{item.metric}</div>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Platform</p>
          <h2>Built for orthopedic teams.</h2>
          <p className="body">
            Each release is co-designed with surgeons and perioperative nursing leaders to keep it useful in the clinic,
            not just on a slide.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Operational on day one.</h2>
          <p className="body">
            We meet you where you are: interoperable APIs, clinical validation, and clear routes to rollout.
          </p>
        </div>
        <ol className="workflow-list">
          {workflow.map((step, index) => (
            <li key={step}>
              <span className="step-number">{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Who benefits</p>
          <h2>Aligned incentives for every stakeholder.</h2>
          <p className="body">
            Early diagnosis improves outcomes, economics, and patient confidence. Each team gets value from day one.
          </p>
        </div>
        <div className="persona-grid">
          {personas.map((persona) => (
            <div key={persona.title} className="persona-card">
              <h3>{persona.title}</h3>
              <ul>
                {persona.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Answers for your team.</h2>
          <p className="body">
            We handle security, integration, and clinical workflow so you can focus on patients.
          </p>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <div key={item.q} className="faq-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Get started</p>
            <h2>Bring OrthoSense to your program.</h2>
            <p className="body">
              Share your site details and we will schedule a deep-dive on your data flows and rollout plan.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="primary" to="/contact">
              Email the team
            </Link>
            <Link className="ghost" to="/platform">
              View platform overview
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
