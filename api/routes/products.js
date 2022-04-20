const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "products fetched"
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: "products fetched",
        id: id
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "product added"
    })
})

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: "product patched"
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "product deleted"
    })
})

module.exports = router;