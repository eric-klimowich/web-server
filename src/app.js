const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup up static director to serve
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

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This page will allow you to find the help you need.',
        title: 'Help',
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