const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "orders fetched"
    })
})

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    res.status(200).json({
        message: "orders fetched",
        id: id
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "orders added"
    })
})

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: "orders patched"
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "orders deleted"
    })
})

module.exports = router;