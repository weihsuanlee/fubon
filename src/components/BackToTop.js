import './BackToTop.scss'
import { useState, useEffect } from 'react'

function BackToTop() {
  const [show, setShow] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShow(true)
      } else setShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <div
      className={`back-to-top ${!show && 'd-none'}`}
      onClick={() => {
        scrollToTop()
      }}
    >
      <img src="../../images/next.svg" alt="" />
    </div>
  )
}

export default BackToTop
