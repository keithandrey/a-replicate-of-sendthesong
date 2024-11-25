const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()

const messageRouter = require('./router/sendMessage')

app.use(express.json())

app.use('/api/', messageRouter)

app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()

})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {

            console.log('hello')
        
        })
    })
    .catch((error) => {
        console.log(error)
    })
