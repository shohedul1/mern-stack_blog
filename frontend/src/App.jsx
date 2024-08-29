import React from 'react'
import Navbar from './pages/Navbar/Navbar';
import { Route, Router, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import WriteBlogs from './pages/writeBlogs/writeBlogs';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/writeBlogs' element={<WriteBlogs />} />


      </Routes>
    </>

  )
}

export default App