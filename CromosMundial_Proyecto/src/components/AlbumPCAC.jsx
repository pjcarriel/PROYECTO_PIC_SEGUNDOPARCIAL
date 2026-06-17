import { useState } from 'react'
import { PAISES_PCAC } from '../data/cromosPCAC'
import NavbarPCAC from './NavbarPCAC'
import PaisPCAC from './PaisPCAC'
import RepetidosPCAC from './RepetidosPCAC'
import ModalCompraPCAC from './ModalCompraPCAC'
import AcercaDePCAC from './AcercaDePCAC'
import ModalDetalleCromoPCAC from './ModalDetalleCromoPCAC'
import '../styles/AlbumPCAC.css'

export default function AlbumPCAC({ usuario, onLogout, tieneCromo, cantidadCromo, getCromosRepetidos, getProgreso, comprarSobre }) {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [pagina, setPagina] = useState('inicio')
  const [cromoDetalle, setCromoDetalle] = useState(null)

  const repetidos = getCromosRepetidos()
  const progreso = getProgreso()

  return (
    <div className="album-pcac">
      <NavbarPCAC
        usuario={usuario}
        onLogout={onLogout}
        progreso={progreso}
        onAbrirCarrito={() => setModalAbierto(true)}
        pagina={pagina}
        onNavegar={setPagina}
      />

      {pagina === 'acerca-de' ? (
        <AcercaDePCAC />
      ) : (
        <main className="album-pcac__main">
          <div className="album-pcac__portada">
            <h1 className="album-pcac__portada-titulo">
              <span className="album-pcac__portada-emoji">âš½</span>
              Ãlbum del Mundial
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
              <PaisPCAC
                key={pais.id}
                pais={pais}
                tieneCromo={tieneCromo}
                cantidadCromo={cantidadCromo}
                onVerDetalle={(cromo, p) => setCromoDetalle({ cromo, pais: p })}
              />
            ))}

            <RepetidosPCAC repetidos={repetidos} />
          </div>
        </main>
      )}

      {modalAbierto && (
        <ModalCompraPCAC
          comprarSobre={comprarSobre}
          onCerrar={() => setModalAbierto(false)}
        />
      )}

      {cromoDetalle && (
        <ModalDetalleCromoPCAC
          cromo={cromoDetalle.cromo}
          pais={cromoDetalle.pais}
          onCerrar={() => setCromoDetalle(null)}
        />
      )}
    </div>
  )
}
