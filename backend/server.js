import  express  from "express";
import  cors from "cors";
import   "colors";
import   morgan from 'morgan'
import Post from "./models/post.js";
import './config/index.js'
import connectDB from "./config/db.js";
const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

connectDB().then(()=> app.listen(5000,()=> console.log()))
