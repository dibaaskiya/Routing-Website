import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './css/style.css'

import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import JourneySection from './components/JourneySection'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'

export default function App() {
  const location = useLocation()

  // Re-trigger animasi reveal saat halaman berganti
  useEffect(() => {
    const motionIsReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealElements = document.querySelectorAll('.reveal:not(.is-revealed)')

    if (motionIsReduced || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [location.pathname])

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <Link className="brand" to="/" aria-label="Kembali ke awal">
            DIBSI PAGE<span>.</span>
          </Link>
          <nav aria-label="Navigasi utama">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/journey">Journey</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a className="header-cta" href="mailto:dibaadzkia@student.upi.edu">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/journey" element={<JourneySection />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 Adiba Adzkia Azzahra</p>
        <p>Made with curiosity.</p>
      </footer>
    </>
  )
}