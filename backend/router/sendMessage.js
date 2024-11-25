const express = require('express')
const MessageModel = require('../models/MessageModel')
const mongoose = require('mongoose')

const router = express.Router()

router.get('/', async (req, res) => {

    const { recipient } = req.params

    const message = await MessageModel.find()

    res.status(200).json(message)

});

router.get('/:recipient', async (req, res) => {

    const { recipient } = req.params

    const message = await MessageModel.find({recipient: recipient})

    if (!message) {

        res.status(400).json("hello")

    } else {

        res.status(200).json(message)

    }


})

router.get('/id/:id', async (req, res) => {

    const { id } = req.params

    const message = await MessageModel.findById(id)

    if (!message) {

        res.status(400).json("hello")

    } else {

        res.status(200).json(message)

    }


});

router.post('/', async (req, res) => {

    const { title, body, recipient } = req.body

    try {

        const message = await MessageModel.create({title, body, recipient})
        res.status(200).json(message)
        console.log('hello')

    } catch (error) {

        res.status(400).json({error: error})
        console.log('helo')

    }

    console.log('POST message')
    

})

module.exports = router