export default function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel reveal">
        <div className="contact-heading">
          <p className="contact-eyebrow">Let's connect</p>
          <h2 id="contact-title">Find me in your favorite corner of the internet.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:dibaadzkia@student.upi.edu">
            <span>Email</span>
            <strong>dibaadzkia@student.upi.edu</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="https://open.spotify.com/search/diba%20adzkiy" target="_blank" rel="noopener noreferrer">
            <span>Spotify</span>
            <strong>diba adzkiy</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="https://instagram.com/dibaadzkia" target="_blank" rel="noopener noreferrer">
            <span>Instagram</span>
            <strong>@dibaadzkia</strong>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </div>
    </section>
  )
}