import express from 'express';
import { getAll, getBlogId, getRecentBlogs, postController, updateBlogId } from '../controllers/blogs.controller.js';

const router = express.Router();


router.post("/post", postController);
router.get("/getAll", getAll);
router.get("/getRecentBlogs", getRecentBlogs);
router.get("/getBlog/:id", getBlogId);
router.put("/updateBlog/:id", updateBlogId);






export default router;