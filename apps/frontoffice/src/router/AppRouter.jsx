import { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Article from '../pages/Article'
import Category from '../pages/Category'

function getHashRoute() {
  const hash = window.location.hash || '#home'
  if (hash === '#article') {
    return '#article'
  }

  if (hash === '#category') {
    return '#category'
  }

  return '#home'
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
      {route === '#article' ? <Article /> : null}
      {route === '#category' ? <Category /> : null}
      {route === '#home' ? <Home /> : null}
    </MainLayout>
  )
}