import { Outlet } from 'react-router-dom';
import Footer from './AllComponent/Footer/Footer';
import Nav from './AllComponent/Navbar/nav';
import './App.css';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // const handleAddToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  // const handleRemoveFromCart = (indexToRemove) => {
  //   const updatedCart = cart.filter((_, index) => index !== indexToRemove);
  //   setCart(updatedCart);
  // };
  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const handleRemoveFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const handleAddToWishlist = (product) => {
    setWishlist(prev => [...prev, product]);
  };

  return (
    <>
      <Nav />
      <Outlet context={{ cart, handleAddToCart, handleRemoveFromCart,wishlist,handleAddToWishlist }} />
      <Footer />
    </>
  );
}

export default App;






























