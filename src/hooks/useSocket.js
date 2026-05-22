import {useEffect, useState} from 'react'
import {io} from 'socket.io-client'

const socket = io('http://localhost:3000')

export function useSocket() {
    const [messages, setMessages] = useState([])
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true)
        })
        socket.on('disconnect', () => {
            setIsConnected(false)
        })
        socket.on('receive-message', (msg) => {
            setMessages((prev) => [...prev, msg])
        })

        return () => {
            socket.off('connect')
            socket.off('disconnect')
            socket.off('receive-message')
        }
    }, [])

    function sendMessage(msg) {
        socket.emit('send-message', msg)
    }

    return {messages, isConnected, sendMessage}
}