import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DemoWebsite from './demo/DemoWebsite'
import './index.css'

function App() {
  const isDemoPage = window.location.pathname === '/demo'

  useEffect(() => {
    if (isDemoPage) return

    const revealItems = document.querySelectorAll(
      'section:not(:first-of-type) h2, section:not(:first-of-type) h3, section:not(:first-of-type) p, section:not(:first-of-type) li, section:not(:first-of-type) .button-link'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 }
    )

    revealItems.forEach((item, index) => {
      item.classList.add('scroll-reveal')
      item.style.transitionDelay = `${Math.min(index % 8, 5) * 55}ms`
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [isDemoPage])

  if (isDemoPage) {
    return <DemoWebsite />
  }

  return (
    <>
      <Header />
      <Hero />
      <div className="container-main h-px bg-border" />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App
