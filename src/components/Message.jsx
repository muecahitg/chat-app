function Message({message}){
    return (
        <div className="message">
            <span>{message.user}</span>
            <p>{message.text}</p>
            <small>{message.time}</small>
        </div>
    )
}

export default Message