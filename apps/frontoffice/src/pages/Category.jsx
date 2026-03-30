import { useState } from 'react'
import formatDate from '../utils/formatDate'
import './Category.css'

const categoryData = {
  name: 'Economie',
  tags: ['Croissance', 'Investissement', 'PME', 'Emploi local', 'Startup', 'Innovation', 'Fintech', 'Commerce', 'Secteur public', 'Développement durable']
}

const featuredArticles = [
  {
    id: 'c1',
    title: 'Les ports secondaires deviennent strategiques pour les exportateurs',
    image:
      'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=900&q=80',
    publishedAt: '2026-03-29T10:20:00'
  },
  {
    id: 'c2',
    title: 'Fintech: trois solutions locales simplifient le paiement des factures',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    publishedAt: '2026-03-29T08:40:00'
  },
  {
    id: 'c3',
    title: 'Agribusiness: le modele cooperatif attire de nouveaux profils',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
    publishedAt: '2026-03-28T18:15:00'
  }
]

const categoryArticles = [
  {
    id: 'c4',
    title: 'Industrie textile: les ateliers misent sur des series courtes plus rentables',
    excerpt:
      'Face a la volatilite des commandes, plusieurs entreprises adaptent leur production pour reduire les risques logistiques.',
    author: 'Rindra A.',
    publishedAt: '2026-03-28T16:10:00',
    readingTime: '6 min'
  },
  {
    id: 'c5',
    title: 'Petites banques: une offensive numerique pour capter les jeunes actifs',
    excerpt:
      'Applications simplifiees, frais plus lisibles et micro-credit rapide: les nouveaux usages accelerent la concurrence.',
    author: 'Mamy R.',
    publishedAt: '2026-03-28T14:25:00',
    readingTime: '5 min'
  },
  {
    id: 'c6',
    title: 'Tourisme d affaires: les villes secondaires veulent leur part du marche',
    excerpt:
      'Hotels, transport et services digitaux se coordonnent pour attirer les conferences regionales.',
    author: 'Nantenaina V.',
    publishedAt: '2026-03-27T19:40:00',
    readingTime: '4 min'
  },
  {
    id: 'c7',
    title: 'Energie et PME: comment lisser la facture sans freiner la croissance',
    excerpt:
      'Des contrats hybrides emergent pour stabiliser les couts et planifier l investissement sur plusieurs trimestres.',
    author: 'Tsiry F.',
    publishedAt: '2026-03-27T11:30:00',
    readingTime: '7 min'
  }
]

export default function Category() {
  const [showAllTags, setShowAllTags] = useState(false)
  const initialTagsCount = 4
  const visibleTags = showAllTags ? categoryData.tags : categoryData.tags.slice(0, initialTagsCount)
  const hasMoreTags = categoryData.tags.length > initialTagsCount

  return (
    <section className="news-category-page" aria-label="Page categorie">
      <header className="news-category-head">
        <p className="news-category-kicker">Categorie</p>
        <h1 className="news-category-title">{categoryData.name}</h1>

        <div className="news-category-tags-container">
          <ul className="news-category-tags" aria-label="Tags de categorie">
            {visibleTags.map((tag) => (
              <li key={tag} className="news-category-tag">
                #{tag}
              </li>
            ))}
          </ul>
          {hasMoreTags && (
            <button
              className="news-category-tags-toggle"
              onClick={() => setShowAllTags(!showAllTags)}
              aria-label={showAllTags ? 'Afficher moins de tags' : 'Afficher plus de tags'}
            >
              {showAllTags ? '− Voir moins' : '+ Voir plus'}
            </button>
          )}
        </div>
      </header>

      <section className="news-category-featured" aria-label="Articles phares">
        <h2>Articles phares</h2>
        <div className="news-category-featured-grid">
          {featuredArticles.map((article) => (
            <a key={article.id} href="#article" className="news-category-featured-card">
              <img src={article.image} alt={article.title} />
              <div className="news-category-featured-content">
                <p className="news-category-featured-meta">{formatDate(article.publishedAt)}</p>
                <h3>{article.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="news-category-list" aria-label="Liste d articles de la categorie">
        <h2>Tous les articles de la categorie</h2>
        <ul className="news-category-list-items">
          {categoryArticles.map((article) => (
            <li key={article.id} className="news-category-list-item">
              <a href="#article">
                <h4>{article.title}</h4>
                <p className="news-category-list-meta">
                  Par {article.author} • {formatDate(article.publishedAt)} • {article.readingTime} de lecture
                </p>
                <p className="news-category-list-excerpt">{article.excerpt}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}