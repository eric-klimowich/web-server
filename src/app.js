const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Eric Klimowich'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Eric Klimowich'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        address: 'New York',
        temperature: 50
    })
})

app.listen(3000, () => { // optional argument
    console.log('Server is up on port 3000.')
})


// app.get('', (req, res) => {
//     res.send('<h1>Hello express!</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send('Help is on the way!')
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>What it's all about!</h1>")
// })