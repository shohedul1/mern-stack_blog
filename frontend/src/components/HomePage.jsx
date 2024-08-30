import React from 'react';

const HomePage = ({ recent }) => {
    return (
        <div className='w-[90%] mx-auto space-y-10'>
            <h1 className='text-center text-5xl font-bold'>Latest Blogs</h1>
            <div className='flex flex-col space-y-10'>
                {recent.length > 0 ? (
                    recent.map((blog, index) => (
                        <div key={index} className='space-y-5 border-b border-b-blue-500'>
                            <h1 className='text-4xl text-lime-600 font-bold'>
                                {blog.title}
                            </h1>
                            <p className='text-base font-semibold text-lime-100'>
                                {blog.desc}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-lg'>No recent blogs available.</p>
                )}
            </div>
        </div>
    );
}

export default HomePage;
