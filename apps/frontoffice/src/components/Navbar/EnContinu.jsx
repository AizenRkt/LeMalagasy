import { useRef, useEffect } from 'react'
import '../../assets/styles/Navbar/EnContinu.css'

const liveItems = [
  {
    id: 'l1',
    time: '06:23',
    label: 'Live en cours',
    title: 'Guerre au Moyen-Orient : les dernieres informations'
  },
  {
    id: 'l2',
    time: '06:00',
    title: 'Adrien Bilal est le laureat du Prix du meilleur jeune economiste 2026'
  },
  {
    id: 'l3',
    time: '05:45',
    title: "Un avion d'Air China decolle pour Pyongyang une premiere depuis 2020"
  },
  {
    id: 'l4',
    time: '05:35',
    label: 'Alerte',
    title:
      'Entre attaques racistes et alternances sous tension, les nouveaux elus installent un climat electrique'
  },
  {
    id: 'l5',
    time: '01:54',
    title: 'Serbie : le president Aleksandar Vucic proclame la victoire aux municipales'
  }
]

export default function EnContinu() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleWheel = (e) => {
      if (track.scrollWidth <= track.clientWidth) return

      e.preventDefault()
      track.scrollLeft += e.deltaY > 0 ? 80 : -80
    }

    track.addEventListener('wheel', handleWheel, { passive: false })
    return () => track.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section className="news-live-strip" aria-label="En continu">
      <div className="news-live-track" ref={trackRef}>
        {liveItems.map((item) => (
          <article key={item.id} className="news-live-item">
            <p className="news-live-meta">
              <span className="news-live-time">{item.time}</span>
              {item.label ? <span className="news-live-label">{item.label}</span> : null}
            </p>
            <h3 className="news-live-title">{item.title}</h3>
          </article>
        ))}

        <button type="button" className="news-live-more">
          Voir plus
        </button>
      </div>
    </section>
  )
}
