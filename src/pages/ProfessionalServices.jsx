import React from 'react';

export const ProfessionalServices = () => {
  return (
    <div className="bg-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="block text-yellow-500 text-lg font-medium mb-2">Our Professional Services</span>
          <h2 className="text-3xl font-bold text-gray-800">Best Interior Services</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-48 object-cover"
                  src="./assets/img/service/pexels-fotios-photos-1090638.jpg"
                  alt="Lighting"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="services.html" className="text-gray-800 hover:text-yellow-500">Lighting</a>
                </h3>
                <p className="text-gray-600 mb-2">For each project we establish</p>
                <p className="text-gray-600">For each project we establish relationships with partners who we know will help us.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-48 object-cover"
                  src="./assets/img/service/pexels-fotoaibe-1571453.jpg"
                  alt="Interior Design"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="services.html" className="text-gray-800 hover:text-yellow-500">Interior Design</a>
                </h3>
                <p className="text-gray-600 mb-2">For each project we establish</p>
                <p className="text-gray-600">For each project we establish relationships with partners who we know will help us.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-48 object-cover"
                  src="./assets/img/service/pexels-fotoaibe-1571453.jpg"
                  alt="Office Decoration"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <a href="services.html" className="text-gray-800 hover:text-yellow-500">Office Decoration</a>
                </h3>
                <p className="text-gray-600 mb-2">For each project we establish</p>
                <p className="text-gray-600">For each project we establish relationships with partners who we know will help us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServices;
