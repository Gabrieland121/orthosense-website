const contacts = [
  { title: 'Clinical partnerships', detail: 'Schedule a deep-dive on workflows, validation, and pilots.' },
  { title: 'IT & security review', detail: 'Architecture, compliance posture, and interoperability mapping.' },
  { title: 'Customer support', detail: 'Training, rollout playbooks, and change management support.' },
]

function Contact() {
  return (
    <div className="section contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Talk with the OrthoSense team.</h2>
        <p className="body">
          Tell us about your site. We will respond with a tailored pilot plan and schedule a clinical and technical
          review.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((item) => (
          <div key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}

        <div className="contact-card">
          <h3>Reach us</h3>
          <p>Email: <a href="mailto:hello@orthosense.health">hello@orthosense.health</a></p>
          <p>Demo line: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
          <p>Response time: Under 24 hours, expedited for active pilots.</p>
        </div>
      </div>

      <div className="cta-card">
        <div>
          <p className="eyebrow">Pilot request</p>
          <h3>Ready to start?</h3>
          <p className="body">Share your site details and preferred timeline. We will confirm your kickoff slot.</p>
        </div>
        <div className="cta-actions">
          <a className="primary" href="mailto:hello@orthosense.health">
            Email the team
          </a>
          <a className="ghost" href="https://cal.com">
            Schedule a call
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
