import './Step.scss'

function Step(props) {
  const { step, instructions, images } = props
  let img = []
  for (let i = 0; i < images.length; i++) {
    img.push(
      <img className="instructions-img" src={images[i]} alt={instructions} />
    )
  }
  return (
    //   可利用 props 傳入 step 來選取 class .step-變數 來更改樣式
    <div className={`row step step-${step}`}>
      <div className="col-sm-12 col-lg-3">
        <div className="step-title">
          <span>►</span>
          <div>
            <h5>步驟 {step}：</h5>
            <div className="instructions-text">{instructions}</div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-9 mt-3 mt-lg-0 instructions-img-wrapper">
        {img}
      </div>
    </div>
  )
}

export default Step
