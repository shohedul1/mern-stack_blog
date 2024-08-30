import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlogById, updateBlogById } from '../../services';
import { ThreeDots } from 'react-loader-spinner';


const UpdateBlog = () => {
    const { id } = useParams(); // Extract the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateBlogById(id, blog);
            navigate(`/blogpage/${id}`); // Use navigate instead of router.push

        } catch (error) {
            console.error("Error during profile update:", error);
        }
    };

    return (
        <div className='w-[90%] mx-auto'>
            <div className='text-red-500 min-h-screen bg-lime-200 md:p-10 px-2 space-y-10'>
                <h1 className='text-center font-bold text-3xl md:text-5xl'>
                    Update Blog Post
                </h1>
                <div className='flex items-center justify-center'>
                    <div className='bg-black rounded-2xl w-full md:w-[50%] px-2 py-20'>
                        {blog ? (
                            <form onSubmit={handleEditSubmit}>
                                <div className='flex items-center flex-col space-y-10'>
                                    <textarea
                                        className='w-full p-2 rounded-md focus:outline-none'
                                        type="text"
                                        name='title'
                                        value={blog.title}
                                        onChange={handleChange}
                                        placeholder='Enter your title'
                                    />
                                    <textarea
                                        className='w-full p-2 rounded-md focus:outline-none'
                                        type="text"
                                        name='desc'
                                        value={blog.desc}
                                        onChange={handleChange}
                                        placeholder='Enter your title'
                                    />

                                    <button type='submit' className='bg-green-500 px-4 py-2 text-white font-bold text-base rounded-full hover:bg-green-800 duration-300 transition-all'>
                                        Update
                                    </button>
                                </div>
                            </form>


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
                            </div> // Or any loading spinner/message
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;
