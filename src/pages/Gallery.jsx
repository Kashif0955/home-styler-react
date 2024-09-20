import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      <section
        className="gallery-area pb-120"
        style={{ backgroundColor: '#12151A' }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 pb-40 header-text text-center">
              <h1 className="pb-10" style={{ fontSize: '2.5rem' }}>
                Our Recent Works may impress you
              </h1>
              <p style={{ fontSize: '1.2rem' }}>
                Who are in extremely love with eco friendly system.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-8">
              <div className="single-gallery" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img
                      className="content-image img-fluid d-block mx-auto"
                      src="./assets/img/gallery/g1.jpg"
                      alt=""
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  </a>
                  <div className="content-details fadeIn-bottom text-center">
                    <Link to="/project-details">
                      <h3 className="content-title mx-auto">Lavendar ambient interior</h3>
                    </Link>
                    <Link to="/project-details" className="primary-btn text-uppercase btn btn-black mt-20 hover-btn">
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-lg-4">
              <div className="single-gallery" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img
                      className="content-image img-fluid d-block mx-auto"
                      src="./assets/img/gallery/g2.jpg"
                      alt=""
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  </a>
                  <div className="content-details fadeIn-bottom text-center">
                    <Link to="/project-details">
                      <h3 className="content-title mx-auto">Ambient interior</h3>
                    </Link>
                    <Link to="/project-details" className="primary-btn text-uppercase btn btn-black mt-20 hover-btn">
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-4">
              <div className="single-gallery" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img
                      className="content-image img-fluid d-block mx-auto"
                      src="./assets/img/gallery/g3.jpg"
                      alt=""
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  </a>
                  <div className="content-details fadeIn-bottom text-center">
                    <Link to="/project-details">
                      <h3 className="content-title mx-auto">Ambient interior</h3>
                    </Link>
                    <Link to="/project-details" className="primary-btn text-uppercase btn btn-black mt-20 hover-btn">
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-lg-8">
              <div className="single-gallery" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img
                      className="content-image img-fluid d-block mx-auto"
                      src="./assets/img/gallery/g4.jpg"
                      alt=""
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  </a>
                  <div className="content-details fadeIn-bottom text-center">
                    <Link to="/project-details">
                      <h3 className="content-title mx-auto">Lavendar ambient interior</h3>
                    </Link>
                    <Link to="/all-designs" className="primary-btn text-uppercase btn btn-black mt-20 hover-btn">
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* View Project Button for All Cards */}
          <div className="text-center mt-4">
            <Link to="/all-designs" className="primary-btn text-uppercase btn btn-black hover-btn">
              View All Projects
            </Link>
          </div>
        </div>

        <style jsx>{`
          .hover-btn {
            color: white;
            border: 2px solid transparent;
          }
          .hover-btn:hover {
            color: black;
            border-color: white;
          }
        `}</style>
      </section>
    </>
  );
};

export default Gallery;
