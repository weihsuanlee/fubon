import './Skeleton.scss'
function Skeleton(props) {
  const { stepNum } = props
  let list = []
  // 可根據傳入 stepNum 變更步驟載入骨架個數
  for (let i = 0; i <= stepNum; i++) {
    list.push(
      <div className="row step">
        <div className="col-sm-12 col-lg-3">
          <div className="skeleton" style={{ width: '40%' }}></div>
          <div className="skeleton"></div>
          <div className="skeleton" style={{ width: '80%' }}></div>
        </div>
        <div className="col-sm-12 col-lg-9 mt-3 mt-lg-0 instructions-img-wrapper">
          <div
            className="skeleton skeleton-img"
            style={{ height: '30vw' }}
          ></div>
        </div>
      </div>
    )
  }
  return <>{list}</>
}

export default Skeleton
