const express = require('express')
const path = require('path')

const router = express.Router()


router.get('/', (req, res) => {
    res.send('product')
})

router.post('/add-review', (req, res, next) => {
    console.log(`Add review ${req.body}`)
})
router.post('/add/:id', (req, res, next) => {
    console.log(`Add ${req.params.id}`)
    console.log(req.body)
})
router.post('/edit/:id', (req, res, next) => {
    console.log(`Edit ${req.params.id}`)
    console.log(req.body)
})
router.post('/delete/:id', (req, res, next) => {
    console.log(`Delete ${req.params.id}`)
})


module.exports = router