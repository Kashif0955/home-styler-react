import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <>
      <section className="gallery-area pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 pb-40 header-text text-center">
              <h1 className="pb-10">Our Recent Works may impress you</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="single-gallery">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img
                      className="content-image img-fluid d-block mx-auto"
                      src="./assets/img/gallery/g1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="content-details fadeIn-bottom">
                    <Link to="/project-details">
                      <h3 className="content-title mx-auto">
                        Lavendar ambient interior
                      </h3>
                    </Link>
                    <Link
                      to="/project-details"
                      className="primary-btn text-uppercase mt-20"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-gallery">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img
                      className="content-image img-fluid d-block mx-auto"
                      src="./assets/img/gallery/g2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="content-details fadeIn-bottom">
                    <Link to="/project-details">
                      <h3 className="content-title mx-auto">Ambient interior</h3>
                    </Link>
                    <Link
                      to="/project-details"
                      className="primary-btn text-uppercase mt-20"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-gallery">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img
                      className="content-image img-fluid d-block mx-auto"
                      src="./assets/img/gallery/g3.jpg"
                      alt=""
                    />
                  </a>
                  <div className="content-details fadeIn-bottom">
                    <Link to="/project-details">
                      <h3 className="content-title mx-auto">Ambient interior</h3>
                    </Link>
                    <Link
                      to="/project-details"
                      className="primary-btn text-uppercase mt-20"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="single-gallery">
                <div className="content">
                  <a href="#" target="_blank">
                    <div className="content-overlay" />
                    <img
                      className="content-image img-fluid d-block mx-auto"
                      src="./assets/img/gallery/g4.jpg"
                      alt=""
                    />
                  </a>
                  <div className="content-details fadeIn-bottom">
                    <Link to="/project-details">
                      <h3 className="content-title mx-auto">
                        Lavendar ambient interior
                      </h3>
                    </Link>
                    <Link
                      to="/project-details"
                      className="primary-btn text-uppercase mt-20"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
