import React from 'react'

const BlogDetails = () => {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                className="w-full h-auto rounded shadow-lg"
                src="../assets/img/gallery/productDetails/project-details.jpg"
                alt="Project Details"
              />
            </div>
            {/* Right Details Section */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h3 className="text-2xl font-semibold mb-6">Lavendar Ambient Interior</h3>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation.
              </p>
              <div className="flex space-x-12 mb-8">
                {/* Details Info */}
                <ul className="space-y-4 text-gray-600">
                  <li>Rating:</li>
                  <li>Client:</li>
                  <li>Website:</li>
                  <li>Completed:</li>
                </ul>
                {/* Description Info */}
                <ul className="space-y-4">
                  <li>
                    <div className="flex">
                      <span className="text-yellow-500 fa fa-star" />
                      <span className="text-yellow-500 fa fa-star" />
                      <span className="text-yellow-500 fa fa-star" />
                      <span className="text-yellow-500 fa fa-star" />
                      <span className="text-gray-300 fa fa-star" />
                    </div>
                  </li>
                  <li>Envato</li>
                  <li>Themeforest.net</li>
                  <li>17 Aug 1028</li>
                </ul>
              </div>
              {/* Social Links */}
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700">
                  <i className="fa fa-dribbble" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fa fa-behance" />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          {/* Project Description */}
          <div className="mt-16 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
              <br />
              <br />
              Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetails
