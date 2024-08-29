import React from 'react'
import Navbar from './pages/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import WriteBlog from './pages/WriteBlog/WriteBlog';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/writeBlogs' element={<WriteBlog />} />


      </Routes>
    </>

  )
}

export default App