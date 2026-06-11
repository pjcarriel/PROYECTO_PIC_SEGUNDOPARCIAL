import { useAlbumPCAC } from '../context/AlbumContextPCAC'
import CromoPCAC from './CromoPCAC'
import './PaisPCAC.css'

export default function PaisPCAC({ pais }) {
  const { tieneCromo } = useAlbumPCAC()
  const pegados = pais.cromos.filter(c => tieneCromo(c.id)).length
  const total = pais.cromos.length

  return (
    <section className="pais-pcac">
      <div className="pais-pcac__cabecera" style={{ background: pais.gradiente }}>
        <div className="pais-pcac__cabecera-izq">
          <span className="pais-pcac__bandera">{pais.bandera}</span>
          <div>
            <h2 className="pais-pcac__nombre" style={{ color: pais.colorTexto }}>{pais.nombre}</h2>
            <span className="pais-pcac__subtitulo" style={{ color: pais.colorTexto }}>
              Selección Nacional
            </span>
          </div>
        </div>
        <div className="pais-pcac__contador">
          <span className="pais-pcac__contador-num" style={{ color: pais.colorTexto }}>
            {pegados}<span style={{ opacity: 0.5 }}>/{total}</span>
          </span>
          <span className="pais-pcac__contador-label" style={{ color: pais.colorTexto }}>cromos</span>
        </div>
      </div>

      <div className="pais-pcac__pagina">
        <div className="pais-pcac__grid">
          {pais.cromos.map(cromo => (
            <CromoPCAC key={cromo.id} cromo={cromo} />
          ))}
        </div>
      </div>
    </section>
  )
}
