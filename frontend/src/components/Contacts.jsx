import React, { useState, useEffect } from 'react'
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import styles from "../pages/Mentions/Mentions.module.css";


export default function Contacts({ contacts, currentUser, changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);

    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(getAvatar(currentUser.username));
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);

    const getAvatar = (username) => {
        return username % 1 === 1 ? avatar1 : avatar2
    }

    const changeCurrentChat = (index, contact) => {
        debugger;
        setCurrentSelected(index);
        changeChat(contact);
    };
    return (
        <>
        {
            contacts.map((contact, index) => {
                return (
            <div key={index} className={`flex-row ${styles['section_7']}`} onClick={()=>changeCurrentChat(index,contact)}>>
                <div className={`flex-row items-center shrink-0 self-center ${styles['space-x-4']}`}>
                    <div className={`flex-col justify-start items-center relative ${styles['group_5']}`}>
                        <img
                            className={`${styles['image']}`}
                            src={`${getAvatar(contact.username)}`}
                        />
                        <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['pos']}`}>
                            <span className={`${styles['font_5']} ${styles['text_5']} ${styles['text_9']}`}>3</span>
                        </div>
                    </div>
                    <div className={`flex-col items-start ${styles['space-y-12']}`}>
                        <span className={`${styles['font_6']}`}>{contact.username}</span>
                        <span className={`${styles['font_10']} ${styles['text_12']}`}>Jerry: [File] Design Guideline.pdf</span>
                    </div>
                </div>
                <span className={`self-start ${styles['font_7']} ${styles['text_5']} ${styles['text_10']}`}>20:34</span>
            </div>
                )
            })
        }
        </>
    )
}