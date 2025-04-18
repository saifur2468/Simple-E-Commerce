import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
    const {product_id,product_image,product_title,price, } = product;

    return (
        <div>
            <div className=" w-[322px] h-[380px] rounded-xl bg-slate-100 m-auto ">
  <figure>
    <img className='w-[282px] h-[181px] rounded-xl m-auto pt-2 '
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
   
    <h1 className='text-xl font-serif mr-40'>Price:{price}</h1>
    
    <div className="card-actions justify-end">
      <Link to={`/product/${product_id}`}>
      <button className='w-[159px] h-[32px] border-2 rounded-xl bg-[#FFFFFF] text-xl text-[#9538E2] '>View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;
