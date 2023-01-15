import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Quote_2.module.css';

export default function Quote_2() {
  const history = useHistory();

  const data = {};

  return (
    <div className={`flex-col ${styles['page']}`}>
      <div className={`flex-row justify-between ${styles['section']}`}>
        <div className={`flex-row ${styles['space-x-15']}`}>
          <img
            className={`${styles['image']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178913655778338.png"
          />
          <div className={`flex-col justify-start ${styles['text-wrapper']}`}>
            <span className={`${styles['font_1']} ${styles['text']}`}>Gradual Community</span>
          </div>
        </div>
        <div className={`flex-row items-center ${styles['group']}`}>
          <div className={`flex-row items-center shrink-0 ${styles['section_2']} ${styles['space-x-6']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178913661545092.png"
            />
            <span className={`${styles['font_2']} ${styles['text_2']}`}>Search</span>
          </div>
          <img
            className={`shrink-0 ${styles['image_3']} ${styles['image_4']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178913658531751.png"
          />
          <span className={`${styles['font_2']} ${styles['text_3']}`}>UTC -05:00 Chicago</span>
          <img
            className={`shrink-0 ${styles['image_3']} ${styles['image_5']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178913628275810.png"
          />
          <img
            className={`shrink-0 ${styles['image_3']} ${styles['image_6']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178913637157076.png"
          />
          <img
            className={`shrink-0 ${styles['image_2']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178913647089119.png"
          />
        </div>
      </div>
      <div className={`flex-row items-end ${styles['group_2']}`}>
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
          <div className={`flex-col ${styles['group_14']} ${styles['space-y-30']}`}>
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
              <span className={`${styles['font_11']} ${styles['text_5']} ${styles['text_23']}`}>Contributors</span>
            </div>
          </div>
          <img
            className={`self-start ${styles['image_15']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/3b937b2d6d9474b59b5a502cbb47435e.png"
          />
        </div>
        <div className={`flex-col shrink-0 ${styles['section_3']}`}>
          <div className={`flex-row items-center ${styles['section_4']} ${styles['space-x-12']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178945152128967.png"
            />
            <span className={`${styles['font_3']} ${styles['text_4']}`}>Search</span>
          </div>
          <div className={`flex-row ${styles['section_7']}`}>
            <div className={`flex-row items-center shrink-0 self-center ${styles['space-x-4']}`}>
              <div className={`flex-col justify-start items-center relative ${styles['group_5']}`}>
                <img
                  className={`${styles['image']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178929948164884.png"
                />
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['pos']}`}>
                  <span className={`${styles['font_5']} ${styles['text_5']} ${styles['text_9']}`}>3</span>
                </div>
              </div>
              <div className={`flex-col items-start ${styles['space-y-12']}`}>
                <span className={`${styles['font_6']}`}>Announcements</span>
                <span className={`${styles['font_10']} ${styles['text_12']}`}>Jerry: [File] Design Guideline.pdf</span>
              </div>
            </div>
            <span className={`self-start ${styles['font_7']} ${styles['text_5']} ${styles['text_10']}`}>20:34</span>
          </div>
          <div className={`flex-row ${styles['section_8']} ${styles['space-x-90']}`}>
            <div className={`flex-row items-center shrink-0 self-center ${styles['space-x-4']}`}>
              <div className={`flex-col justify-start items-center relative ${styles['group_8']}`}>
                <img
                  className={`${styles['image']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178926791383194.png"
                />
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['pos_2']}`}>
                  <span className={`${styles['font_5']} ${styles['text_5']} ${styles['text_9']}`}>6</span>
                </div>
              </div>
              <div className={`flex-col items-start ${styles['space-y-8']}`}>
                <span className={`${styles['font_12']}`}>Share your story</span>
                <span className={`${styles['font_10']}`}>Allen: [Photo]</span>
              </div>
            </div>
            <span className={`self-start ${styles['font_7']} ${styles['text_5']} ${styles['text_13']}`}>20:34</span>
          </div>
          <div className={`flex-row ${styles['section_9']}`}>
            <div className={`flex-row items-center shrink-0 self-center ${styles['space-x-10']}`}>
              <img
                className={`${styles['image']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178927710276956.png"
              />
              <div className={`flex-col items-start ${styles['space-y-12']}`}>
                <span className={`${styles['font_6']}`}>General </span>
                <span className={`${styles['font_10']}`}>Tim: If you want to learn more ...</span>
              </div>
            </div>
            <span className={`self-start ${styles['font_7']} ${styles['text_5']} ${styles['text_16']}`}>20:34</span>
          </div>
          <div className={`flex-row items-center ${styles['section_9']} ${styles['space-x-10']}`}>
            <img
              className={`${styles['image']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178923644085406.png"
            />
            <div className={`flex-col ${styles['space-y-10']}`}>
              <div className={`flex-row items-center ${styles['space-x-94']}`}>
                <span className={`${styles['font_12']}`}>Courtney Henry</span>
                <span className={`${styles['font_7']} ${styles['text_5']}`}>20:34</span>
              </div>
              <span className={`${styles['font_10']}`}>So, what's your plan this weekend?</span>
            </div>
          </div>
          <div className={`flex-row items-center ${styles['section_10']} ${styles['space-x-10']}`}>
            <img
              className={`${styles['image']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178925349650847.png"
            />
            <div className={`flex-col ${styles['space-y-12']}`}>
              <div className={`flex-row items-baseline ${styles['space-x-118']}`}>
                <span className={`${styles['font_6']}`}>Albert Flores</span>
                <span className={`${styles['font_7']} ${styles['text_5']}`}>20:34</span>
              </div>
              <span className={`self-start ${styles['font_10']}`}>What's the progress on that task?</span>
            </div>
          </div>
          <div className={`flex-row ${styles['section_10']} ${styles['space-x-72']}`}>
            <div className={`flex-row items-center shrink-0 self-center ${styles['space-x-10']}`}>
              <img
                className={`${styles['image']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178926681164600.png"
              />
              <div className={`flex-col items-start ${styles['space-y-12']}`}>
                <span className={`${styles['font_6']}`}>Darlene Robertson</span>
                <span className={`${styles['font_10']}`}>Yeah! You're right.</span>
              </div>
            </div>
            <span className={`self-start ${styles['font_7']} ${styles['text_5']} ${styles['text_22']}`}>20:34</span>
          </div>
          <div className={`flex-row ${styles['section_10']} ${styles['space-x-80']}`}>
            <div className={`flex-row items-end shrink-0 self-center`}>
              <img
                className={`${styles['image']} ${styles['image_12']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178929321955006.png"
              />
              <div className={`flex-col items-center ${styles['group_15']} ${styles['space-y-8']}`}>
                <span className={`${styles['font_6']} ${styles['text_24']}`}>Design product</span>
                <span className={`${styles['font_3']} ${styles['text_26']}`}>Eric: Yeah I know</span>
              </div>
              <img
                className={`${styles['image_13']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178931527907755.png"
              />
            </div>
            <span className={`self-start ${styles['font_7']} ${styles['text_5']} ${styles['text_25']}`}>20:34</span>
          </div>
          <div className={`flex-row items-center ${styles['section_9']} ${styles['space-x-10']}`}>
            <img
              className={`${styles['image']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178929896123983.png"
            />
            <div className={`flex-col ${styles['space-y-12']}`}>
              <div className={`flex-row items-baseline ${styles['space-x-112']}`}>
                <span className={`${styles['font_6']}`}>Product team</span>
                <span className={`${styles['font_7']} ${styles['text_5']}`}>20:34</span>
              </div>
              <span className={`${styles['font_10']} ${styles['text_27']}`}>Grace: @Lynne have time to huddle?</span>
            </div>
          </div>
        </div>
        <div className={`flex-col flex-auto ${styles['section_5']} ${styles['space-y-210']}`}>
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
                    <span className={`${styles['font_9']} ${styles['text_5']} ${styles['text_17']}`}>Devon Lane</span>
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
                  <div className={`flex-row items-center ${styles['group_13']} ${styles['space-x-12']}`}>
                    <span className={`${styles['font_8']} ${styles['text_5']} ${styles['text_19']}`}>Jenny White</span>
                    <span className={`${styles['font_9']} ${styles['text_5']}`}>20:34</span>
                  </div>
                  <img
                    className={`${styles['image_11']}`}
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178936137534527.png"
                  />
                </div>
                <img
                  className={`self-start ${styles['image_8']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/16733178932146484587.png"
                />
              </div>
            </div>
            <div className={`flex-row items-center self-end ${styles['section_11']} ${styles['space-x-12']}`}>
              <div className={`shrink-0 ${styles['section_12']}`}></div>
              <span className={`${styles['font_9']} ${styles['text_21']}`}>
                Devon Lane: Check out Vanilla Forums (11/17 - 11/...
              </span>
            </div>
          </div>
          <div className={`flex-col ${styles['group_16']} ${styles['space-y-20']}`}>
            <div className={`flex-row items-center ${styles['group_17']} ${styles['space-x-10']}`}>
              <img
                className={`${styles['image_14']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/9e70c352d4bdf132678e46ea30c9743d.png"
              />
              <img
                className={`${styles['image_14']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/57c8a29c0de8483412dedbd1d28ff88d.png"
              />
              <img
                className={`${styles['image_14']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/63afaecd59eaafb1242c8d9972bd5d13.png"
              />
              <div className={`${styles['section_13']}`}></div>
              <img
                className={`${styles['image_14']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/079db12b17019229921e891d3c4f438d.png"
              />
              <img
                className={`${styles['image_14']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/a6cbc2eba091f27a45cff437e2bc8254.png"
              />
              <div className={`${styles['section_13']}`}></div>
              <img
                className={`${styles['image_14']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/9aeae83a8831427f529e200caed2753a.png"
              />
              <img
                className={`${styles['image_14']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/68251ae42195ed38651402fcdf76cb54.png"
              />
              <img
                className={`${styles['image_14']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63bccdc85a7e3f03104bfe58/63bccdf9c86a890011048e8a/bb1735786891ca48420252574e5bc25e.png"
              />
            </div>
            <span className={`self-start ${styles['text_28']}`}>| </span>
          </div>
        </div>
      </div>
    </div>
  );
}