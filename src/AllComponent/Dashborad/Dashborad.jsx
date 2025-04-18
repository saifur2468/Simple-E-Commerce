import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Group.png";
import { useOutletContext } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
  const [isopen, setIsopen] = useState(false);
  const openModal = () => setIsopen(true);
  const closeModal = () => setIsopen(false);

  const { cart, handleRemoveFromCart, wishlist, handleRemoveFromWishlist } = useOutletContext();
  const [showWishlist, setShowWishlist] = useState(false);
  const [sortType, setSortType] = useState(""); 

  
  const sortedWishlist = [...wishlist].sort((a, b) => {
    if (sortType === "title") {
      return a.product_title.localeCompare(b.product_title);
    } else if (sortType === "price") {
      return parseFloat(a.price) - parseFloat(b.price);
    }
    return 0;
  });

  return (
    <div>
      {/* Header Section */}
      <div className='bg-[#9538E2] w-[1300px] h-[244px] rounded-xl text-white p-6 text-center'>
        <h1 className='text-2xl font-serif'>Dashboard</h1>
        <p className='w-[796px] font-serif text-xl m-auto'>
          Explore the latest gadgets that will take your experience to the next level.
        </p>
        <div className='mt-4'>
          <button
            onClick={() => setShowWishlist(false)}
            className='w-[169px] h-[42px] rounded-xl bg-white text-[#9538E2] text-xl mr-2'>
            Cart
          </button>
          <button
            onClick={() => setShowWishlist(true)}
            className='w-[169px] h-[42px] rounded-xl border-2 text-xl'>
            Wishlist
          </button>
        </div>
      </div>

      {/* Cart Section */}
      {!showWishlist && (
        <div>
          <div className='flex justify-between mt-4'>
            <h1 className='text-2xl font-serif'>Cart</h1>
            <div className='flex gap-2'>
              <h1 className='text-2xl font-serif'>Total cost: 50000</h1>
              <button className='w-[196px] h-[52px] border-2 rounded-xl'>Sort by Price</button>
              <button onClick={openModal} className='w-[196px] h-[52px] border-2 rounded-xl bg-[#9538E2] text-white'>
                Purchase
              </button>
            </div>
          </div>

          {/* Modal */}
          {isopen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-xl shadow-xl w-[400px] text-center">
                <img className='m-auto' src={logo} alt="Success" />
                <h3 className="font-bold text-lg">Payment Successfully</h3>
                <p className="py-4">Thanks for purchasing.</p>
                <div className="mt-4 flex justify-center gap-4">
                  <button onClick={closeModal} className="w-[336px] h-[38px] px-4 py-2 bg-gray-300 rounded-lg">Close</button>
                </div>
              </div>
            </div>
          )}

          {/* Cart Items */}
          {cart.length === 0 ? (
            <p className='mt-4'>No Product in cart</p>
          ) : (
            <div className='grid grid-cols-1 gap-4'>
              {cart.map((product, index) => (
                <div key={index} className='w-[850px] h-[188px] rounded-xl border-2 mt-5 m-auto'>
                  <section className='flex justify-between items-center'>
                    <div className='flex gap-4'>
                      <img className='w-[200px] h-[124px] border-2 rounded-xl mt-5 ml-2' src={product.product_image} />
                      <div>
                        <h1 className='font-semibold text-xl'>{product.product_title}</h1>
                        <p className='text-xl'>{product.description}</p>
                        <h2 className='text-xl'>Price: {product.price}</h2>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className='mt-2 px-4 py-2 bg-red-500 mr-2 text-white rounded'
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Wishlist Section */}
      {showWishlist && (
        <div>
          <div className='flex justify-between mt-6 mb-4 items-center px-4'>
            <h2 className='text-2xl font-serif'>Wishlist Items</h2>
            <div className='flex gap-2'>
              <button
                onClick={() => setSortType("title")}
                className='px-4 py-2 border rounded-xl'>
                Sort by Title
              </button>
              <button
                onClick={() => setSortType("price")}
                className='px-4 py-2 border rounded-xl'>
                Sort by Price
              </button>
            </div>
          </div>

          {sortedWishlist.length === 0 ? (
            <p className='mt-4 text-center'>No Product in wishlist</p>
          ) : (
            sortedWishlist.map((item, index) => (
              <div key={index} className='w-[850px] border-2 p-4 rounded-xl mt-4 m-auto flex items-center justify-between gap-4'>
                <div className='flex gap-4 items-center'>
                  <img src={item.product_image} className='w-[100px] h-[100px] rounded-xl' />
                  <div>
                    <h3 className='text-xl font-serif'>{item.product_title}</h3>
                    <p className='text-md'>{item.description}</p>
                    <p className='text-md'>Price: {item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromWishlist(index)}
                  className='px-4 py-2 bg-red-500 text-white rounded'>
                  <MdDelete />
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;




















































