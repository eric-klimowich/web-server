console.log('Client side JavaScript file is loaded.')

fetch('http://puzzle.mead.io/puzzle', ).then((response) => {
        response.json().then((data) => {
            console.log(data)
        })
    })

fetch('http://puzzle.mead.io/puzzle', )
    .then(res => res.json())
    .then(data => console.log(data))