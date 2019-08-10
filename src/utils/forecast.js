const request = require('request')


const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/d1e63bda71af2e89cefa84b08bd093a1/${latitude},${longitude}`
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast