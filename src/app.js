const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help is on the way!')
})

app.get('/about', (req, res) => {
    res.send("What it's all about!")
})

app.get('/weather', (req, res) => {
    res.send("Better put your booties on because it's cold outside!")
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => { // optional argument
    console.log('Server is up on port 3000.')
})