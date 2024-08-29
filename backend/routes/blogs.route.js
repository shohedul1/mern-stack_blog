import express from 'express';
import { getAll, postController } from '../controllers/blogs.controller.js';

const router = express.Router();

//POSRT 
router.post("/post", postController);
router.get("/getall", getAll)


export default router;