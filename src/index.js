import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

connnectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("Mongodb atlas connected");
})
.catch((err)=>{
    console.log("Error while connecting to mongoDB", err);
})