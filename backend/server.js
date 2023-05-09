import  express  from "express";
import  cors from "cors";
import   "colors";
import   morgan from 'morgan'
console.log( "1");

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))