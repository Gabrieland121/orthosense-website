import { NavLink, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Platform from './pages/Platform.jsx'
import Clinical from './pages/Clinical.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/clinical', label: 'Clinical' },
  { to: '/contact', label: 'Contact' },
]

function App() {
  return (
    <div className="page">
      <div className="background-glow" />
      <header className="site-header">
        <div className="nav">
          <Link className="brand" to="/">
            OrthoSense
          </Link>
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <Link className="ghost" to="/contact">
              Talk with us
            </Link>
            <Link className="primary" to="/contact">
              Book a demo
            </Link>
          </div>
        </div>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/clinical" element={<Clinical />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="brand">OrthoSense</div>
        <p>Early diagnosis of prosthetic loosening.</p>
        <div className="footer-links">
          <Link to="/platform">Platform</Link>
          <Link to="/clinical">Clinical</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  )
}

export default App
