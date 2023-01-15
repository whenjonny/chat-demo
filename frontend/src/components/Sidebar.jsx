import React from 'react'
import styles from "../pages/Mentions/Mentions.module.css";

export default function Sidebar() {
  return (
      <div className={`flex-col shrink-0`}>
          <span className={`self-start ${styles['font_4']} ${styles['text_8']}`}>Engage</span>
          <div className={`flex-col ${styles['group_7']} ${styles['space-y-30']}`}>
              <div className={`flex-row items-center ${styles['space-x-16']}`}>
                  <img
                      className={`${styles['image_10']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/f0360ddaed42c5ea35917a7f049e5ba6.png"
                  />
                  <span className={`${styles['font_11']} ${styles['text_5']}`}>Forum</span>
              </div>
              <div className={`flex-row items-center ${styles['space-x-6']}`}>
                  <div className={`flex-col justify-start items-start relative ${styles['group_9']}`}>
                      <img
                          className={`${styles['image_10']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/942e8a12863d850524f21a8f6b49c9dc.png"
                      />
                      <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ${styles['pos_3']}`}>
                          <span className={`${styles['font_5']} ${styles['text_5']} ${styles['text_14']}`}>25</span>
                      </div>
                  </div>
                  <span className={`${styles['font_11']} ${styles['text_5']} ${styles['text_15']}`}>Chat</span>
              </div>
              <div className={`flex-row items-center ${styles['space-x-16']}`}>
                  <img
                      className={`${styles['image_10']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/f8863d9537ed49a0fc5647edcbc3095b.png"
                  />
                  <span className={`${styles['font_11']} ${styles['text_5']}`}>Matches</span>
              </div>
          </div>
          <span className={`self-start ${styles['font_4']} ${styles['text_20']}`}>People</span>
          <div className={`flex-col ${styles['group_13']} ${styles['space-y-30']}`}>
              <div className={`flex-row items-center ${styles['space-x-16']}`}>
                  <img
                      className={`${styles['image_10']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/0a3eb74e1b22972aa26957cad58cb68a.png"
                  />
                  <span className={`${styles['font_11']} ${styles['text_5']}`}>Members</span>
              </div>
              <div className={`flex-row items-center ${styles['space-x-16']}`}>
                  <img
                      className={`shrink-0 ${styles['image_10']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/ff67652dfc5c74bf9621d9c8a7b03cf2.png"
                  />
                  <span className={`${styles['font_11']} ${styles['text_5']} ${styles['text_22']}`}>Contributors</span>
              </div>
          </div>
          <img
              className={`self-start ${styles['image_15']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/cafe27d3b0eab931f179f103df839c14.png"
          />
      </div>
  )
};