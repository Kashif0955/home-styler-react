import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { FaArrowUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [headerColor, setHeaderColor] = useState('#12151A');
  const [textColor, setTextColor] = useState('white');
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll handling for header color and scroll-up button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHeaderColor('white');
        setTextColor('black');
        setShowScrollButton(true);
      } else {
        setHeaderColor('#12151A');
        setTextColor('white');
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full transition-all duration-300 z-50"
        style={{ backgroundColor: headerColor }}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo/logo.png" alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* Main-menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={`relative group`} style={{ color: textColor }}>
              Home
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link to="/about" className={`relative group`} style={{ color: textColor }}>
              About
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link to="/services" className={`relative group`} style={{ color: textColor }}>
              Services
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link to="/gallery" className={`relative group`} style={{ color: textColor }}>
              Gallery
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link to="/contact" className={`relative group`} style={{ color: textColor }}>
              Contact
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <MdShoppingCart className="text-2xl" style={{ color: textColor }} />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 grid place-items-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default Header;
