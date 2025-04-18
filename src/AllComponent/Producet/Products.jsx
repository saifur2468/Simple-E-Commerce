import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch('./Product.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(prod => prod.category === selectedCategory);

  const categories = ["All", "Laptop", "Phone", "Smart Watch", "iPhone", "MacBook", "Accessories"];

  return (
    <div>
      <h1 className='text-center text-3xl font-serif mb-6 mt-96'>
        Explore Cutting-Edge Gadgets
      </h1>
      <main className='flex gap-10'>
        <div className='border-2 w-[240px] h-[450px] bg-slate-100 rounded-xl mt-10'>
          <div className='flex flex-col'>
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`w-[192px] h-[52px] border-2 rounded-xl m-auto mt-2 text-xl font-serif ${
                  selectedCategory === cat ? 'bg-[#9538E2] text-white' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-3 mt-10 gap-10'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(prod => (
              <Product key={prod.product_id} product={prod} />
            ))
          ) : (
            <h1 className="text-center text-3xl font-bold col-span-3 text-red-600">
              404 - No Product Found!
            </h1>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
