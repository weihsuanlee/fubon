import './StepMobile.scss'

function StepMobile(props) {
  const { step, instructions, images } = props
  let img = []
  for (let i = 0; i < images.length; i++) {
    img.push(
      <img className="instructions-img" src={images[i]} alt={instructions} />
    )
  }
  return (
    <div className={`row step-mobile step-mobile-${step}`}>
      <div className="col-12">
        <div className="step-title">
          <span>►</span>
          <div>
            <h5>步驟 {step}：</h5>
            <div className="instructions-text">{instructions}</div>
          </div>
        </div>
      </div>
      <div className="col-12 instructions-img-wrapper">{img}</div>
    </div>
  )
}

export default StepMobile
