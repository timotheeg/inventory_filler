const express = require('express')
const app = express()
const port = 8000
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    res.sendFile('./public/index.html', options)
})

app.listen(port, () => {
    console.log(`serving simple app`)
})