import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path as necessary

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  // Show/hide scroll-up button based on scroll position
  useEffect(() => {
    const backTopButton = document.getElementById('back-top');

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backTopButton.classList.add('opacity-100');
      } else {
        backTopButton.classList.remove('opacity-100');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full ${theme === 'dark' ? 'bg-[#111827] text-white' : 'bg-white text-black'} shadow-md z-50`}>
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo/logo.png" alt="Logo" className="h-8" />
            </Link>
          </div>
          {/* Main-menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={`hover:text-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Home</Link>
            <Link to="/about" className={`hover:text-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>About</Link>
            <Link to="/services" className={`hover:text-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Services</Link>
            <Link to="/gallery" className={`hover:text-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Gallery</Link>
            <div className="relative group">
              <Link to="/blog" className={`hover:text-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Blog</Link>
              <ul className={`absolute left-0 hidden mt-2 ${theme === 'dark' ? 'bg-[#111827] text-white' : 'bg-white text-black'} shadow-lg group-hover:block`}>
                <li><Link to="/blog" className="block px-4 py-2 hover:bg-gray-200">Blog</Link></li>
                <li><Link to="/blog-details" className="block px-4 py-2 hover:bg-gray-200">Blog Details</Link></li>
              </ul>
            </div>
            <Link to="/contact" className={`hover:text-blue-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contact</Link>
          </nav>
          {/* Header-btn */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Contact Us
            </Link>
            <button onClick={toggleTheme} className={`py-2 px-4 rounded ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-75`}>
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <div className="mobile_menu" />
          </div>
        </div>
      </header>

      {/* Scroll Up Button */}
      <div id="back-top" className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-md opacity-0 transition-opacity duration-300 cursor-pointer" onClick={scrollToTop}>
        <a title="Go to Top"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  );
};

export default Header;
