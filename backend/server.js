const express = require('express')
const app = express()

app.listen(3002)

app.get('/', (req, res) => {
    res.status(500).send('Hi')
})
