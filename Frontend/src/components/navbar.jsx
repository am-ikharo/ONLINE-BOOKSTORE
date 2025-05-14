import React from 'react'
import { Link, Links } from 'react-router-dom'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
// import {avatarImg} from "../assets/avatar.png"


const Navbar = () => {
  const currentUser = true;

  return (
    <header className='max-w-screen-2x1 mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            {/* left side  */}
            <div className='flex items-center md:gap-16 gap-4'>
                <Link to='/'><HiBars3CenterLeft className='size-6'/></Link>

                {/* search input */}

                <div className='relative sm:w-72 w-40 space-x-2'>
                    {/* <IoSearchOutline className='absolute inline-block left-3 inset-y-2' /> */}
                    <input type="text" placeholder='search here' className='pl-40 bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
                </div>

            </div>

            {/* right side */}
            <div className='relative flex item-center md:space-x-3 space-x-2'>
              <div className={'size-7 rounded'}>
                {
                  currentUser ? <><img src='' alt="user icon" /></> : <Link to='/login'><FaRegUser className='size-6'/></Link>
                }
                
              </div>
              <button className='sm-block'>
                <FaRegHeart className='size-6' />
              </button>
              <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex item-center rounded-sm'>
                <BsCart3 className='' />
                <span className='text-sm font-semibold sm:ml-1'>0</span>
              </Link>
            </div>
        </nav>

    </header>
  )
}

export default Navbar