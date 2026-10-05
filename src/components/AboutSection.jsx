export default function AboutSection() {
  return (
    <section className="about-section section-shell" id="about" aria-labelledby="about-title">
      <div className="section-label reveal">
        <span>01</span> / About
      </div>
      <div className="about-content">
        <h2 style={{ color: 'black' }} className="reveal" id="about-title">
          Curious mind,<br />
          <em>creative heart.</em>
        </h2>
        <div className="about-details reveal">
          <p>
            Alohaa aku diba, mahasiswi Ilmu Komputer Universitas Pendidikan Indonesia angkatan 2025. 
            Di luar kesibukan dikelas dan organisasi, musik dan film menjadi bagian dari keseharian akuu.
          </p>
          <div className="hobby-grid">
            <article className="hobby-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 18V5l11-2v13M9 9l11-2M6 21c2 0 3-1.1 3-2.5S8 16 6 16s-3 1.1-3 2.5S4 21 6 21Zm11-2c2 0 3-1.1 3-2.5S19 14 17 14s-3 1.1-3 2.5S15 19 17 19Z" />
              </svg>
              <span>Listening to</span>
              <strong>Music</strong>
            </article>
            <article className="hobby-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 5v14M17 5v14M3 9h4m10 0h4M3 15h4m10 0h4" />
              </svg>
              <span>Watching</span>
              <strong>Films</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}