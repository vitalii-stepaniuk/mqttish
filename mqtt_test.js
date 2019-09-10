var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost', {username: 'mosquitto_almost_fly', password: 'thatistrue'})

client.on('connect', function () {
    client.subscribe('woteva', function (err) {
        if (!err) {
            client.publish('woteva', 'This is yet another woteva')
        }
    })
})

client.on('message', function(topic, message) {
    console.log(message.toString())
    client.end()
})