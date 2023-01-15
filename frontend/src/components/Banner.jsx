import React from 'react'
import styles from "../pages/Mentions/Mentions.module.css";

export default function Banner() {
  return (
    <div>
        <div className={`flex-row justify-between ${styles['section']}`}>
            <div className={`flex-row ${styles['space-x-15']}`}>
                <img
                    className={`${styles['image']}`}
                    src="logo.png"
                />
                <div className={`flex-col justify-start ${styles['text-wrapper']}`}>
                    <span className={`${styles['font_1']} ${styles['text']}`}>Gradual Community</span>
                </div>
            </div>
            <div className={`flex-row items-center ${styles['group']}`}>
                <div className={`flex-row items-center shrink-0 ${styles['section_2']} ${styles['space-x-6']}`}>
                    <img
                        className={`${styles['image_7']}`}
                        src="/search.png"
                    />
                    <span className={`${styles['font_2']} ${styles['text_2']}`}>Search</span>
                </div>
                <img
                    className={`shrink-0 ${styles['image_3']} ${styles['image_4']}`}
                    src="global.png"
                />
                <span className={`${styles['font_2']} ${styles['text_3']}`}>UTC -05:00 Chicago</span>
                <img
                    className={`shrink-0 ${styles['image_3']} ${styles['image_5']}`}
                    src="ring.png"
                />
                <img
                    className={`shrink-0 ${styles['image_3']} ${styles['image_6']}`}
                    src="question.png"
                />
                <img
                    className={`shrink-0 ${styles['image_2']}`}
                    src="avatar.png"
                />
            </div>
        </div>
    </div>
  )
}