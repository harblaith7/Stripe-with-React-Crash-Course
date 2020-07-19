const express = require('express')


const app = express()


app.get('/', (req, res) => {
    res.send("Hello I am working")
})

app.listen(5000, () => {
    console.log("Now listening on PORT 5000")
})