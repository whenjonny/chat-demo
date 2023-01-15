import React, { useState, useEffect , useRef} from 'react'
import ChatInput from './ChatInput';
import axios from "axios";
import { v4 as uuidv4} from "uuid";
import {getAllMessagesRoute, sendMessageRoute} from "../routes";
import styles from "../pages/Mentions/Mentions.module.css";

export default function ChatContainer({ currentChat, currentUser, socket }) {

  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {

    const fetchData = async () => {
      if(currentChat){
        const response = await axios.post(getAllMessagesRoute, {
          from: currentUser._id,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    }
    fetchData();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({
      fromSelf: true,
      message: msg,
    });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieved", (msg) => {
        setArrivalMessage({
          fromSelf: false,
          message: msg,
        });
      })
    }
  }, []);

  useEffect(()=>{
    arrivalMessage && setMessages((prev)=>[...prev,arrivalMessage]);
  },[arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
      <div className={`flex-col flex-auto ${styles['section_5']} ${styles['space-y-247']}`}>
        <div className={`flex-col`}>
          <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
            <span className={`${styles['text_5']} ${styles['text_6']}`}>Share your story</span>
            <div className={`flex-row items-center ${styles['section_6']} ${styles['space-x-10']}`}>
              <img
                  className={`shrink-0 ${styles['image_3']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178933823388947.png"
              />
              <span className={`${styles['font_1']} ${styles['text_7']}`}>4</span>
            </div>
          </div>
          <div className={`flex-col ${styles['group_4']} ${styles['space-y-30']}`}>
            <div className={`flex-row justify-end ${styles['space-x-8-reverse']}`}>
              <div className={`flex-col ${styles['group_6']} ${styles['space-y-6']}`}>
                <div className={`flex-row items-center ${styles['space-x-12']}`}>
                  <span className={`${styles['font_8']} ${styles['text_5']} ${styles['text_11']}`}>Jenny White</span>
                  <span className={`${styles['font_9']} ${styles['text_5']}`}>20:34</span>
                </div>
                <img
                    className={`${styles['image_9']}`}
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178935677958412.png"
                />
              </div>
              <img
                  className={`self-start ${styles['image_8']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178932146484587.png"
              />
            </div>
            <div className={`flex-row ${styles['space-x-10']}`}>
              <img
                  className={`self-start ${styles['image_10']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178932558103487.png"
              />
              <div className={`flex-col ${styles['group_10']}`}>
                <div className={`flex-row ${styles['group_11']} ${styles['space-x-10']}`}>
                  <span className={`${styles['font_5']} ${styles['text_5']} ${styles['text_17']}`}>Devon Lane</span>
                  <span className={`${styles['font_9']} ${styles['text_5']}`}>20:34</span>
                </div>
                <div className={`flex-col justify-start ${styles['text-wrapper_4']}`}>
                    <span className={`${styles['font_10']} ${styles['text_18']}`}>
                      Check out Vanilla Forums (11/17 - 11/18/20) for free.
                    </span>
                </div>
              </div>
            </div>
            <div className={`flex-row justify-end ${styles['space-x-8-reverse']}`}>
              <div className={`flex-col ${styles['group_12']} ${styles['space-y-6']}`}>
                <div className={`flex-row items-center ${styles['space-x-12']}`}>
                  <span className={`${styles['font_8']} ${styles['text_5']} ${styles['text_19']}`}>Jenny White</span>
                  <span className={`${styles['font_9']} ${styles['text_5']}`}>20:34</span>
                </div>
                <img
                    className={`${styles['image_11']}`}
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178975895972893.png"
                />
              </div>
              <img
                  className={`self-start ${styles['image_8']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178932146484587.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['space-y-8']}`}>
          <div className={`flex-col justify-start items-start ${styles['group_15']}`}>
            <div className={`flex-col justify-start ${styles['section_11']}`}>
              <div className={`flex-row items-center ${styles['section_12']} ${styles['space-x-10']}`}>
                <img
                    className={`${styles['image_14']}`}
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178974183245655.png"
                />
                <div className={`flex-col items-start ${styles['space-y-4']}`}>
                  <span className={`${styles['font_5']}`}>Darrell Steward</span>
                  <span className={`${styles['text_27']}`}>CTO@Apple</span>
                </div>
              </div>
            </div>
          </div>
          <span className={`self-start ${styles['text_28']}`}>@Darr|</span>
        </div>
      </div>
  )

  // return (
  //   <>
  //     {
  //       currentChat && (
  //         <div>
  //           <div className="chat-header">
  //             <div className="user-details">
  //               <div className="avatar">
  //                 <img
  //                   src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
  //                   alt="avatar" />
  //               </div>
  //               <div className="username">
  //                 <h3>{currentChat.username}</h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="chat-messages">
  //             {messages.map((message) => {
  //               return (
  //                 <div ref={scrollRef} key={uuidv4()}>
  //                   <div
  //                     className={`message ${message.fromSelf ?
  //                       "sended" :
  //                       "recieved"
  //                       }`}
  //                   >
  //                     <div className="content ">
  //                       <p>{message.message}</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //           <ChatInput handleSendMsg={handleSendMsg} />
  //         </div>
  //       )
  //     }
  //   </>
  // );
}
