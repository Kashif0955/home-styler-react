import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
    return (
        <>
            <section className="pt-[120px] pb-[90px]">
                <div className="container mx-auto">
                    <div className="flex justify-between mb-8">
                        <div className="text-left">
                            <span className="text-lg text-gray-600">Our Team</span>
                            <h2 className="text-3xl font-bold">Meet our team</h2>
                        </div>
                        <div className="text-right">
                            <Link
                                to="/view-all" // Navigate to /view-all route
                                className="primary-btn normal-btn text-white bg-yellow-500 px-4 py-2 rounded-lg"
                            >
                                View All
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="relative h-[480px] bg-cover bg-center group" style={{ backgroundImage: 'url("./assets/team/team-1.jpg")' }}>
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left">
                                <h5 className="text-white font-bold text-lg">Jonathan Mcdaniel</h5>
                                <span className="text-yellow-500 block">Architect</span>
                                <hr className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white h-0.5 my-2" />
                                <p className="text-gray-400 text-sm">
                                    Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur.
                                </p>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="relative h-[480px] bg-cover bg-center group" style={{ backgroundImage: 'url("./assets/team/team-2.jpg")' }}>
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left">
                                <h5 className="text-white font-bold text-lg">Sarah Johnson</h5>
                                <span className="text-yellow-500 block">Designer</span>
                                <hr className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white h-0.5 my-2" />
                                <p className="text-gray-400 text-sm">
                                    Donec accumsan quam vitae sapien volutpat. Phasellus consequat sem eget diam varius elementum.
                                </p>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="relative h-[480px] bg-cover bg-center group" style={{ backgroundImage: 'url("./assets/team/team-3.jpg")' }}>
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-left">
                                <h5 className="text-white font-bold text-lg">Michael Smith</h5>
                                <span className="text-yellow-500 block">Engineer</span>
                                <hr className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white h-0.5 my-2" />
                                <p className="text-gray-400 text-sm">
                                    Curabitur dictum elit nec sapien faucibus, quis placerat ligula molestie.
                                </p>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-white hover:text-yellow-500 transition duration-300">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
