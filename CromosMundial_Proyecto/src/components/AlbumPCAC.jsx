import { useState } from 'react'
import { PAISES_PCAC } from '../data/cromosPCAC'
import NavbarPCAC from './NavbarPCAC'
import PaisPCAC from './PaisPCAC'
import RepetidosPCAC from './RepetidosPCAC'
import ModalCompraPCAC from './ModalCompraPCAC'
import './AlbumPCAC.css'

export default function AlbumPCAC() {
  const [modalAbierto, setModalAbierto] = useState(false)

  return (
    <div className="album-pcac">
      <NavbarPCAC onAbrirCarrito={() => setModalAbierto(true)} />

      <main className="album-pcac__main">
        <div className="album-pcac__portada">
          <h1 className="album-pcac__portada-titulo">
            <span className="album-pcac__portada-emoji">⚽</span>
            Álbum del Mundial
          </h1>
          <p className="album-pcac__portada-sub">PCAC World Cup Sticker Collection</p>
          <div className="album-pcac__paises-banderas">
            {Object.values(PAISES_PCAC).map(p => (
              <span key={p.id} className="album-pcac__flag-badge" title={p.nombre}>
                {p.bandera} {p.nombre}
              </span>
            ))}
          </div>
        </div>

        <div className="album-pcac__secciones">
          {Object.values(PAISES_PCAC).map(pais => (
            <PaisPCAC key={pais.id} pais={pais} />
          ))}

          <RepetidosPCAC />
        </div>
      </main>

      {modalAbierto && (
        <ModalCompraPCAC onCerrar={() => setModalAbierto(false)} />
      )}
    </div>
  )
}
