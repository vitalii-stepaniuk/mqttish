const WebSocket = require('ws')
const url = 'ws://localhost:8082'
const connection = new WebSocket(url)
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost', {username: 'mosquitto_almost_fly', password: 'thatistrue'})

client.on('connect', function () {
    client.subscribe('hello/world', function (err) {
        if (!err) {
            client.publish('woteva', 'This is yet another woteva')
        }
    })
})

connection.onopen = () => {
    connection.send('Message for client')
}
connection.onerror = (error) => {
    console.log(`Websocket error: ${error}`)
}
connection.onmessage = (e) => {
    console.log(e.data)
}

client.on('message', function(topic, message) {
    connection.send(message.toString())
    console.log(message.toString())
})