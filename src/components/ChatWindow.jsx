import Message from './Message'

function ChatWindow({messages}){
    return (
        <div className="chat-window">
            {messages.map((msg, idx) => (
                <Message key={idx} message={msg}/>
            ))}
        </div>
    )
}

export default ChatWindow