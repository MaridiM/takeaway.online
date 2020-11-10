const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'api', 'orders.json'))
})

router.post('/new-order', (req, res, next) => {
    console.log(req.body)
})

module.exports = router