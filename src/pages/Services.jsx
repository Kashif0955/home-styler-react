import React from 'react';

// Tailwind CSS utility classes are used in the JSX directly
const Services = () => {
  return (
    <section className="service-area py-12 mb-5 bg-gray-900 text-white" id="service">
      <div className="container mx-auto">
        <div className="row justify-center">
          <div className="col-md-12 pb-12 text-center">
            <h1 className="text-3xl font-bold mb-5">What we offer to our clients</h1>
            <p className="text-lg">Who are in extremely love with eco friendly system..</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="single-service text-center border border-gray-300 rounded-lg p-6 bg-gray-800 transition duration-300 ease-in-out hover:bg-gray-900 hover:border-gray-800 hover:shadow-lg">
              <a href="#">
                <h4 className="text-xl mb-5">Interior Design</h4>
              </a>
              <p>
                Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has established itself as creating a solid product.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="single-service text-center border border-gray-300 rounded-lg p-6 bg-gray-800 transition duration-300 ease-in-out hover:bg-gray-900 hover:border-gray-800 hover:shadow-lg">
              <a href="#">
                <h4 className="text-xl mb-5">Architecture Design</h4>
              </a>
              <p>
                Computer users and programmers have become so accustomed to using Windows, even for the changing capabilities and the appearances of the graphical.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <div className="single-service text-center border border-gray-300 rounded-lg p-6 bg-gray-800 transition duration-300 ease-in-out hover:bg-gray-900 hover:border-gray-800 hover:shadow-lg">
              <a href="#">
                <h4 className="text-xl mb-5">Concept Design</h4>
              </a>
              <p>
                Can you imagine what we will be downloading in another twenty years? I mean who would have ever thought that you could record sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
