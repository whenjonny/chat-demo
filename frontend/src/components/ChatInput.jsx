import React,{useState} from 'react'
// import Picker from 'emoji-picker-react'
// import {BsEmojiSmileFill} from 'react-icons/bs'

export default function ChatInput({handleSendMsg}) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiPickerHideShow = ()=>{
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (e,emoji)=>{
        let message= msg;
        message += emoji.emoji;
        setMsg(message);
    }

    const sendChat = (e)=>{
        e.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('');
        }
    }
  return (
    <div>
        <div className="button-container">
            <div className="emoji" >
            </div>
        </div>
        <form className='input-container' onSubmit={(e)=>sendChat(e)}>
            <input type="text" placeholder='Type your message here!' value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            <button className="submit">
            </button>
        </form>
    </div>
  )
}

