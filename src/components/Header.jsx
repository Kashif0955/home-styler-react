import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [headerColor, setHeaderColor] = useState('#12151A');
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHeaderColor('white');
        setShowScrollButton(true);
      } else {
        setHeaderColor('#12151A');
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full transition-all duration-300 z-50" style={{ backgroundColor: headerColor }}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="assets/img/logo/logo.png" alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Main-menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-blue-500 relative group">
            Home
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link to="/about" className="text-white hover:text-blue-500 relative group">
            About
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link to="/services" className="text-white hover:text-blue-500 relative group">
            Services
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link to="/gallery" className="text-white hover:text-blue-500 relative group">
            Gallery
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-500 relative group">
            Contact
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <MdShoppingCart className="text-2xl text-white" />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 grid place-items-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
