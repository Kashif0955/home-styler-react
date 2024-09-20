import React from 'react';

const Services = () => {
  return (
    <section id="work_h">
      <div
        className="work_hm pt-5 mt-5"
        style={{
          background: '#12151A',
        }}
      >
        <div className="container">
          <div className="row work_h1 text-center mb-4">
            <div className="col-md-12">
              <h6 className="col_red fw-bold">WORKING AREAS</h6>
              <h2 className="text-white">
                COVERED <span className="fw-normal">INDUSTRIES</span>
              </h2>
              <p className="mt-3 text-white-50 mb-0">
                We are an Interior Designer, Who believe in excellence, quality and
                honesty, yes we <br /> design beautiful home interiors.
              </p>
            </div>
          </div>
          <div className="row work_h2">
            {/* First Column */}
            <div className="col-md-4">
              <div className="work_h2m position-relative">
                <div className="work_h2m1">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#">
                        <img
                          src="public/assets/img/alldesings/28.jpeg"
                          className="w-100"
                          alt="Residential"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="work_h2m2  position-absolute">
                  <div className="work_h2m2i row mx-0">
                    <div className="col-md-2 p-0">
                      <div className="work_h2m2il text-center bg-light">
                        <span className="col_red fs-2">
                          <i className="fa fa-home" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10 p-0">
                      <div className="work_h2m2ir bg-white p-4">
                        <h5>Residential</h5>
                        <p className="mb-0">
                          Indignation and dislike men who are so beguiled and our
                          the charms moment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="col-md-4">
              <div className="work_h2m position-relative">
                <div className="work_h2m1">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#">
                        <img
                          src="public/assets/img/alldesings/pexels-photo-2251247.jpeg"
                          className="w-100"
                          alt="Commercial"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="work_h2m2 position-absolute">
                  <div className="work_h2m2i row mx-0">
                    <div className="col-md-2 p-0">
                      <div className="work_h2m2il text-center bg-light">
                        <span className="col_red fs-2">
                          <i className="fa fa-building" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10 p-0">
                      <div className="work_h2m2ir bg-white p-4">
                        <h5>Commercial</h5>
                        <p className="mb-0">
                          Indignation and dislike men who are so beguiled and our
                          the charms moment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="col-md-4">
              <div className="work_h2m position-relative">
                <div className="work_h2m1">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <a href="#">
                        <img
                          src="public/assets/img/alldesings/17.jpeg"
                          className="w-100"
                          alt="Industries"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
                <div className="work_h2m2 position-absolute">
                  <div className="work_h2m2i row mx-0">
                    <div className="col-md-2 p-0">
                      <div className="work_h2m2il text-center bg-light">
                        <span className="col_red fs-2">
                          <i className="fa fa-industry" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10 p-0">
                      <div className="work_h2m2ir bg-white p-4">
                        <h5>Industries</h5>
                        <p className="mb-0">
                          Indignation and dislike men who are so beguiled and our
                          the charms moment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
