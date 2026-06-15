import { useState } from 'react'
import './ModalCompraPCAC.css'

export default function ModalCompraPCAC({ comprarSobre, onCerrar }) {
  const [fase, setFase] = useState('confirmar') // 'confirmar' | 'abriendo' | 'resultado'
  const [cromosObtenidos, setCromosObtenidos] = useState([])

  function handleComprar() {
    setFase('abriendo')
    setTimeout(() => {
      const obtenidos = comprarSobre()
      setCromosObtenidos(obtenidos)
      setFase('resultado')
    }, 1400)
  }

  return (
    <div className="modal-pcac__overlay" onClick={fase === 'resultado' ? onCerrar : undefined}>
      <div className="modal-pcac__caja" onClick={e => e.stopPropagation()}>

        {fase === 'confirmar' && (
          <>
            <div className="modal-pcac__icono">📦</div>
            <h2 className="modal-pcac__titulo">Comprar Sobre</h2>
            <p className="modal-pcac__texto">
              ¿Estás seguro que deseas comprar un sobre de cromos?<br />
              <span className="modal-pcac__hint">Obtendrás <strong>2 o 3 cromos</strong> al azar.</span>
            </p>
            <div className="modal-pcac__botones">
              <button className="modal-pcac__btn modal-pcac__btn--cancelar" onClick={onCerrar}>
                Cancelar
              </button>
              <button className="modal-pcac__btn modal-pcac__btn--comprar" onClick={handleComprar}>
                ¡Sí, comprar!
              </button>
            </div>
          </>
        )}

        {fase === 'abriendo' && (
          <div className="modal-pcac__abriendo">
            <div className="modal-pcac__sobre-anim">📦</div>
            <p>Abriendo sobre...</p>
          </div>
        )}

        {fase === 'resultado' && (
          <>
            <div className="modal-pcac__icono">🎉</div>
            <h2 className="modal-pcac__titulo">¡Cromos obtenidos!</h2>
            <p className="modal-pcac__texto">Obtuviste <strong>{cromosObtenidos.length} cromos</strong>:</p>

            <div className="modal-pcac__cromos-obtenidos">
              {cromosObtenidos.map((cromo, i) => (
                <div key={`${cromo.id}-${i}`} className="modal-pcac__cromo-item">
                  <img src={cromo.imagen} alt={cromo.nombre} className="modal-pcac__cromo-img"
                    onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = cromo.fallback }} />
                  <div className="modal-pcac__cromo-info">
                    <span className="modal-pcac__cromo-num">#{cromo.numero}</span>
                    <span className="modal-pcac__cromo-nombre">{cromo.nombre}</span>
                    <span className="modal-pcac__cromo-pos">{cromo.posicion}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="modal-pcac__btn modal-pcac__btn--comprar" onClick={onCerrar}>
              ¡Pegar al álbum!
            </button>
          </>
        )}
      </div>
    </div>
  )
}
