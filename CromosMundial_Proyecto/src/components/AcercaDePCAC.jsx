import { useState } from 'react'
import '../styles/AcercaDePCAC.css'

const INTEGRANTES = [
  {
    id: 1,
    nombre: 'Pamela Carriel',
    carrera: 'Desarrollo de Software',
    rol: 'Líder de Proyecto',
    descripcion: 'Responsable de la arquitectura del sistema y coordinación del equipo. Especializada en desarrollo frontend con React.',
    inicial: 'P',
    color: '#74ACDF',
  },
  {
    id: 2,
    nombre: 'Alisson Cuenca',
    carrera: 'Desarrollo de Software',
    rol: 'Desarrolladora Frontend',
    descripcion: 'Encargada del diseño de interfaz y experiencia de usuario. Apasionada por crear interfaces atractivas y funcionales.',
    inicial: 'A',
    color: '#FFD100',
  },
]

function TarjetaIntegrantePCAC({ integrante }) {
  const [volteada, setVolteada] = useState(false)

  return (
    <div
      className={`acerca-pcac__tarjeta${volteada ? ' acerca-pcac__tarjeta--volteada' : ''}`}
      onClick={() => setVolteada(v => !v)}
    >
      <div className="acerca-pcac__tarjeta-inner">
        <div className="acerca-pcac__frente">
          <div
            className="acerca-pcac__avatar"
            style={{ background: `linear-gradient(135deg, ${integrante.color}, #0a1628)` }}
          >
            <span className="acerca-pcac__avatar-inicial">{integrante.inicial}</span>
          </div>
          <h3 className="acerca-pcac__nombre">{integrante.nombre}</h3>
          <span className="acerca-pcac__rol">{integrante.rol}</span>
          <span className="acerca-pcac__hint">Haz clic para ver más</span>
        </div>

        <div className="acerca-pcac__dorso">
          <div className="acerca-pcac__dorso-icono">👤</div>
          <h3 className="acerca-pcac__nombre">{integrante.nombre}</h3>
          <p className="acerca-pcac__carrera">🎓 {integrante.carrera}</p>
          <p className="acerca-pcac__desc">{integrante.descripcion}</p>
          <span className="acerca-pcac__hint">Haz clic para volver</span>
        </div>
      </div>
    </div>
  )
}

export default function AcercaDePCAC() {
  return (
    <div className="acerca-pcac">
      <div className="acerca-pcac__encabezado">
        <h1 className="acerca-pcac__titulo">
          <span>👥</span> Acerca del Equipo
        </h1>
        <p className="acerca-pcac__subtitulo">
          Conoce a los integrantes del grupo PCAC detrás del Álbum Mundial
        </p>
      </div>

      <div className="acerca-pcac__grid">
        {INTEGRANTES.map(i => (
          <TarjetaIntegrantePCAC key={i.id} integrante={i} />
        ))}
      </div>

      <div className="acerca-pcac__proyecto">
        <h2 className="acerca-pcac__proyecto-titulo">Sobre el Proyecto</h2>
        <p className="acerca-pcac__proyecto-desc">
          <strong>Álbum Mundial PCAC</strong> es una aplicación web interactiva desarrollada como
          proyecto del segundo parcial. Permite coleccionar cromos del Mundial de Fútbol,
          gestionar el álbum por usuario y comprar sobres para completar la colección.
        </p>
        <div className="acerca-pcac__tecnologias">
          <span className="acerca-pcac__tech">⚛️ React 19</span>
          <span className="acerca-pcac__tech">⚡ Vite</span>
          <span className="acerca-pcac__tech">🎨 CSS3</span>
          <span className="acerca-pcac__tech">💾 LocalStorage</span>
        </div>
      </div>
    </div>
  )
}
