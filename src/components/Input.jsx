import {useState} from 'react'

function Input({onSend, username}){
    const [text, setText] = useState('')

    function handleSend() {
        if(!text.trim()) return

        onSend({
            user: username,
            text: text,
            time: new Date().toLocaleTimeString()
        })

        setText('')
    }

    function handleKeyDown(e){
        if(e.key === 'Enter') handleSend()
    }

    return (
        <div className='input-bar'>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your message"
            />
            <button onClick={handleSend}>Send</button>
        </div>
    )
}

export default Input
