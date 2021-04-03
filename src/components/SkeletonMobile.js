import './SkeletonMobile.scss'

function SkeletonMobile(props) {
  const { stepNum } = props
  let list = []
  // 可根據傳入 stepNum 變更步驟載入骨架個數
  for (let i = 0; i <= stepNum; i++) {
    list.push(
      <div className="row step-mobile">
        <div className="col-sm-12 col-lg-3 px-5">
          <div className="skeleton" style={{ width: '30%' }}></div>
          <div className="skeleton"></div>
          <div className="skeleton" style={{ width: '80%' }}></div>
        </div>
        <div className="col-sm-12 col-lg-9 mt-3 mt-lg-0 instructions-img-wrapper d-flex justify-content-center">
          <div
            className="skeleton skeleton-img"
            style={{ height: '65vh', width: '85%' }}
          ></div>
        </div>
      </div>
    )
  }
  return <>{list}</>
}

export default SkeletonMobile
