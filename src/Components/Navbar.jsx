import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex p-5 items-center'>
      <div className='flex items-center gap-6'>
        <GiHamburgerMenu className='text-2xl' />
        <FaYoutube className='text-4xl text-red-500' />
      </div>
      <p className='text-2xl font-bold ml-1'>YouTube</p>
    </div>
  );
};

export default Navbar;
