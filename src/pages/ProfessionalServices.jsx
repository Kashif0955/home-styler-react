import React from 'react';

export const ProfessionalServices = () => {
  return (
<>
<div className="bg-[#12151A] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="block text-yellow-500 text-lg font-medium mb-2">Our Professional Services</span>
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Best Interior Services</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* Card 1 */}
          <div className="lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8 ">
            <div className="bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col">
              <div className="flex-grow relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="./assets/img/service/pexels-fotios-photos-1090638.jpg"
                  alt="Lighting"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <h3 className="text-xl font-semibold text-yellow-500">Lighting</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-100 mb-2">Lighting</h4>
                <p className="text-gray-300 mb-2">Transforming spaces with elegant lighting solutions.</p>
                <p className="text-gray-400">We establish partnerships to ensure quality and innovation.</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
            <div className="bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col">
              <div className="flex-grow relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="./assets/img/service/pexels-fotoaibe-1571453.jpg"
                  alt="Interior Design"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <h3 className="text-xl font-semibold text-yellow-500">Interior Design</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-100 mb-2">Interior Design</h4>
                <p className="text-gray-300 mb-2">Creating stunning and functional living spaces.</p>
                <p className="text-gray-400">We collaborate with skilled professionals to deliver excellence.</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="lg:w-1/3 md:w-1/2 sm:w-full px-4 mb-8">
            <div className="bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col">
              <div className="flex-grow relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="./assets/img/service/pexels-fotoaibe-1571453.jpg"
                  alt="Office Decoration"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <h3 className="text-xl font-semibold text-yellow-500">Office Decoration</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-100 mb-2">Office Decoration</h4>
                <p className="text-gray-300 mb-2">Enhancing work environments for productivity and comfort.</p>
                <p className="text-gray-400">Partnering with trusted vendors to create inspiring spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>

  
  );
};

export default ProfessionalServices;
