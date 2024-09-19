import React from 'react';

const About = () => {
  return (
    <>
      <main>
        {/* Our Info Start */}
        <section className="our-info custom-section-padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h2 className="section-title">About Us</h2>
        <p className="section-description">
          Welcome to Mk, where we specialize in transforming spaces into stunning works of art. Our team of expert designers and architects work tirelessly to bring your vision to life with a touch of elegance and functionality.
        </p>
        <p className="section-description">
          With years of experience in the industry, we pride ourselves on our ability to blend creativity with practicality, ensuring that every project is not only beautiful but also functional. Whether it's a residential, commercial, or hospitality space, we have the expertise to deliver exceptional results.
        </p>
      </div>
    </div>
  </div>
</section>



        {/* Our Info End */}

        {/* Professional Services Start */}
        <div className="profession-caption mt-32">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                {/* Section Title */}
                <div className="section-tittle profession-details">
                  <span>Our Professional Services</span>
                  <h2>Creating Exceptional Spaces with Attention to Detail</h2>
                  <p>
                    At [Your Company Name], we offer a range of interior design services tailored to meet your specific needs. From concept development to final execution, we ensure every detail is perfect.
                  </p>
                  <p>
                    Our services include space planning, custom furniture design, color consultations, and complete interior makeovers. We work closely with you to create a space that reflects your personality and lifestyle.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <a href="contact.html" className="btn btn-primary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Professional Services End */}

        {/* Team Start */}
        <div className="team-area section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                {/* Section Title */}
                <div className="section-tittle text-center mb-70">
                  <span>Meet Our Team</span>
                  <h2>Our Creative Minds</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Team */}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/team/john-smith.jpg" alt="John Smith" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">John Smith</a>
                    </h3>
                    <span>Lead Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/team/jane-doe.jpg" alt="Jane Doe" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Jane Doe</a>
                    </h3>
                    <span>Senior Architect</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src="assets/img/team/emily-johnson.jpg" alt="Emily Johnson" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">Emily Johnson</a>
                    </h3>
                    <span>Project Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}

        {/* Testimonial Start */}
        <div className="testimonial-area testimonial-padding">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  {/* Single Testimonial */}
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption">
                      <div className="testimonial-top-cap">
                        <img src="assets/img/testimonial-logo.png" alt="Testimonial Logo" />
                        <p>
                          "Working with [Your Company Name] was a fantastic experience. Their attention to detail and creativity transformed our office space into a modern and functional environment."
                        </p>
                      </div>
                      <div className="testimonial-founder">
                        <div className="founder-img">
                          <span>
                            <strong>Michael Lee</strong> - CEO, XYZ Corp
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Testimonial */}
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption">
                      <div className="testimonial-top-cap">
                        <img src="assets/img/testimonial-logo.png" alt="Testimonial Logo" />
                        <p>
                          "The team at [Your Company Name] exceeded our expectations. They created a home that perfectly matches our style and needs. Highly recommended!"
                        </p>
                      </div>
                      <div className="testimonial-founder">
                        <div className="founder-img">
                          <span>
                            <strong>Laura Adams</strong> - Homeowner
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}

        {/* Brand Area Start */}
        <div className="brand-area pt-120 pb-120">
          <div className="container">
            <div className="brand-active brand-border pt-50 pb-40">
              <div className="single-brand">
                <img src="assets/img/brands/brand1.png" alt="Brand 1" />
              </div>
              <div className="single-brand">
                <img src="assets/img/brands/brand2.png" alt="Brand 2" />
              </div>
              <div className="single-brand">
                <img src="assets/img/brands/brand3.png" alt="Brand 3" />
              </div>
              <div className="single-brand">
                <img src="assets/img/brands/brand4.png" alt="Brand 4" />
              </div>
              <div className="single-brand">
                <img src="assets/img/brands/brand5.png" alt="Brand 5" />
              </div>
            </div>
          </div>
        </div>
        {/* Brand Area End */}

        {/* Want To Work Start */}
        <section className="wantToWork-area w-padding2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="wantToWork-caption wantToWork-caption2">
                  <h2>Looking for an Exceptional Interior Design Experience?</h2>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3">
                <a href="contact.html" className="btn btn-black f-right">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Want To Work End */}

        {/* Blog Area Start */}
        <div className="home-blog-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-70">
                  <span>Our Latest Blog</span>
                  <h2>Insights & Inspiration</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog1.png" alt="Blog 1" />
                    </div>
                    <ul>
                      <li className="black">
                        <i className="fas fa-calendar-alt"></i>
                        March 10, 2024
                      </li>
                      <li>
                        <i className="fas fa-user"></i>
                        John Smith
                      </li>
                    </ul>
                  </div>
                  <div className="blog-caption">
                    <h3>
                      <a href="#">5 Tips for a Modern Living Room Makeover</a>
                    </h3>
                    <p>
                      Discover how to give your living room a contemporary touch with these simple design tips.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/blog/blog2.png" alt="Blog 2" />
                    </div>
                    <ul>
                      <li className="black">
                        <i className="fas fa-calendar-alt"></i>
                        March 15, 2024
                      </li>
                      <li>
                        <i className="fas fa-user"></i>
                        Jane Doe
                      </li>
                    </ul>
                  </div>
                  <div className="blog-caption">
                    <h3>
                      <a href="#">Maximizing Small Spaces: Design Hacks</a>
                    </h3>
                    <p>
                      Learn how to make the most of limited space with these effective design solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Area End */}
      </main>
    </>
  );
};

export default About;
