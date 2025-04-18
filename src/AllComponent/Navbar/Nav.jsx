import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import banner from "../../images/banner.jpg"
import { Link,useLocation } from 'react-router-dom';
const Nav = () => {
    const location = useLocation();
    return (
        <div>
           <header>
          <section className='flex justify-between mx-auto w-[1280px] h-[120]px'>
          <div>
                  <h1 className='text-xl font-serif'>Gadget Heaven</h1>
              </div>
              <ul className='flex gap-4 justify-center text-xl font-serif'>
                 <Link to="/">
                 <li>Home</li>
                 </Link>
                <Link to="/Chart">
                <li>Statistics</li>
                
                </Link>
                   <Link to="/Dashboard">
                   <li>Dashboard</li>
                   </Link>
                   
                   <Link to="/Sign">
                   <li> Sign Up</li>
                   
                   </Link>
                  </ul>
                  <div className=' flex gap-2 justify-center'>
                  <button className='w-[40px] h-[40px] rounded-2xl bg-white m-auto mt-2'><MdShoppingCart className='ml-3' /></button>
                  <button className='w-[40px] h-[40px] rounded-2xl bg-white mt-2'><CiHeart className='ml-3'/></button>

              </div>
          </section>
            </header>
            {location.pathname ==='/'&&(
                 <section className='w-[1340px] h-[494px] border-2 rounded-xl bg-[#9538E2]'>
                    <div>
                 <p className='w-[1120px] h-[144px] text-6xl m-auto text-white font-serif'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
                  <p className='w-[796px] h-[52px] text-white m-auto font-serif '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                  <button className='w-[268px] h-[56px] border-2 rounded-xl  text-xl bg-white text-[#9538E2] '>Shop Now </button>
                 </div>
                 </section>
               )}
          
       {location.pathname === '/' &&(
         <section className=' absolute -mt-52' >
         <main className='w-[1110px] h-[500px] border-2 rounded-xl ml-20 bg-[#FFFFFF]'>
         <img className=' rounded-xl w-[1050px] h-[463px] m-auto mt-4' src={banner}  />


         </main>
     </section>

       )}
           



        </div>
    );
};

export default Nav;








































