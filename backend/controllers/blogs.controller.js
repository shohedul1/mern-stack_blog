import Blogs from "../models/blogs.js";

//post

export const postController = async (req, res) => {
    try {
        const { title, desc } = req.body;

        if (!title || !desc) {
            res.status(400).json({
                message: "Please all file is require"
            })
        }
        const newPost = new Blogs({
            title, desc
        });
        await newPost.save().then(() => res.status(200).json({
            message: "User create blog post okay",
            success: true
        }))
    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        })
    }
}


//GETALL DATA
export const getAll = async (req, res) => {
    try {
        const data = await Blogs.find();
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        })
    }
}
