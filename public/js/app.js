console.log('Client side JavaScript file is loaded.')

// fetch('http://puzzle.mead.io/puzzle', ).then((response) => {
//         response.json().then((data) => {
//             console.log(data)
//         })
//     })

// fetch('http://puzzle.mead.io/puzzle', )
//     .then(res => res.json())
//     .then(data => console.log(data))


// fetch('http://localhost:3000/weather?address=boston', ).then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
// console.log(weatherForm)
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'Enter your location to see your weather forecast.'
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log('clicked')

    const location = search.value
    // console.log(location)

    messageOne.textContent = 'Loading...'

    fetch(`http://localhost:3000/weather?address=${location}`, ).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
            // console.log(data.error)
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            // console.log(data.location)
            // console.log(data.forecast)
        }
    })
})
})
