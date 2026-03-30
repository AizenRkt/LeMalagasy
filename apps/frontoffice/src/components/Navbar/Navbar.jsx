import '../../assets/styles/Navbar/Navbar.css'
import EnContinu from './EnContinu'

export default function Navbar() {
  const menuItems = ['International', 'Politique', 'Economie', 'Culture', 'Sports', 'Societe']

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
        <a href="#" className="news-navbar-brand" aria-label="Le Malagasy accueil">
          Le Malagasy
        </a>
        <button className="news-navbar-subscribe" type="button">
          S'abonner
        </button>
      </div>

      <nav className="news-navbar-menu" aria-label="Navigation principale">
        <a href="#" className="news-menu-link is-active">
          Actu
        </a>
        {menuItems.map((item) => (
          <a key={item} href="#" className="news-menu-link">
            {item}
          </a>
        ))}
      </nav>

      <EnContinu />

    </header>
  )
}