import { Link } from 'react-router-dom'
import heroImg from '../assets/diba.png'

export default function HeroSection() {
  return (
    <>
      <section className="hero-section" id="top" aria-labelledby="hero-title">
        <div className="hero-copy reveal is-revealed">
          <p className="eyebrow">
            <span></span> Computer Science Education · 2025
          </p>
          <h1 style={{ color: 'black' }} id="hero-title">
            Adiba Adzkia<br />
            <em>Azzahra.</em>
          </h1>
          <p className="hero-intro">
            Get to Know me As Mahasiswi Ilmu Komputer di Universitas Pendidikan Indonesia yang senang eksplor ide, berbagai macam genre musik, dan film.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/about">
              Get to know me <span aria-hidden="true">↓</span>
            </Link>
            <a className="text-link" href="https://instagram.com/dibaadzkia" target="_blank" rel="noopener noreferrer">
              Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal is-revealed">
          <div className="hero-image-wrap">
            <img src={heroImg} alt="Abstract purple layered tiles" width="343" height="361" />
          </div>
          <span className="floating-tag tag-year">UPI '25</span>
          <span className="floating-tag tag-place">Based in Indonesia</span>
        </div>
      </section>

      <aside className="identity-strip" aria-label="Ringkasan profil">
        <span>Computer Science Education</span>
        <i aria-hidden="true">✦</i>
        <span>UPI 2025</span>
        <i aria-hidden="true">✦</i>
        <span>BEM KEMAKOM</span>
      </aside>
    </>
  )
}
