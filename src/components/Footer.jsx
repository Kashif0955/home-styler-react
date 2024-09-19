import React from 'react'

const Footer = () => {
  return (
<>
<footer>
  {/*? Footer Start*/}
  <div className="footer-area footer-bg">
    <div className="container">
      <div className="footer-top footer-padding">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
            <div className="single-footer-caption mb-50">
              {/* logo */}
              <div className="footer-logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo2_footer.png" alt="" />
                </a>
              </div>
              <div className="footer-tittle">
                <div className="footer-pera">
                  <p className="info1">
                    Grabbing the concsumer’s attention isn’t enough you have to
                    keep that attention for at least a.
                  </p>
                </div>
              </div>
              <div className="footer-number">
                <h4>
                  <span>+564 </span>7885 3222
                </h4>
                <p>youremail@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-2 col-md-5 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Useful Links</h4>
              </div>
              <div className="footer-cap">
                <span>New York</span>
                <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
              </div>
              <div className="footer-cap">
                <span>Japan</span>
                <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
              </div>
            </div>
          </div>
          {/* Instagram */}
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Instagram Feed</h4>
              </div>
              <div className="instagram-gellay">
                <ul className="insta-feed">
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/instagram1.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/instagram2.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/instagram3.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/instagram4.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/instagram5.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/instagram6.png" alt="" />
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
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            {/* Footer Social */}
            <div className="footer-social f-right">
              <span>Follow Us</span>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.facebook.com/sai4ull">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fas fa-globe" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End*/}
</footer>

</>
  )
}

export default Footer