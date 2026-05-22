import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {cors: {origin: '*'}})

app.use(express.static('dist'))

io.on('connection', (socket) => {
    console.log('user connected: ', socket.id)
    socket.on('send-message', (msg) => {
        io.emit('receive-message', msg)
    })
    socket.on('disconnect', () => {
        console.log('user-disconnected: ', socket.id)
    })
})

httpServer.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})