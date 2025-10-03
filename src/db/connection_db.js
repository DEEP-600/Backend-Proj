import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connnectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("MongoDB connected", connectionInstance.connection.host);
        
    } catch (error) {
        console.log("Error while connecting to mongoDB", error);
        process.exit(1);
    }
}
export default connnectDB;