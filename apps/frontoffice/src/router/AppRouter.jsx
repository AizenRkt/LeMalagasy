import { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Article from '../pages/Article'

function getHashRoute() {
  const hash = window.location.hash || '#home'
  return hash === '#article' ? '#article' : '#home'
}

export default function AppRouter() {
  const [route, setRoute] = useState(getHashRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getHashRoute())

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <MainLayout>
      {route === '#article' ? <Article /> : <Home />}
    </MainLayout>
  )
}