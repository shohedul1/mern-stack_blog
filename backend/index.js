import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./db/dbConnect.js";
import blogsRoute from "./routes/blogs.route.js";


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();


app.use("/api", blogsRoute);



app.get('/', (req, res) => {
    res.send("Server is ready")
});

const port = process.env.PORT || 5000;


app.listen(port,() => {
    dbConnect();
    console.log(`Server is running on port ${port} `)
})