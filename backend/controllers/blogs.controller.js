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
        const data = await Blogs.find().sort({ createdAt: -1 });
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        })
    }
};

//GET Recent Blog
export const getRecentBlogs = async (req, res) => {
    try {
        const data = await Blogs.find().sort({ createdAt: -1 }).limit(3);
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        })
    }
};

//GET Recent Blog
export const getBlogId = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Blogs.findById(id);
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        })
    }
};

//update By Id
export const updateBlogId = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc } = req.body;

        // Find the blog by id and update it
        const updatedBlog = await Blogs.findByIdAndUpdate(
            id,
            { title, desc },
            { new: true } // This returns the updated document
        );

        // Check if the blog was found and updated
        if (!updatedBlog) {
            return res.status(404).json({
                message: "Blog not found",
            });
        }

        res.status(200).json({
            data: updatedBlog,
        });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(400).json({
            message: "Some error has occurred",
        });
    }
};





