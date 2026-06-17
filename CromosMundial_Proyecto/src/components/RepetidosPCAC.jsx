import '../styles/RepetidosPCAC.css'

export default function RepetidosPCAC({ repetidos }) {
  if (repetidos.length === 0) return null

  return (
    <section className="repetidos-pcac">
      <div className="repetidos-pcac__cabecera">
        <span className="repetidos-pcac__icono">🔁</span>
        <div>
          <h2 className="repetidos-pcac__titulo">Cromos Repetidos</h2>
          <p className="repetidos-pcac__desc">Estos cromos ya los tienes pegados. ¡Puedes intercambiarlos!</p>
        </div>
        <span className="repetidos-pcac__badge">{repetidos.length}</span>
      </div>

      <div className="repetidos-pcac__grid">
        {repetidos.map(cromo => (
          <div key={cromo.id} className="repetidos-pcac__item">
            <div className="repetidos-pcac__cantidad">×{cromo.repetidos}</div>
            <img
              src={cromo.imagen}
              alt={cromo.nombre}
              className="repetidos-pcac__imagen"
              loading="lazy"
              onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = cromo.fallback }}
            />
            <div className="repetidos-pcac__info">
              <span className="repetidos-pcac__num">#{cromo.numero}</span>
              <span className="repetidos-pcac__nombre">{cromo.nombre}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
