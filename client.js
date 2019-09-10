const WebSocket = require('ws')
const url = 'ws://localhost:8082'
const connection = new WebSocket(url)

connection.onopen = () => {
    connection.send('Message for client')
}
connection.onerror = (error) => {
    console.log(`Websocket error: ${error}`)
}
connection.onmessage = (e) => {
    console.log(e.data)
}