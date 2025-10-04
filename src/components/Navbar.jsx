import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import CartCountBadge from './CartCountBadge';

const Navbar = () => {
  return (
    <div className="container mx-auto py-[15px]  hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product"
          />
          <FaSearch
            className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            size={20}
          />
        </div>
        <div className="flex gap-4">
          <div className="icon_wrapper">
            <AiOutlineUser className='text-3xl' />
          </div>
          <div className="icon_wrapper relative">
            <FaCartShopping className='text-3xl' />
            <h1 className='bg-red-600 absolute -right-3 -top-1  w-[25px] h-[25px] rounded-full grid place-items-center text-white text-[14px]'>3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar