import campusImg from '../assets/campus.png'
import bemImg from '../assets/bem.png'
import shsImg from '../assets/shs.png'

const galleryData = [
  { img: campusImg, title: 'Campus Life - Universitas Pendidikan Indonesia' },
  { img: bemImg, title: 'Organization - BEM KEMAKOM Activity' },
  { img: shsImg, title: 'High School - MAN 2 Kota Makassar' },
]

export default function GallerySection() {
  return (
    <section className="gallery-section section-shell" id="gallery" aria-labelledby="gallery-title">
      <div className="section-label reveal">
        <span>03</span> / Gallery
      </div>
      <div className="gallery-content">
        <h2 style={{ color: 'black', textAlign: 'center' }} className="reveal" id="gallery-title">
          Moments &<br />
          <em>Memories.</em>
        </h2>

        {/* Flexbox & justify-content center membuat posisi grid dan item di tengah */}
        <div 
          className="gallery-grid reveal" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2rem',
            marginTop: '2rem'
          }}
        >
          {galleryData.map((item, index) => (
            <div 
              className="gallery-item" 
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <img 
                src={item.img} 
                alt={`Moment ${index + 1}`} 
                style={{ 
                  width: '300px', 
                  height: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '12px' 
                }} 
              />
              <div style={{ marginTop: '1rem' }}>
                <span><b>{item.title}</b></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}