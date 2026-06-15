import { useState } from 'react'
import './LoginPCAC.css'

export default function LoginPCAC({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      const ok = onLogin(username, password)
      if (!ok) setError('Usuario o contraseña incorrectos')
      setLoading(false)
    }, 600)
  }

  return (
    <div className="login-pcac">
      <div className="login-pcac__fondo" />
      <div className="login-pcac__card">
        <div className="login-pcac__trofeo">🏆</div>
        <h1 className="login-pcac__titulo">Álbum Mundial</h1>
        <p className="login-pcac__subtitulo">PCAC World Cup Collection</p>

        <form onSubmit={handleSubmit} className="login-pcac__form">
          <div className="login-pcac__campo">
            <label htmlFor="username">Usuario</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="ej: pamela"
              autoComplete="username"
              required
            />
          </div>
          <div className="login-pcac__campo">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••"
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="login-pcac__error">⚠ {error}</p>}

          <button type="submit" className="login-pcac__btn" disabled={loading}>
            {loading ? 'Verificando...' : 'Entrar al Álbum'}
          </button>
        </form>

        <div className="login-pcac__hint">
          <p>Usuarios de prueba:</p>
          <code>Pamela / 1234 &nbsp;·&nbsp; Alisson / 1234 &nbsp;·&nbsp; demo / 0000</code>
        </div>
      </div>
    </div>
  )
}
