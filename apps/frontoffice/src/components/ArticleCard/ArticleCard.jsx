import formatDate from '../../utils/formatDate'
import './ArticleCard.css'

export default function ArticleCard({ article, variant = 'standard' }) {
  const variantClass = `is-${variant}`

  const safeArticle = {
    category: article?.category ?? 'Actualites',
    title: article?.title ?? 'Titre article',
    excerpt: article?.excerpt ?? 'Resume article',
    author: article?.author ?? 'Redaction',
    publishedAt: article?.publishedAt ?? new Date().toISOString(),
    readingTime: article?.readingTime ?? '4 min',
    image: article?.image
  }

  return (
    <article className={`news-article-card ${variantClass}`}>
      <div className="news-article-card-meta">
        <span className="news-article-card-category">{safeArticle.category}</span>
        <span>{formatDate(safeArticle.publishedAt)}</span>
        <span>{safeArticle.readingTime} de lecture</span>
      </div>

      {variant === 'featured' && safeArticle.image ? (
        <figure className="news-article-card-featured-media">
          <img src={safeArticle.image} alt={safeArticle.title} loading="lazy" />
        </figure>
      ) : null}

      <h3 className="news-article-card-title">{safeArticle.title}</h3>
      <p className="news-article-card-excerpt">{safeArticle.excerpt}</p>

      <div className="news-article-card-footer">
        <span>Par {safeArticle.author}</span>
      </div>
    </article>
  )
}