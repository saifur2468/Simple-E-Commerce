import React from 'react';
import { FaGoogle } from "react-icons/fa6";
const Sign = () => {
    return (
        <div>
            <section className="w-[450px] h-[500px] border-2 rounded-xl bg-slate-100  mx-auto p-6  mt-10">
    <h1 className="text-3xl font-serif text-center mb-8">Sign Up</h1>
    <form className="space-y-6">
       
        <div>
            <label for="Email" className="block text-lg font-serif text-gray-700">Email:</label>
            <input type="email" id="Email" placeholder="Enter your Email" className="w-full p-3 border-2 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300" />
        </div>

     
        <div>
            <label for="password" className="block text-lg font-serif text-gray-700">Password:</label>
            <input type="password" id="password" placeholder="Enter your Password" className="w-full p-3 border-2 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300" />
        </div>

        <div>
            <button type="submit" className="w-full p-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300">Sign Up</button>
        </div>

        <div>
            <button className="flex justify-center items-center w-full h-12 rounded-xl bg-cyan-200 border-2 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                <FaGoogle className="mr-2" />
                Continue with Google
            </button>
        </div>
    </form>
</section>

        </div>
    );
};

export default Sign;