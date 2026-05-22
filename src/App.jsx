import { useSocket } from './hooks/useSocket'
import ChatWindow from './components/ChatWindow'
import Input from './components/Input'
import './App.css'

function App() {
  const {messages, isConnected, sendMessage} = useSocket()
  return (
    <div>
      <p>
        {/* <h2>User: </h2> */}
        Status: {isConnected ? 'Connected' : 'Disconnected'}
      </p>
      <ChatWindow messages={messages || []}/>
      <Input onSend={sendMessage}/>
    </div>
  )
}

export default App
