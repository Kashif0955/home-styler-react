import React from 'react';
import { useSelector } from 'react-redux';

const NavbarCartDetails = () => {
  // Access cartItems correctly from state.cart
  const cartItems = useSelector((state) => state.cart.cartItems); 

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center">
            <img src={item.imageSrc} alt={item.title} className="h-16 w-16" />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>    
        ))
      )}
    </div>
  );
};

export default NavbarCartDetails;
