function Message({message, isOwn}){
    return (
      <div className={`message ${isOwn ? 'own' : 'other'}`}>
            <span>{message.user}</span>
            <p>{message.text}</p>
            <small>{message.time}</small>
        </div>
    )
}

export default Message
