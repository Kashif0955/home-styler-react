import React from 'react';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';

const AllTeam = () => {
  return (
    <div className="container mx-auto px-6" style={{ backgroundColor: '#12151A', marginTop: "80px" }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Meet Our Team</h2>
        <p className="text-gray-600 mt-4">Our dedicated professionals who are experts in their fields</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Team Member 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div 
            className="h-[480px] bg-cover bg-center" 
            style={{ backgroundImage: 'url("./assets/team/team-1.jpg")' }} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h5 className="text-lg font-bold">Jonathan Mcdaniel</h5>
            <span className="text-yellow-400 block mb-2">Architect</span>
            <hr className="border-t border-gray-200 my-2" />
            <p className="text-sm">Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div 
            className="h-[480px] bg-cover bg-center" 
            style={{ backgroundImage: 'url("./assets/team/team-2.jpg")' }} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h5 className="text-lg font-bold">Sarah Johnson</h5>
            <span className="text-yellow-400 block mb-2">Designer</span>
            <hr className="border-t border-gray-200 my-2" />
            <p className="text-sm">Donec accumsan quam vitae sapien volutpat. Phasellus consequat sem eget diam varius elementum.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div 
            className="h-[480px] bg-cover bg-center" 
            style={{ backgroundImage: 'url("./assets/team/team-3.jpg")' }} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h5 className="text-lg font-bold">Michael Smith</h5>
            <span className="text-yellow-400 block mb-2">Engineer</span>
            <hr className="border-t border-gray-200 my-2" />
            <p className="text-sm">Curabitur dictum elit nec sapien faucibus, quis placerat ligula molestie.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div 
            className="h-[480px] bg-cover bg-center" 
            style={{ backgroundImage: 'url("./assets/team/team-2.jpg")' }} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h5 className="text-lg font-bold">Emily Davis</h5>
            <span className="text-yellow-400 block mb-2">Project Manager</span>
            <hr className="border-t border-gray-200 my-2" />
            <p className="text-sm">Sed sit amet arcu sed mi malesuada dapibus at quis nunc.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 5 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div 
            className="h-[480px] bg-cover bg-center" 
            style={{ backgroundImage: 'url("./assets/team/team-3.jpg")' }} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h5 className="text-lg font-bold">Daniel Brown</h5>
            <span className="text-yellow-400 block mb-2">Software Developer</span>
            <hr className="border-t border-gray-200 my-2" />
            <p className="text-sm">Phasellus luctus magna at volutpat faucibus. Praesent ullamcorper libero sit amet massa.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 6 */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <div 
            className="h-[480px] bg-cover bg-center" 
            style={{ backgroundImage: 'url("./assets/team/team-1.jpg")' }} 
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
            <h5 className="text-lg font-bold">Sophia Green</h5>
            <span className="text-yellow-400 block mb-2">Marketing Specialist</span>
            <hr className="border-t border-gray-200 my-2" />
            <p className="text-sm">Quisque non velit ut neque vulputate vulputate. Fusce eget nisi nunc.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <CiInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeam;
