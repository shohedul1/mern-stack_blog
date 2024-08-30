import { useState } from "react";
import { postBlog } from "../../services";
import { useNavigate } from "react-router-dom";
const Initialize = {
  title: "",
  desc: ""
}

const WriteBlog = () => {
  const [blog, setBlog] = useState(Initialize);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(blog)

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await postBlog(blog);

      navigate(`/`); // Use navigate instead of router.push

    } catch (error) {
      console.error("Error during profile update:", error);
    }
  };

  return (
    <div className='w-[90%] mx-auto'>
      <div className='text-red-500 min-h-screen bg-slate-200 md:p-10 px-2 space-y-10'>
        <h1 className='text-center font-bold text-3xl md:text-5xl'>
          New Blog Post
        </h1>
        <div className='flex items-center justify-center'>
          <div className='bg-black rounded-2xl w-full md:w-[50%] px-2 py-20'>
            <form onSubmit={handleEditSubmit}>
              <div className='flex items-center flex-col space-y-10'>
                <input
                  className='w-full p-2 rounded-md focus:outline-none'
                  type="text"
                  name='title'
                  value={blog.title}
                  required
                  onChange={handleChange}
                  placeholder='Enter your title'
                />
                <textarea
                  className='w-full p-2 rounded-md focus:outline-none'
                  type="text"
                  name='desc'
                  required
                  value={blog.desc}
                  onChange={handleChange}
                  placeholder='Enter your title'
                />

                <button type='submit' className='bg-green-500 px-4 py-2 text-white font-bold text-base rounded-full hover:bg-green-800 duration-300 transition-all'>
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
