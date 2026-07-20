import { useSocket } from './hooks/useSocket'
import { useState } from 'react'
import ChatWindow from './components/ChatWindow'
import Input from './components/Input'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const {messages, isConnected, sendMessage} = useSocket()
  const [username, setUsername] = useState('')
  const [hasJoined, setHasJoined] = useState(false)
  const [nameInput, setNameInput] = useState('')

  function handleJoin() {
    if (!nameInput.trim()) {
      return
    }
    setUsername(nameInput.trim())
    setHasJoined(true)
  }

  if (!hasJoined) {
    return (
      <div className='join-screen'>
        <h3>Your name</h3>
        <input
          value={nameInput}
          onChange={ (e) => setNameInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleJoin()} />
        <button onClick={handleJoin}>Enter Chat</button>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="chat-column">
        <p>Status: {isConnected ? 'Connected' : 'Disconnected (try running "node server.js" on your terminal)'}</p>
        <ChatWindow messages={messages || []} currentUser={username}/>
        <Input onSend={sendMessage} username={username}/>
      </div>
    </div>
  )
}

export default App
