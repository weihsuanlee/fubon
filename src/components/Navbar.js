import './Navbar.scss'
function Navbar() {
  return (
    <header className="nav">
      <div className="container-sm nav-container">
        <div className="nav-logo">
          <img src="../../images/fb_logo.svg" alt="" />
        </div>
        <div className="back-to-homepage">
          <div className="home-icon">
            <img src="../../images/btn_home.svg" alt="" />
          </div>
          <span className="d-none d-sm-block">回首頁</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
