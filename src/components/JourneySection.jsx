export default function JourneySection() {
  return (
    <section className="journey-section section-shell" id="journey" aria-labelledby="journey-title">
      <div className="section-label reveal">
        <span>02</span> / Journey
      </div>
      <div className="journey-grid">
        <div className="journey-card reveal">
          <div className="journey-mark" aria-hidden="true">
            <span>01</span>
            <i></i>
          </div>
          <div className="journey-copy">
            <p className="current-label">Currently</p>
            <h2 style={{ color: 'black' }} id="journey-title">Badan Eksekutif Mahasiswa KEMAKOM</h2>
            <p className="journey-institution">Universitas Pendidikan Indonesia</p>
            <p className="journey-role">Talent and Recreation</p>
          </div>
          <span className="journey-arrow" aria-hidden="true">↗</span>
        </div>

        <div className="journey-card reveal">
          <div className="journey-mark" aria-hidden="true">
            <span>02</span>
            <i></i>
          </div>
          <div className="journey-copy">
            <p className="past-label">Past Experience</p>
            <h2 style={{ color: 'black' }}>Majelis Perwakilan Kelas</h2>
            <p className="journey-institution">MAN 2 Kota Makassar</p>
          </div>
          <span className="journey-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </section>
  )
}