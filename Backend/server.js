import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Hello from Nether")
})
app.post("/something", (req, res) => {
    console.log(req.body);
    res.json({ message: "Data received", data: req.body });
})
mongoose.connect(process.env.MONGO_URI,{
    useNewURLParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("MongoDB connected"))
.catch(err => console.log("MongoDB Connection error",err))
app.listen(port, () => {
    console.log("Server is Running ");
})
