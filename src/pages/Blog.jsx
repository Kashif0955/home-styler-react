import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="home-blog-area section-padding30">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-70">
              <span>Our latest blog</span>
              <h2>Our recent news</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/blog/single_blog_1.png" alt="Blog 1" />
                </div>
                <ul>
                  <li className="black-bg">October 27, 2020</li>
                  <li>By Admin - 30 Likes - 4 Comments</li>
                </ul>
                <div className="blog-cap">
                  <h3>
                    <Link to="/blog-details">
                      16 Easy Ideas to Use Everyday Stuff in Kitchen.
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="more-btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="home-blog-single mb-30">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="public/assets/img/blog/single_blog_5.png" alt="Blog 2" />
                </div>
                <ul>
                  <li className="black-bg">October 27, 2020</li>
                  <li>By Admin - 30 Likes - 4 Comments</li>
                </ul>
                <div className="blog-cap">
                  <h3>
                    <Link to="/blog-details">
                      16 Easy Ideas to Use Everyday Stuff in Kitchen.
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="more-btn">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
