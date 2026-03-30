import '../../assets/styles/Navbar/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import EnContinu from './EnContinu'

export default function Navbar() {
  const menuItems = [
    { label: 'International', to: '/' },
    { label: 'Politique', to: '/' },
    { label: 'Economie', to: '/categorie/economie' },
    { label: 'Culture', to: '/' },
    { label: 'Sports', to: '/' },
    { label: 'Societe', to: '/' },
    { label: 'Categorie', to: '/categorie/economie' },
    { label: 'Article', to: '/article/comment-les-communes-cotieres-reinventent-leur-avenir-economique' }
  ]

  return (
    <header className="news-navbar-wrapper">
      <div className="news-navbar-meta" aria-label="Informations edition">
        <span className="news-meta-item">Edition numérique</span>
        <span className="news-meta-divider" aria-hidden="true">
          |
        </span>
        <span className="news-meta-item">Mis à jour: 29 mars 2026</span>
      </div>

      <div className="news-navbar-brand-row">
        <Link to="/" className="news-navbar-brand" aria-label="Le Malagasy accueil">
          Le Malagasy
        </Link>
        <button className="news-navbar-subscribe" type="button">
          Soutenir
        </button>
      </div>

      <nav className="news-navbar-menu" aria-label="Navigation principale">
        <NavLink to="/" end className={({ isActive }) => `news-menu-link${isActive ? ' is-active' : ''}`}>
          Actu
        </NavLink>
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => `news-menu-link${isActive ? ' is-active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <EnContinu />

    </header>
  )
}