import '../../assets/styles/Footer/Footer.css'

export default function Footer() {
  return (
    <footer className="news-footer" aria-label="Pied de page">
      <div className="news-footer-grid">
        <section>
          <h3 className="news-footer-title">Le Malagasy</h3>
          <p className="news-footer-text">
            Quotidien numerique consacre a l'actualite, aux analyses et aux grands dossiers.
          </p>
        </section>

        <section>
          <h3 className="news-footer-title">Rubriques</h3>
          <ul className="news-footer-list">
            <li>
              <a href="#">Actualites</a>
            </li>
            <li>
              <a href="#">Opinions</a>
            </li>
            <li>
              <a href="#">Economie</a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="news-footer-title">A propos</h3>
          <ul className="news-footer-list">
            <li>
              <a href="#">La redaction</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Mentions legales</a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="news-footer-title">Créateur</h3>
          <ul className="news-footer-list">
            <li>
              <a href="#">ETU003289 Sanda</a>
            </li>
            <li>
              <a href="#">ETU003658 Patrick</a>
            </li>
          </ul>
        </section>
      </div>

      <div className="news-footer-bottom">
        <small>© 2026 Le Malagasy. Tous droits reserves.</small>
      </div>
    </footer>
  )
}