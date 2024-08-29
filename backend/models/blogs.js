import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(  // Use "Schema" instead of "schema"
    {
        title: {
            type: String,
            required: true  // Change "require" to "required"
        },
        desc: {
            type: String,
            required: true  // Change "require" to "required"
        }
    },
    { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogSchema);

export default Blogs;
