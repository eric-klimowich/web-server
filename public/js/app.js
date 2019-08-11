console.log('Client side JavaScript file is loaded.')

// fetch('http://puzzle.mead.io/puzzle', ).then((response) => {
//         response.json().then((data) => {
//             console.log(data)
//         })
//     })

// fetch('http://puzzle.mead.io/puzzle', )
//     .then(res => res.json())
//     .then(data => console.log(data))


fetch('http://localhost:3000/weather?address=boston', ).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('clicked')
})

console.log(weatherForm)