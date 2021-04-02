import { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import MainContentMobile from './components/MainContentMobile'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 414)
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 414)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <div className="app">
      <BackToTop />
      <Navbar />
      {isDesktop ? <MainContent /> : <MainContentMobile />}
      <Footer />
    </div>
  )
}

export default App
