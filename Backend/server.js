import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
const port = 5000;
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
app.listen(port, () => {
    console.log("Server is Running ");
})
