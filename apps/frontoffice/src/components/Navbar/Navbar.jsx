import '../../assets/styles/Navbar/Navbar.css'
import EnContinu from './EnContinu'

export default function Navbar() {
  const menuItems = [
    { label: 'International', href: '#home' },
    { label: 'Politique', href: '#home' },
    { label: 'Economie', href: '#home' },
    { label: 'Culture', href: '#home' },
    { label: 'Sports', href: '#home' },
    { label: 'Societe', href: '#home' },
    { label: 'Categorie', href: '#category' },
    { label: 'Article', href: '#article' }
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
        <a href="#home" className="news-navbar-brand" aria-label="Le Malagasy accueil">
          Le Malagasy
        </a>
        <button className="news-navbar-subscribe" type="button">
          Soutenir
        </button>
      </div>

      <nav className="news-navbar-menu" aria-label="Navigation principale">
        <a href="#home" className="news-menu-link is-active">
          Actu
        </a>
        {menuItems.map((item) => (
          <a key={item.label} href={item.href} className="news-menu-link">
            {item.label}
          </a>
        ))}
      </nav>

      <EnContinu />

    </header>
  )
}