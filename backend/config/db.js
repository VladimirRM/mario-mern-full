import mongoose from "mongoose";
import { MONGO_URI } from "./index.js";

const connectDB = async ()=>{
    const connectToMOngoDB = await mongoose.connect(`${MONGO_URI}`,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUniFiedTopology:false
    })
    console.log(`Mongo db connected ${connectToMOngoDB.connection.host}`.bgCyan);
}

export default connectDB