import { useAlbumPCAC } from '../context/AlbumContextPCAC'
import './CromoPCAC.css'

export default function CromoPCAC({ cromo, mini = false }) {
  const { tieneCromo, cantidadCromo } = useAlbumPCAC()
  const cantidad = cantidadCromo(cromo.id)
  const pegado = cantidad > 0

  return (
    <div className={`cromo-pcac ${pegado ? 'cromo-pcac--pegado' : 'cromo-pcac--vacio'} ${mini ? 'cromo-pcac--mini' : ''}`}>
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
