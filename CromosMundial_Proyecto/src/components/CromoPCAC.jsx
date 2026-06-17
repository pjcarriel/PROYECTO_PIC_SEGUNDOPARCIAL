import '../styles/CromoPCAC.css'

export default function CromoPCAC({ cromo, mini = false, pegado, cantidad, onVerDetalle }) {
  function handleClick() {
    if (pegado && onVerDetalle) onVerDetalle(cromo)
  }

  return (
    <div
      className={`cromo-pcac ${pegado ? 'cromo-pcac--pegado' : 'cromo-pcac--vacio'} ${mini ? 'cromo-pcac--mini' : ''} ${pegado && onVerDetalle ? 'cromo-pcac--clickable' : ''}`}
      onClick={handleClick}
    >
      <div className="cromo-pcac__numero">#{cromo.numero}</div>

      <div className="cromo-pcac__imagen-wrap">
        {pegado ? (
          <img
            src={cromo.imagen}
            alt={cromo.nombre}
            className="cromo-pcac__imagen"
            loading="lazy"
            onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = cromo.fallback }}
          />
        ) : (
          <div className="cromo-pcac__sombra">
            <span className="cromo-pcac__interrogacion">?</span>
          </div>
        )}
        {pegado && <div className="cromo-pcac__brillo" />}
      </div>

      <div className="cromo-pcac__info">
        {pegado ? (
          <>
            <span className="cromo-pcac__nombre-jugador">{cromo.nombre}</span>
            <span className="cromo-pcac__posicion">{cromo.posicion}</span>
          </>
        ) : (
          <span className="cromo-pcac__nombre-jugador cromo-pcac__nombre-jugador--oculto">
            Cromo #{cromo.numero}
          </span>
        )}
      </div>
    </div>
  )
}
