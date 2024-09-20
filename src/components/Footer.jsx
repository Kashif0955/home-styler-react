import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer>
        {/* Footer Start */}
        <div className="footer-area footer-bg">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    {/* Logo */}
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo2_footer.png" alt="Company Logo" />
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p className="info1">
                          Transforming spaces into exquisite experiences. Let us create your dream interior.
                        </p>
                      </div>
                    </div>
                    <div className="footer-number">
                      <h4>
                        <span>+564 </span>7885 3222
                      </h4>
                      <p>info@yourdesigncompany.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-5 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Services</h4>
                    </div>
                    <ul className="footer-links">
                      <li><a href="/services/interior-design">Interior Design</a></li>
                      <li><a href="/services/renovation">Renovation</a></li>
                      <li><a href="/services/consultation">Consultation</a></li>
                    </ul>
                  </div>
                </div>
                {/* Instagram */}
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                    <h4>
  <span class="instagram">Instagram</span>
  <span class="feed">Feed</span>
</h4>

                    </div>
                    <div className="instagram-gellay">
                      <ul className="insta-feed">
                        <li>
                          <a href="#">
                            <img src="public/assets/img/hero/1.jpg" alt="Instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="public/assets/img/hero/3.jpg" alt="Instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="public/assets/img/hero/6.jpg" alt="Instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="public/assets/img/alldesings/17.jpeg" alt="Instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="public/assets/img/alldesings/pexels-photo-3144581.webp" alt="Instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="public/assets/img/alldesings/28.jpeg" alt="Instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    <p>
                      Copyright © {new Date().getFullYear()} All rights reserved |{" "}
                      <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                      <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                        MK-Interiors
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  {/* Footer Social */}
                  <div className="footer-social f-right">
                    <span>Follow Us</span>
                    <a href="#"><FaTwitter /></a>
                    <a href="https://www.facebook.com/sai4ull"><FaFacebookF /></a>
                    <a href="#"><FaGlobe /></a>
                    <a href="#"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </footer>
    </>
  );
}

export default Footer;
