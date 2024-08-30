import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../services';
import { ThreeDots } from 'react-loader-spinner';


const Blogs = () => {
    const [blogPost, setBlogPost] = useState([]);

    useEffect(() => {
        const fetchUserpostData = async () => {
            try {
                const response = await fetchBlogs();
                console.log('Fetched data:', response);

                // Access the 'data' property from the fetched response
                setBlogPost(response.data);
            } catch (error) {
                console.error("Failed to fetch user posts:", error);
            }
        };

        fetchUserpostData();
    }, []);

    // console.log('blogPost', blogPost);

    return (
        <div className='w-[90%] mx-auto mt-16'>
            {blogPost.length > 0 ? (
                <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5'>
                    {blogPost.map((blog, index) => (
                        <Link key={index} to={`/blogpage/${blog._id}`} className='bg-gradient-to-r from-violet-200 to-pink-200 px-2 py-5 rounded-xl hover:shadow-[-3px_0px_23px_14px_rgba(85,133,195,0.52)]  hover:scale-105 transition-all duration-500'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-2xl text-blue-700 font-bold border-b-gray-400 border-b'>
                                    {blog.title.slice(0, 20)}....
                                </h1>
                                <p className='text-base font-semibold text-start'>
                                    {blog.desc.slice(0,200)}...
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center'>
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
            )}
        </div>
    );
};

export default Blogs;
