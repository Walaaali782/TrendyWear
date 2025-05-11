import { Link } from 'react-router-dom';
import img1 from '../assets/Rectangle3.png';
import img2 from '../assets/Rectangle4.png';
import img3 from '../assets/Rectangle5.png';
import img5 from '../assets/Rectangle2.png';
import img6 from '../assets/Rectangle1.png';


import img4 from '../assets/image1.png';

export default function Catogry() {  
  const images = [img1, img2, img3, img4 , img5, img6];

  return (
    <div className="bg-light min-vh-100 p-4 font-sans">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="rounded-circle"
            width="40"
            height="40"
          />
          <div>
            <h2 className="h6 fw-bold mb-0">Hi jana!</h2>
            <p className="text-muted small mb-0">bese</p>
          </div>
        </div>
        <div
          className="bg-dark text-white d-flex justify-content-center align-items-center rounded"
          style={{ width: '32px', height: '32px' }}
        >
          <span>👤</span>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search for product"
      />

      {/* Categories */}
      <div className="d-flex justify-content-around flex-wrap mb-4">
        {['ALL', 'Dresses', 'Tops', 'Shorts', 'Bantlon'].map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm px-3 py-2 rounded-pill mb-2 ${
              cat === 'Bantlon' ? 'btn-dark text-white' : 'btn-outline-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="row row-cols-1 row-cols-md-3 g-3">
  {images.map((img, index) => (
    <div key={index} className="col d-flex justify-content-center">
      <Link to={`/product`} className="text-decoration-none">
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            height: '350px',
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '8px',
          }}
        >
          <img
            src={img}
            alt={`product-${index}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>
    </div>
  ))}
</div>

    </div>
  );
}
