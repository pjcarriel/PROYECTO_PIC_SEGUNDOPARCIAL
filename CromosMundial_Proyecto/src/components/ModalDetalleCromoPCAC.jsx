import { useEffect } from 'react'
import './ModalDetalleCromoPCAC.css'

const POSICION_ICONO = {
  'Portero':         '🧤',
  'Defensa':         '🛡️',
  'Defensa Central': '🛡️',
  'Lateral':         '🔄',
  'Lateral Derecho': '🔄',
  'Mediocampista':   '⚙️',
  'Pivote':          '⚙️',
  'Extremo':         '⚡',
  'Delantero':       '⚽',
}

export default function ModalDetalleCromoPCAC({ cromo, pais, onCerrar }) {
  useEffect(() => {
    const cerrarEsc = (e) => { if (e.key === 'Escape') onCerrar() }
    document.addEventListener('keydown', cerrarEsc)
    return () => document.removeEventListener('keydown', cerrarEsc)
  }, [onCerrar])

  const icono = POSICION_ICONO[cromo.posicion] ?? '⚽'

  return (
    <div className="modal-detalle-pcac__overlay" onClick={onCerrar}>
      <div
        className="modal-detalle-pcac__tarjeta"
        style={{ '--color-pais': pais.color }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-detalle-pcac__cerrar" onClick={onCerrar} title="Cerrar">✕</button>

        <div className="modal-detalle-pcac__cabecera" style={{ background: pais.gradiente }}>
          <span className="modal-detalle-pcac__numero">#{cromo.numero}</span>
          <div className="modal-detalle-pcac__imagen-wrap">
            <img
              src={cromo.imagen}
              alt={cromo.nombre}
              className="modal-detalle-pcac__imagen"
              onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = cromo.fallback }}
            />
            <div className="modal-detalle-pcac__brillo" />
          </div>
        </div>

        <div className="modal-detalle-pcac__cuerpo">
          <div className="modal-detalle-pcac__pais">
            <span className="modal-detalle-pcac__bandera">{pais.bandera}</span>
            <span className="modal-detalle-pcac__pais-nombre">{pais.nombre}</span>
          </div>

          <h2 className="modal-detalle-pcac__nombre">{cromo.nombre}</h2>

          <div className="modal-detalle-pcac__posicion-wrap">
            <span className="modal-detalle-pcac__posicion-icono">{icono}</span>
            <span className="modal-detalle-pcac__posicion">{cromo.posicion}</span>
          </div>

          <div className="modal-detalle-pcac__divider" style={{ background: pais.color }} />

          <div className="modal-detalle-pcac__stats">
            <div className="modal-detalle-pcac__stat">
              <span className="modal-detalle-pcac__stat-label">Número</span>
              <span className="modal-detalle-pcac__stat-valor">#{cromo.numero}</span>
            </div>
            <div className="modal-detalle-pcac__stat">
              <span className="modal-detalle-pcac__stat-label">Posición</span>
              <span className="modal-detalle-pcac__stat-valor">{cromo.posicion}</span>
            </div>
            <div className="modal-detalle-pcac__stat">
              <span className="modal-detalle-pcac__stat-label">Selección</span>
              <span className="modal-detalle-pcac__stat-valor">{pais.bandera} {pais.nombre}</span>
            </div>
          </div>

          <div className="modal-detalle-pcac__badge">
            ✅ Cromo en tu álbum
          </div>
        </div>
      </div>
    </div>
  )
}
