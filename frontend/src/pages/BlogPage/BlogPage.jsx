import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchBlogById } from '../../services';
import { ThreeDots } from 'react-loader-spinner';


const BlogPage = () => {
    const { id } = useParams(); // Extract the blog ID from the URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetchBlogById(id);
                setBlog(response.data); // Assuming your API returns the blog data inside a 'data' property
            } catch (error) {
                console.error("Failed to fetch blog post:", error);
            }
        };

        fetchBlogData();
    }, [id]);

    // console.log('blog',blog)

    return (
        <div className='mt-10 text-white w-full overflow-hidden '>
            {blog ? (
                <div className='w-[90%] mx-auto space-y-20'>
                    <div className='flex flex-row justify-between border-b border-yellow-800'>
                        <h1 className='text-3xl font-bold '>{blog.title}</h1>
                        <div className='flex items-center'>
                            <Link to={`/updatepage/${blog._id}`} className='px-3 py-2  bg-blue-500 hover:bg-blue-700 hover:text-black rounded-md text-xl font-semibold'>
                                Edit
                            </Link>
                        </div>
                    </div>
                    <p className='text-xl text-lime-200'>
                        {blog.desc}
                    </p>

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

export default BlogPage;
