import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import router from "./routes/routes.js";

dotenv.config(); //for environement variables

const app = express(); // express app

//database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json()); //to accept json data
app.use(morgan("tiny"));

//routes
app.get("/", (req, res) => {
    res.send("Welcome to My Youtube Backend!");
})
app.use("/api", router);

app.listen(8000, () => {
    console.log("Server Started at http://localhost:8000");
});