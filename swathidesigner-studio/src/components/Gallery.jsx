import img1 from '../assets/Gallery/B4F3EBAA-29E0-41F5-BB1B-DFFC7DC1152A.jpg'
import img2 from '../assets/Gallery/D8AAC928-D8D8-4E8A-9F33-39186C2BE37F.jpg'
import img3 from '../assets/Gallery/IMG_4152.jpg'
import img4 from '../assets/Gallery/IMG_9009.jpg'
import img5 from '../assets/Gallery/IMG_9107.jpg'
import img6 from '../assets/Gallery/IMG_9115.jpg'
import img7 from '../assets/Gallery/IMG_4107.jpg'
import img8 from '../assets/Gallery/IMG_3039.jpg'
import img9 from '../assets/Gallery/IMG_3041.jpg'
import img10 from '../assets/Gallery/IMG_3236.jpg'
import img11 from '../assets/Gallery/IMG_3240.jpg'
import img12 from '../assets/Gallery/IMG_3473.jpg'
import img13 from '../assets/Gallery/IMG_3856.jpg'
import img14 from '../assets/Gallery/IMG_3863.jpg'
import img15 from '../assets/Gallery/IMG_3864.jpg'
import img16 from '../assets/Gallery/IMG_4822.jpg'
import img17 from '../assets/Gallery/IMG_4835.jpg'
import img18 from '../assets/Gallery/IMG_4842.jpg'
import img19 from '../assets/Gallery/IMG_3470.jpg'

import { Container, Typography } from '@mui/material';
import '../styles/Gallery.css';


function Gallery() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <div className='gallery-container'>
        <Typography variant="h4" gutterBottom sx={{ color: "#5D4037" }} className="section-title">
          Our Creations
        </Typography>

        {/* Traditional Section */}
        <GallerySection title="Traditional">
          <div className='image-row two-images'>
            <img src={img12} alt="Traditional 1" loading="lazy" />
            <div className='center-text below-text'>Classic and captivating</div>
            <img src={img19} alt="Traditional 2" loading="lazy" />
          </div>
          <div className="image-grid three-col">
            <img src={img4} alt="Traditional 3" loading="lazy" />
            <img src={img5} alt="Traditional 4" loading="lazy" />
            <img src={img6} alt="Traditional 5" loading="lazy" />
            <img src={img14} alt="Traditional 6" loading="lazy" />
            <img src={img13} alt="Traditional 7" loading="lazy" />
            <img src={img15} alt="Traditional 8" loading="lazy" />
            <img src={img16} alt="Traditional 9" loading="lazy" />
            <img src={img17} alt="Traditional 10" loading="lazy" />
            <img src={img18} alt="Traditional 11" loading="lazy" />
          </div>
        </GallerySection>

        {/* Indo-Western Section */}
        <GallerySection title="Indo-Western">
          <div className="image-row with-text">
            <img src={img1} alt="Indo-Western-1" loading="lazy" />
            <div className='center-text'>Elegant Fusion-Wear</div>
            <img src={img2} alt="Indo-Western-2" loading="lazy" />
          </div>
          <div className='image-row with-text'>
            <img src={img3} alt="Indo-Western-3" loading="lazy" />
            <img src={img7} alt="Indo-Western-4" loading="lazy" />
          </div>
        </GallerySection>

        {/* Western Section */}
        <GallerySection title="Western">
          <div className="image-row with-text">
            <img src={img8} alt="Western-1" loading="lazy" />
            <div className='center-text'>Chic & Stylish</div>
            <img src={img9} alt="Western-2" loading="lazy" />
          </div>
          <div className='image-row with-text'>
            <img src={img10} alt="Western-3" loading="lazy" />
            <img src={img11} alt="Western-4" loading="lazy" />
          </div>
        </GallerySection>
      </div>
    </Container>
  );
}

function GallerySection({ title, children }) {
  return (
    <div className='gallery-section'>
      <Typography variant="h6" textAlign={"center"} gutterBottom className='subsection-title'>
        {title}
      </Typography>
      {children}
    </div>
  );
}

export default Gallery;