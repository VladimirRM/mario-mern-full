import { config } from "dotenv"

import path from 'path'

const __dirname = path.resolve()

config({path:`${__dirname}/config/.env`})



export const MONGO_URI =process.env.MONGO_URI

