import Message from './Message'

function ChatWindow({messages, currentUser}){
    return (
        <div className="chat-window">
            {messages.map((msg, idx) => (
              <Message key={idx} message={msg} isOwn={msg.user === currentUser}/>
            ))}
        </div>
    )
}
export default ChatWindow
