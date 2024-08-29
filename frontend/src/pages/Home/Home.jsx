import React from 'react'
import HomePage from '../../components/HomePage'

const Home = () => {
    return (
        <div className='px-2 text-white space-y-10'>
            <div className='flex items-center flex-col justify-center space-y-5 pt-20 md:min-h-screen'>
                <div className='bg-gradient-to-r  from-fuchsia-500 to-cyan-500 w-[100%] md:w-[90%] py-5 rounded-md items-center flex justify-center text-2xl md:text-5xl font-semibold '>
                    Read & Write Blogs With BLOGZZ
                </div>
                <h1 className='text-3xl md:text-4xl text-gray-600'>A Platform For Bloggers</h1>
            </div>
            <HomePage/>
        </div>

    )
}

export default Home