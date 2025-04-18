import React from 'react';

import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
const data = [
    { name: 'i Phone', price: 120000, rating: 4.9 },
    { name: 'MacekBook', price: 95000, rating: 4.8 },
    {name:'HP Pavilion x360',price:7200,rating:4.4},
{ name: 'dell inpiron 15', price: 6500, rating: 4.2 },
 
{ name: 'Phone', price: 2800, rating: 4.4 },
  { name: 'Laptop', price: 1200, rating: 4.5 },
  { name: 'Smart Watch', price: 3500, rating: 4.1 },
  
  { name: 'dell inpiron', price: 6800, rating: 4.1 },
 
];

const Chart = () => {
  return (
  
    <div style={{ width: '1280px', height: 447,paddingBottom:90, }}>
      <div className='w-[1300px] h-[100px] rounded-xl bg-[#9538E2]'>
        <h1 className='text-center text-xl font-serif m-auto text-white'>Statistics</h1>
        <p  className='text-center w-[792px] h-[52px]  font-serif m-auto text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

      </div>
        <h1 className='text-left text-2xl font-serif '>Statistics</h1>
      <ResponsiveContainer>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

         
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />

       
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
