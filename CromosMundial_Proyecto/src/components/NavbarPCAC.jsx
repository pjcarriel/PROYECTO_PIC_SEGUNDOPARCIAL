import '../styles/NavbarPCAC.css'

export default function NavbarPCAC({ usuario, onLogout, progreso, onAbrirCarrito, pagina, onNavegar }) {
  const { pegados, total, porcentaje } = progreso

  return (
    <nav className="navbar-pcac">
      <div className="navbar-pcac__logo">
        <span className="navbar-pcac__trofeo">ðŸ†</span>
        <div>
          <span className="navbar-pcac__nombre-app">Ãlbum Mundial</span>
          <span className="navbar-pcac__grupo">PCAC Edition</span>
        </div>
      </div>

      <div className="navbar-pcac__menu">
        <button
          className={`navbar-pcac__menu-item${pagina === 'inicio' ? ' navbar-pcac__menu-item--activo' : ''}`}
          onClick={() => onNavegar('inicio')}
        >
          ðŸ  Inicio
        </button>
        <button
          className={`navbar-pcac__menu-item${pagina === 'acerca-de' ? ' navbar-pcac__menu-item--activo' : ''}`}
          onClick={() => onNavegar('acerca-de')}
        >
          ðŸ‘¥ Acerca de
        </button>
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
          <span className="navbar-pcac__carrito-icono">ðŸ“¦</span>
          <span>Comprar Sobre</span>
        </button>

        <div className="navbar-pcac__usuario">
          <span className="navbar-pcac__avatar">{usuario?.nombre?.[0]?.toUpperCase()}</span>
          <span className="navbar-pcac__nombre">{usuario?.nombre}</span>
        </div>

        <button className="navbar-pcac__btn-logout" onClick={onLogout} title="Cerrar sesiÃ³n">
          â»
        </button>
      </div>
    </nav>
  )
}
