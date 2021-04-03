import { useState, useEffect } from 'react'
import StepMobile from './StepMobile'
import './MainContentMobile.scss'
import SkeletonMobile from './SkeletonMobile'

function MainContentMobile() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])
  return (
    <div className="main-content-mobile">
      <div className="container">
        <div className="main-title-mobile">
          <div className="rect-mobile"></div>
          多張保單地址/電話/E-mail變更
        </div>
        {isLoading ? (
          // 可傳入 stepNum 變更步驟載入骨架個數
          <SkeletonMobile stepNum={12} />
        ) : (
          <>
            {/* step 輸入步驟數字 亦可透過.step-{step} 選取class 來更改CSS樣式 */}
            {/* instructions 傳入步驟內容 */}
            {/* images 輸入圖片陣列 可多張 */}
            <StepMobile
              step={1}
              instructions={<p>由【手機e方便】，點選『保戶會員專區』登入。</p>}
              images={[
                '../../images/instructions/mobile/mobile01.png',
                '../../images/instructions/mobile/mobile02.png',
              ]}
            />
            <StepMobile
              step={2}
              instructions={
                <>
                  <p>點選『線上交易』</p>
                  <p>★保戶須先申請成為交易會員方可於網路辦理變更</p>
                </>
              }
              images={['../../images/instructions/mobile/mobile03.png']}
            />
            <StepMobile
              step={3}
              instructions={
                <p>點選後進入『多張保單地址/電話/E-mail變更』作業</p>
              }
              images={['../../images/instructions/mobile/mobile04.png']}
            />
            <StepMobile
              step={4}
              instructions={
                <>
                  <p>
                    確認顯示的行動電話及電子信箱是否為最新資料，若需修改請點選
                    <img
                      className="edit-btn mx-2"
                      src="../../images/edit_btn.svg"
                      alt=""
                    />
                    修改。
                  </p>
                </>
              }
              images={['../../images/instructions/mobile/mobile05.png']}
            />
            <StepMobile
              step={5}
              instructions={
                <>
                  <p>
                    請點選
                    <img
                      className="edit-btn mx-2"
                      src="../../images/edit_btn.svg"
                      alt=""
                    />
                    即可輸入欲變更之內容。
                  </p>
                </>
              }
              images={['../../images/instructions/mobile/mobile06.png']}
            />
            <StepMobile
              step={6}
              instructions={
                <div className="instructions-list">
                  <div className="list-item">
                    <div>1</div>
                    <p>確認變更內容是否正確</p>
                  </div>
                  <div className="list-item">
                    <div>2</div>
                    <p>
                      若欲放棄申請，可點選
                      <img
                        className="delete-btn ml-2"
                        src="../../images/delete_btn.svg"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className="list-item">
                    <div>3</div>
                    <p>
                      若欲修改該項變更輸入內容，可點選
                      <img
                        className="edit-btn ml-2"
                        src="../../images/edit_btn.svg"
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              }
              images={['../../images/instructions/mobile/mobile07.png']}
            />
            <StepMobile
              step={7}
              instructions={
                <>
                  <p>
                    請審閱重要提醒，確認無誤後請勾選 □
                    我已了解並同意後，點選確認進入下一步。
                  </p>
                </>
              }
              images={['../../images/instructions/mobile/mobile08.png']}
            />
            <StepMobile
              step={8}
              instructions={
                <p>
                  請確認本次辦理變更資料，是否傳送至其他保險公司申辦相同變更項目。
                </p>
              }
              images={['../../images/instructions/mobile/mobile09.png']}
            />
            <StepMobile
              step={9}
              instructions={
                <>
                  <p>
                    如同意傳送至其他保險公司，請選擇欲傳送之保險公司(可複選)。
                  </p>
                  <p>
                    ★僅提供有加入試辦之保險公司，請勾選有該公司保單之保險公司。
                  </p>
                </>
              }
              images={['../../images/instructions/mobile/mobile10.png']}
            />
            <StepMobile
              step={10}
              instructions={
                <p>
                  請審閱保全申請轉送暨個人資料告知事項，審閱完成後，請點選 □
                  本人已審閱蒐集、處理及利用個人資料告知事項，如取消傳送，請點選『不同意傳送』，可回至確認是否同意轉送頁重新選擇。
                </p>
              }
              images={['../../images/instructions/mobile/mobile11.png']}
            />
            <StepMobile
              step={11}
              instructions={
                <p>輸入動態密碼，未收到動態密碼，可點選重新發送動態密碼。</p>
              }
              images={['../../images/instructions/mobile/mobile12.png']}
            />
            <StepMobile
              step={12}
              instructions={
                <>
                  <p>委託受理完成</p>
                  <p>
                    可點選『列印內容』，產出加密之PDF檔，密碼為要保人身分證字號，第一個英文字母大寫。
                  </p>
                </>
              }
              images={['../../images/instructions/mobile/mobile13.png']}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default MainContentMobile
