import React, {useState, useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Mentions.module.css';
import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import {createUserRoute, listUsersRoute} from "../../routes";
import Contacts from "../../components/Contacts";
import ChatContainer from "../../components/ChatContainer";
import Welcome from "../../components/Welcome";

export default function Mentions() {
  const history = useHistory();
  const socket = useRef();

  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect( ()=>{
    const navigationTo = async () => {
      if (!localStorage.getItem('user-info'))
      {
        const { data } = await axios.post(createUserRoute);
        localStorage.setItem('user-info', JSON.stringify(data));
      }
      const user = await JSON.parse(localStorage.getItem('user-info'));
      setCurrentUser(user);
      setIsLoaded(true);
    }

    navigationTo();
  }, []);

  // useEffect(()=>{
  //   if(currentUser){
  //     socket.current = io(host);
  //     socket.current.emit("add-user", currentUser._id);
  //   }
  // },[currentUser]);

  useEffect( () => {
    const getCurrentUser = async()=>{
      if( currentUser)  {
        const data = await axios.get(`${listUsersRoute}?userId=${currentUser._id}`);
        setContacts(data.data);
      }
    }
    getCurrentUser();
  }, [currentUser]);

  const handleChatChange = (chat) =>{
    setCurrentChat(chat);
  }

  const data = {};

  return (
    <div className={`flex-col ${styles['page']}`}>
      <Banner></Banner>
      <div className={`flex-row items-end ${styles['group_2']}`}>
        <Sidebar></Sidebar>
        <div className={`flex-col shrink-0 ${styles['section_3']}`}>
          <div className={`flex-row items-center ${styles['section_4']} ${styles['space-x-12']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178945152128967.png"
            />
            <span className={`${styles['font_3']} ${styles['text_4']}`}>Search</span>
          </div>

          <Contacts contacts={contacts} currentUser={currentUser}  changeChat={handleChatChange}/>

        </div>
        { isLoaded &&
        currentChat === undefined ?
            <Welcome currentUser={currentUser}/> :
            <ChatContainer currentChat={currentChat} socket={socket} currentUser={currentUser} />
        }

      </div>
    </div>
  );
}