import { useAuthPCAC } from '../context/AuthContextPCAC'
import { useAlbumPCAC } from '../context/AlbumContextPCAC'
import './NavbarPCAC.css'

export default function NavbarPCAC({ onAbrirCarrito }) {
  const { usuario, logout } = useAuthPCAC()
  const { getProgreso } = useAlbumPCAC()
  const { pegados, total, porcentaje } = getProgreso()

  return (
    <nav className="navbar-pcac">
      <div className="navbar-pcac__logo">
        <span className="navbar-pcac__trofeo">🏆</span>
        <div>
          <span className="navbar-pcac__nombre-app">Álbum Mundial</span>
          <span className="navbar-pcac__grupo">PCAC Edition</span>
        </div>
      </div>

      <div className="navbar-pcac__progreso">
        <span className="navbar-pcac__progreso-texto">{pegados}/{total} cromos</span>
        <div className="navbar-pcac__barra">
          <div className="navbar-pcac__barra-fill" style={{ width: `${porcentaje}%` }} />
        </div>
        <span className="navbar-pcac__pct">{porcentaje}%</span>
      </div>

      <div className="navbar-pcac__acciones">
        <button className="navbar-pcac__btn-carrito" onClick={onAbrirCarrito} title="Comprar sobre de cromos">
          <span className="navbar-pcac__carrito-icono">📦</span>
          <span>Comprar Sobre</span>
        </button>

        <div className="navbar-pcac__usuario">
          <span className="navbar-pcac__avatar">{usuario?.nombre?.[0]?.toUpperCase()}</span>
          <span className="navbar-pcac__nombre">{usuario?.nombre}</span>
        </div>

        <button className="navbar-pcac__btn-logout" onClick={logout} title="Cerrar sesión">
          ⏻
        </button>
      </div>
    </nav>
  )
}
