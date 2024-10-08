import React from 'react';

const BlogDetails = () => {
  return (
    <>
      {/* Blog Area */}
      <section className="blog_area single-post-area py-16 mt-5" style={{ backgroundColor: '#12151A' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">

            {/* Blog Content */}
            <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
              <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <img className="w-full h-64 object-cover" src="assets/img/blog/single_blog_1.png" alt="Blog cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-white mb-4 leading-relaxed">
                    Second divided from form fish beast made every of seas all gathered us saying he our
                  </h2>
                  <ul className="flex space-x-6 mb-6">
                    <li>
                      <a href="#" className="text-gray-400 flex items-center hover:text-blue-600 transition-colors">
                        <i className="fa fa-user mr-2" aria-hidden="true"></i> Travel, Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 flex items-center hover:text-blue-600 transition-colors">
                        <i className="fa fa-comments mr-2" aria-hidden="true"></i> 03 Comments
                      </a>
                    </li>
                  </ul>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower...
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower...
                  </p>
                  <div className="bg-gray-700 border-l-4 border-blue-500 p-4 mb-6 rounded-lg">
                    <p className="text-gray-300 leading-relaxed">
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower...
                    </p>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower...
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

                  {/* Previous Post */}
                  <div className="flex items-center mb-8 lg:mb-0 lg:w-1/2">
                    <div className="w-1/3">
                      <a href="#">
                        <img className="w-full h-32 object-cover rounded-lg" src="assets/img/post/preview.png" alt="Previous post" />
                      </a>
                    </div>
                    <div className="w-2/3 pl-4">
                      <p className="text-gray-400 mb-2">Prev Post</p>
                      <a href="#" className="text-white text-xl font-semibold hover:text-blue-600 transition-colors">
                        Space The Final Frontier
                      </a>
                    </div>
                    <div className="w-1/12 flex items-center justify-center">
                      <a href="#" className="text-blue-500 text-xl hover:text-blue-600 transition-colors" aria-label="Previous post">
                        <span className="lnr ti-arrow-left" aria-hidden="true"></span>
                      </a>
                    </div>
                  </div>

                  {/* Next Post */}
                  <div className="flex items-center lg:w-1/2 lg:justify-end">
                    <div className="w-2/3 pr-4">
                      <p className="text-gray-400 mb-2">Next Post</p>
                      <a href="#" className="text-white text-xl font-semibold hover:text-blue-600 transition-colors">
                        Telescopes 101
                      </a>
                    </div>
                    <div className="w-1/12 flex items-center justify-center">
                      <a href="#" className="text-blue-500 text-xl hover:text-blue-600 transition-colors" aria-label="Next post">
                        <span className="lnr ti-arrow-right" aria-hidden="true"></span>
                      </a>
                    </div>
                    <div className="w-1/3">
                      <a href="#">
                        <img className="w-full h-32 object-cover rounded-lg" src="assets/img/post/next.png" alt="Next post" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 shadow-lg rounded-lg p-6 mt-8">
                <div className="flex items-center mb-6">
                  <img className="w-16 h-16 rounded-full" src="assets/img/blog/author.png" alt="Author" />
                  <div className="ml-4">
                    <a href="#" className="text-white text-xl font-semibold hover:text-blue-600 transition-colors">
                      Harvard Milan
                    </a>
                    <p className="text-gray-400 leading-relaxed">
                      Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-gray-800 shadow-lg rounded-lg p-6">
                <h4 className="text-white text-xl font-semibold mb-4">05 Comments</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <img className="w-16 h-16 rounded-full" src="assets/img/comment/comment_1.png" alt="Commenter" />
                    <div className="flex-1">
                      <p className="text-gray-300 mb-2 leading-relaxed">
                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <p className="text-gray-500 text-sm">Admin | 27 March 2020</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img className="w-16 h-16 rounded-full" src="assets/img/comment/comment_2.png" alt="Commenter" />
                    <div className="flex-1">
                      <p className="text-gray-300 mb-2 leading-relaxed">
                        Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                      </p>
                      <p className="text-gray-500 text-sm">Admin | 27 March 2020</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-white text-xl font-semibold mb-4">Leave a Comment</h4>
                <form action="#" method="POST">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-gray-400 mb-2">Name *</label>
                      <input
                        className="form-input border-gray-600 bg-gray-700 text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-gray-400 mb-2">Email *</label>
                      <input
                        className="form-input border-gray-600 bg-gray-700 text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        className="form-checkbox text-blue-500"
                        type="checkbox"
                        id="checkme"
                      />
                      <label htmlFor="checkme" className="text-gray-400 ml-2">
                        I have read and agree to the terms
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-gray-400 mb-2">Message</label>
                      <textarea
                        className="form-textarea border-gray-600 bg-gray-700 text-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors">
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 px-4">
              <aside className="bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-white text-xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm a passionate web developer who loves creating interactive and dynamic web applications. 
                </p>
                <h2 className="text-white text-xl font-semibold mb-4">Categories</h2>
                <ul className="text-gray-300">
                  <li className="mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors">Lifestyle</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors">Travel</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors">Food</a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
