
import { useLoaderData, useParams,useOutletContext } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { useState } from 'react';

const Details = () => {
  const { product_id } = useParams(); 
  const data = useLoaderData(); 
  const { handleAddToCart,handleAddToWishlist } = useOutletContext();

  console.log("Looking for product_id:", product_id);

  const product = data.find(product => product.product_id === product_id);


 


  const { product_image,product_title, price,description,Specification,rating,availability } = product;

  return (
    <div>
       <div className='w-[1300px] h-[163px] rounded-xl bg-[#9538E2]'>
        <h1 className='text-center text-xl font-serif m-auto text-white'>Product Details</h1>
        <p  className='text-center w-[792px] h-[52px] mt-5 font-serif m-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>

      </div>
      <div className="w-[1280px] h-[567px] rounded-xl border-2 bg-slate-100  mt-10">
  <div className=" flex ">
    <img
      src={product_image}
      className="w-[424px] h-[503px] rounded-xl pt-2 py-2 pl-2" />
    <div>
      <h1 className="text-5xl font-serif text-left ml-4">{product_title}</h1>
      <h1 className='text-xl font-serif mr-60 text-left ml-4 mt-5'>availability: {availability}</h1>
      <h1 className='text-xl font-serif mr-60 text-left ml-4 mt-5'>Price:{price}</h1>
      <p className='text-center m-auto text-xl  font-serif ml-4 mt-5'>Description:{description}</p>
     
<div>
<div>
      <h3 className='text-xl font-serif text-left ml-4 mt-5'>Specification:</h3>
      <ul className='text-left ml-4 text-xl'>
        {Specification}
      </ul>
    </div>
  <p className='text-left ml-4 mt-5 text-xl font-serif'>Rating:{rating}</p>
 <div className='flex gap-5 '>
  <button className='w-[193px] h-[48px] rounded-2xl  flex items-center ml-2 mt-2  gap-2 bg-[#9538E2]' onClick={() => handleAddToCart({
 
  product_image: product.product_image, 
  product_title: product_title,
  price:price,
  description:description,
})}>
 <MdShoppingCart className='ml-3'/> Add to Cart
</button>

     <button onClick={()=>handleAddToWishlist({product_image,product_title,price})} className='w-[40px] h-[40px] rounded-2xl bg-white mt-2'><CiHeart className='ml-3'/></button>
 
</div>
</div>

    </div>
  </div>
</div>
    </div>
  );
};

export default Details;


















