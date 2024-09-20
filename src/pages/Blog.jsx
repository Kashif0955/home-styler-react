import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="home-blog-area section-padding30" style={{ backgroundColor: '#12151A', padding: '30px 0' }}>
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center mb-70">
              <span className="text-gray-400">Our latest blog</span>
              <h2 className="text-white">Our recent news</h2>
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
                <ul className="bg-gray-800 p-2 rounded-lg">
                  <li className="black-bg">October 27, 2020</li>
                  <li className="text-gray-400">By Admin - 30 Likes - 4 Comments</li>
                </ul>
                <div className="blog-cap">
                  <h3 className="text-white">
                    <Link to="/blog-details" className="hover:text-blue-400">
                      16 Easy Ideas to Use Everyday Stuff in Kitchen.
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="more-btn text-blue-500 hover:text-blue-400">
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
                  <img src="assets/img/blog/single_blog_5.png" alt="Blog 2" />
                </div>
                <ul className="bg-gray-800 p-2 rounded-lg">
                  <li className="black-bg">October 27, 2020</li>
                  <li className="text-gray-400">By Admin - 30 Likes - 4 Comments</li>
                </ul>
                <div className="blog-cap">
                  <h3 className="text-white">
                    <Link to="/blog-details" className="hover:text-blue-400">
                      16 Easy Ideas to Use Everyday Stuff in Kitchen.
                    </Link>
                  </h3>
                  <Link to="/blog-details" className="more-btn text-blue-500 hover:text-blue-400">
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
