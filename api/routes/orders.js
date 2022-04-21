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
        id: id,
        orderDetails: order
    })
})

router.post('/', (req, res, next) => {
    const order = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: "orders added",
        details: order
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