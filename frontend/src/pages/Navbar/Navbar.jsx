import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='py-5  bg-gradient-to-r from-teal-400 to-yellow-200'>
            <div className='flex justify-between w-5/6 mx-auto items-center'>
                <Link to={"/"} className="font-bold text-xl">BLOGZZ</Link>
                <div className='flex space-x-5 justify-center'>
                    <Link to={"/"} className='text-base font-normal text-gray-600 hover:text-gray-900'>Home</Link>
                    <Link to={"/blogs"} className='text-base font-normal text-gray-600 hover:text-gray-900'>Blogs</Link>
                    <Link to={"/writeBlogs"} className='text-base font-normal text-gray-600 hover:text-gray-900'>Write Blogs</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar