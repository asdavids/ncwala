import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import useScrollReveal from './hooks/useScrollReveal'

// Pages
import Home from './pages/Home'
import History from './pages/History'
import NgoniPeople from './pages/NgoniPeople'
import Ceremony from './pages/Ceremony'
import Travel from './pages/Travel'
import Accommodation from './pages/Accommodation'
import Transport from './pages/Transport'
import Shop from './pages/Shop'
import News from './pages/News'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Directory from './pages/Directory'
import Contact from './pages/Contact'

function ArticleRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/blog/${slug}`} replace />
}

// Page transition wrapper
function PageWrapper({ children }) {
  const location = useLocation()
  const [display, setDisplay] = useState(children)
  const [transClass, setTransClass] = useState('page-enter-active')

  useScrollReveal()

  useEffect(() => {
    setTransClass('page-enter')
    const t = setTimeout(() => {
      setDisplay(children)
      setTransClass('page-enter-active')
    }, 50)
    return () => clearTimeout(t)
  }, [location.pathname])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={transClass} style={{ transition: 'opacity 400ms ease, transform 400ms ease' }}>
      {display}
    </div>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('ncwala_splash_shown')
    if (hasSeenSplash) setShowSplash(false)
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
      window.dataLayer = window.dataLayer || []
      function gtag() { window.dataLayer.push(arguments) }
      gtag('js', new Date())
      gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID)
    }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    sessionStorage.setItem('ncwala_splash_shown', 'true')
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <Navbar />
          <main className="flex-grow pt-16">
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/ngoni" element={<NgoniPeople />} />
                <Route path="/ceremony" element={<Ceremony />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/accommodation" element={<Accommodation />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/news" element={<News />} />
                <Route path="/blog/:slug" element={<Blog />} />
                <Route path="/articles/:slug" element={<ArticleRedirect />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/directory" element={<Directory />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PageWrapper>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}
