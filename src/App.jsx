import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

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

// Redirect component for /articles/:slug to /blog/:slug
function ArticleRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/blog/${slug}`} replace />
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    // Check if splash screen has been shown before
    const hasSeenSplash = sessionStorage.getItem('ncwala_splash_shown')
    if (hasSeenSplash) {
      setShowSplash(false)
    }

    // Check for RTL language
    const language = localStorage.getItem('ncwala_language') || 'EN'
    setIsRTL(language === 'AR')

    // Initialize Google Analytics
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
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
        <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col">
          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
          <Navbar />
          <main className="flex-grow pt-20">
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
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}
