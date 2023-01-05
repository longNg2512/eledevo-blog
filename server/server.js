import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import posts from './routers/posts.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/posts', posts)

dotenv.config()
const PORT = process.env.PORT
const URI = process.env.DB_URL

mongoose
    .set('strictQuery', true)
    .connect(URI)
    .then(() => {
        console.log('Connected to DB!')
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}!`)
        })
    })
    .catch(error => {
        console.log(error)
        console.log('Internal server error!')
    })
