const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    res.sendFile('./public/index.html', options)
})

app.listen(port, () => {
    console.log(`serving simple app`)
})