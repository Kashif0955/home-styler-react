import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner'
import '../../public/assets/css/about.css'

const About = () => { 
  return (

//     <>

//   <section id="center" className="center_about" >
    
//     <div className="center_om">
//       <div className="container-xl">
//         <div className="row center_o1">
//           <div className="col-md-6">
//             <div className="center_o1l">
//               <hr className="line_1 mt-0" />
//               <h1 className="text-white font_60 mb-0">About Company</h1>
//             </div>
//           </div>  
//         </div>
//       </div>
//     </div>
//   </section>
//   <section id="overview" className="p_3 bg-light">
//   <div className="container-xl">
//     <div className="proj_h1 row mb-4">
//       <div className="col-md-6">
//         <div className="proj_h1l">
//           <h6 className="col_red fw-bold">COMPANY OVERVIEW</h6>
//           <h2 className="mb-0">
//             MODERN &amp; LUXURY <br />{" "}
//             <span className="fw-normal">INTERIOR DESIGNERS IN USA</span>
//           </h2>
//         </div>
//       </div>
//       <div className="col-md-6">
        
//       </div>
//     </div>
//     <div className="row about_h1">
//       <div className="col-md-6 p-0">
//         <div className="overview_l">
//           <div className="grid clearfix">
//             <figure className="effect-jazz mb-0">
//               <a href="#">
//                 <img src="public/assets/img/team/19.jpg" className="w-100 " alt="abc" />
//               </a>
//             </figure>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6 p-0">
//         <div className="overview_r bg-white p-5">
//           <h4 className="bg_red text-white p-2 px-5 d-inline-block">1988</h4>
//           <h3 className="mt-3">
//             Crystalo Was Founded by
//             <br /> Chris Miller in USA.
//           </h3>
//           <p className="mt-3">
//             Indignation and dislike men who are so beguiled and demoralized by
//             the charms pleasure of the moment, so blinded by desire, that they
//             cannot foresee shrinking from toil and pain.
//           </p>
//           <h6 className="mb-0 fw-bold mt-4">
//             <a href="#">
//               Read More <i className="fa fa-long-arrow-right ms-1" />
//             </a>
//           </h6>
//         </div>
//       </div>
//     </div>
 
//   </div>
// </section>

// <section id="feature" className="p_3">
//       <div className="container-xl">
//         <div className="row feature_3">
//           <div className="col-md-6">
//             <div className="feature_3r">
//               <h1 className="mb-4 center_sm">Why We Are Different?</h1>
//               <div className="feature_3ri row">
//                 <div className="col-md-1 col-sm-1 pe-0">
//                   <div className="feature_3ril">
//                     <span className="fs-2 col_red align-middle">
//                       <i className="fa fa-home" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="col-md-11 col-sm-11">
//                   <div className="feature_3rir">
//                     <h4>Our Company History</h4>
//                     <p className="mb-0">
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="feature_3ri row mt-4">
//                 <div className="col-md-1 col-sm-1 pe-0">
//                   <div className="feature_3ril">
//                     <span className="fs-2 col_red align-middle">
//                       <i className="fa fa-bar-chart" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="col-md-11 col-sm-11">
//                   <div className="feature_3rir">
//                     <h4>Our Success Mission</h4>
//                     <p className="mb-0">
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="feature_3ri row mt-4">
//                 <div className="col-md-1 col-sm-1 pe-0">
//                   <div className="feature_3ril">
//                     <span className="fs-2 col_red align-middle">
//                       <i className="fa fa-recycle" />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="col-md-11 col-sm-11">
//                   <div className="feature_3rir">
//                     <h4>Our Future Plan</h4>
//                     <p className="mb-0">
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <h6 className="mt-4">
//                 Support <span className="pull-right">90%</span>
//               </h6>
//               <div className="progress-bar mt-3">
//                 <div className="progress" style={{ width: '90%' }} />
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="feature_3l">
//               <div className="grid clearfix">
//                 <figure className="effect-jazz mb-0">
//                   <a href="#">
//                     <img src="public/assets/img/alldesings/26.webp" className="w-100" alt="abc" />
//                   </a>
//                 </figure>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <section id="testim" className="p_3 bg-light">
//   <div className="container-xl">
//     <div className="proj_h1 row mb-4">
//       <div className="col-md-8">
//         <div className="proj_h1l">
//           <h6 className="col_red fw-bold">TESTIMONIALS</h6>
//           <h2 className="mb-0">
//             OUR CUSTOMER <span className="fw-normal">WORDS</span>
//           </h2>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="proj_h1r text-end mt-4">
//           <h6 className="mb-0 fw-bold">
//             <a href="#">
//               More Reviews <i className="fa fa-long-arrow-right ms-1" />
//             </a>
//           </h6>
//         </div>
//       </div>
//     </div>
//     <div className="testim_1 row">
//       <div className="col-md-4">
//         <div className="testim_1i shadow_box position-relative bg-white">
//           <div className="testim_1i1 text-center pt-5 pb-5 px-4">
//             <h5>Lorem Porta</h5>
//             <h6 className="text-muted mb-3">California</h6>
//             <img src="public/assets/img/prising/men-1.webp" alt="abc" className="rounded-circle" />
//             <p className="mt-3 mb-0">
//               Your guys were great knowledgeable, well experienced, efficient
//               and neat. A true to work with intexure.
//             </p>
//           </div>
//           <div className="testim_1i2 position-absolute top-0">
//             <span className="d-inline-block bg_red text-white p-3 fs-2">
//               <i className="fa fa-quote-left" />
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="testim_1i shadow_box position-relative bg-white">
//           <div className="testim_1i1 text-center pt-5 pb-5 px-4">
//             <h5>Nulla Amet</h5>
//             <h6 className="text-muted mb-3">Los Angeles</h6>
//             <img src="public/assets/img/prising/women-2.avif" alt="abc" className="rounded-circle" />
//             <p className="mt-3 mb-0">
//               Your guys were great knowledgeable, well experienced, efficient
//               and neat. A true to work with intexure.
//             </p>
//           </div>
//           <div className="testim_1i2 position-absolute top-0">
//             <span className="d-inline-block bg_red text-white p-3 fs-2">
//               <i className="fa fa-quote-left" />
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="testim_1i shadow_box position-relative bg-white">
//           <div className="testim_1i1 text-center pt-5 pb-5 px-4">
//             <h5>Dolor Ipsum</h5>
//             <h6 className="text-muted mb-3">Newyork City</h6>
//             <img src="public/assets/team/team-2.jpg" alt="abc" className="rounded-circle" />
//             <p className="mt-3 mb-0">
//               Your guys were great knowledgeable, well experienced, efficient
//               and neat. A true to work with intexure.
//             </p>
//           </div>
//           <div className="testim_1i2 position-absolute top-0">
//             <span className="d-inline-block bg_red text-white p-3 fs-2">
//               <i className="fa fa-quote-left" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// <section id="team" className="p_3">
//   <div className="container-xl">
//     <div className="proj_h1 row mb-4">
//       <div className="col-md-8">
//         <div className="proj_h1l">
//           <h6 className="col_red fw-bold">BEHIND OUR COMPANY</h6>
//           <h2 className="mb-0">
//             EXPERT &amp; EXPERINCED <span className="fw-normal">TEAM</span>
//           </h2>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="proj_h1r mt-4 text-end">
//           <h6 className="mb-0 fw-bold">
//             <a href="#">
//               All Members <i className="fa fa-long-arrow-right ms-1" />
//             </a>
//           </h6>
//         </div>
//       </div>
//     </div>
//     <div className="team_1 row">
//       <div className="col-md-3 col-sm-6">
//         <div className="team_1im">
//           <div className="team_1im1 position-relative">
//             <div className="team_1im1i">
//               <div className="grid clearfix">
//                 <figure className="effect-jazz mb-0">
//                   <a href="#">
//                     <img src="img/20.jpg" className="w-100" alt="abc" />
//                   </a>
//                 </figure>
//               </div>
//             </div>
//             <div className="team_1im1i1 text-center position-absolute w-100 h-100 top-0">
//               <h6 className="mb-0 fw-bold">
//                 <a className="text-white" href="#">
//                   View Profile <i className="fa fa-long-arrow-right ms-1" />
//                 </a>
//               </h6>
//             </div>
//             <div className="team_1im1i2 position-absolute w-100  pt-3 pb-3 text-center top-0">
//               <ul className="social-network social-circle mb-0">
//                 <li>
//                   <a href="#" className="icoFacebook" title="Facebook">
//                     <i className="fa fa-facebook" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoGoogle" title="Google +">
//                     <i className="fa fa-pinterest" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoLinkedin" title="Linkedin">
//                     <i className="fa fa-linkedin" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoRss" title="Rss">
//                     <i className="fa fa-dribbble" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="team_1im2 text-center shadow_box p-4">
//             <h6 className="text-muted">CEO &amp; Founder</h6>
//             <h5 className="mb-0">Lorem Amet</h5>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-3 col-sm-6">
//         <div className="team_1im">
//           <div className="team_1im1 position-relative">
//             <div className="team_1im1i">
//               <div className="grid clearfix">
//                 <figure className="effect-jazz mb-0">
//                   <a href="#">
//                     <img src="img/21.jpg" className="w-100" alt="abc" />
//                   </a>
//                 </figure>
//               </div>
//             </div>
//             <div className="team_1im1i1 text-center position-absolute w-100 h-100 top-0">
//               <h6 className="mb-0 fw-bold">
//                 <a className="text-white" href="#">
//                   View Profile <i className="fa fa-long-arrow-right ms-1" />
//                 </a>
//               </h6>
//             </div>
//             <div className="team_1im1i2 position-absolute w-100  pt-3 pb-3 text-center top-0">
//               <ul className="social-network social-circle mb-0">
//                 <li>
//                   <a href="#" className="icoFacebook" title="Facebook">
//                     <i className="fa fa-facebook" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoGoogle" title="Google +">
//                     <i className="fa fa-pinterest" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoLinkedin" title="Linkedin">
//                     <i className="fa fa-linkedin" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoRss" title="Rss">
//                     <i className="fa fa-dribbble" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="team_1im2 text-center shadow_box p-4">
//             <h6 className="text-muted">Manager</h6>
//             <h5 className="mb-0">Eget Porta</h5>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-3 col-sm-6">
//         <div className="team_1im">
//           <div className="team_1im1 position-relative">
//             <div className="team_1im1i">
//               <div className="grid clearfix">
//                 <figure className="effect-jazz mb-0">
//                   <a href="#">
//                     <img src="img/22.jpg" className="w-100" alt="abc" />
//                   </a>
//                 </figure>
//               </div>
//             </div>
//             <div className="team_1im1i1 text-center position-absolute w-100 h-100 top-0">
//               <h6 className="mb-0 fw-bold">
//                 <a className="text-white" href="#">
//                   View Profile <i className="fa fa-long-arrow-right ms-1" />
//                 </a>
//               </h6>
//             </div>
//             <div className="team_1im1i2 position-absolute w-100  pt-3 pb-3 text-center top-0">
//               <ul className="social-network social-circle mb-0">
//                 <li>
//                   <a href="#" className="icoFacebook" title="Facebook">
//                     <i className="fa fa-facebook" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoGoogle" title="Google +">
//                     <i className="fa fa-pinterest" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoLinkedin" title="Linkedin">
//                     <i className="fa fa-linkedin" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoRss" title="Rss">
//                     <i className="fa fa-dribbble" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="team_1im2 text-center shadow_box p-4">
//             <h6 className="text-muted">Architect</h6>
//             <h5 className="mb-0">Dolor Sed</h5>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-3 col-sm-6">
//         <div className="team_1im">
//           <div className="team_1im1 position-relative">
//             <div className="team_1im1i">
//               <div className="grid clearfix">
//                 <figure className="effect-jazz mb-0">
//                   <a href="#">
//                     <img src="img/23.jpg" className="w-100" alt="abc" />
//                   </a>
//                 </figure>
//               </div>
//             </div>
//             <div className="team_1im1i1 text-center position-absolute w-100 h-100 top-0">
//               <h6 className="mb-0 fw-bold">
//                 <a className="text-white" href="#">
//                   View Profile <i className="fa fa-long-arrow-right ms-1" />
//                 </a>
//               </h6>
//             </div>
//             <div className="team_1im1i2 position-absolute w-100  pt-3 pb-3 text-center top-0">
//               <ul className="social-network social-circle mb-0">
//                 <li>
//                   <a href="#" className="icoFacebook" title="Facebook">
//                     <i className="fa fa-facebook" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoGoogle" title="Google +">
//                     <i className="fa fa-pinterest" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoLinkedin" title="Linkedin">
//                     <i className="fa fa-linkedin" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="icoRss" title="Rss">
//                     <i className="fa fa-dribbble" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="team_1im2 text-center shadow_box p-4">
//             <h6 className="text-muted">Designer</h6>
//             <h5 className="mb-0">Augue Quis</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>



  


    
    <>
    <div className="slider-area2" style={{ backgroundColor: '#12151A' }}>
  <div className="slider-height2 hero-overly d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="hero-cap hero-cap2 text-center pt-80">
            <h2>About Us</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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
                    At MkInteriors, we offer a range of interior design services tailored to meet your specific needs. From concept development to final execution, we ensure every detail is perfect.
                  </p>
                  <p>
                    Our services include space planning, custom furniture design, color consultations, and complete interior makeovers. We work closely with you to create a space that reflects your personality and lifestyle.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to={'/contact'} className="btn btn-black f-right" >
                Get in Touch
                </Link>
              
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
                    <img src="public/assets/img/team/1.png" alt="John Smith" />
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
                    <img src="public/assets/img/team/3.png" alt="Jane Doe" />
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
                    <img src="public/assets/img/team/2.png" alt="Emily Johnson" />
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

      


        {/* Want To Work Start */}
    <Banner/>
        {/* Want To Work End */}

    
      </main>
    </>
  );
};

export default About;
