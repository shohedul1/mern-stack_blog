import React from 'react'
import Navbar from './pages/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import WriteBlog from './pages/WriteBlog/WriteBlog';
import BlogPage from './pages/BlogPage/BlogPage';
import UpdateBlog from './pages/UpdateBlog/UpdateBlog';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/writeBlogs' element={<WriteBlog />} />
        <Route path='/blogpage/:id' element={<BlogPage />} />
        <Route path='/updatepage/:id' element={<UpdateBlog />} />
      </Routes>
    </>

  )
}

export default App