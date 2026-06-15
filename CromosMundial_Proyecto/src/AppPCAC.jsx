import { useState, useEffect } from 'react'
import { USUARIOS_PCAC } from './data/usuariosPCAC'
import { TODOS_LOS_CROMOS_PCAC } from './data/cromosPCAC'
import LoginPCAC from './components/LoginPCAC'
import AlbumPCAC from './components/AlbumPCAC'

export default function AppPCAC() {
  const [usuario, setUsuario] = useState(() => {
    const guardado = sessionStorage.getItem('usuario_pcac')
    return guardado ? JSON.parse(guardado) : null
  })

  const [coleccion, setColeccion] = useState({})

  useEffect(() => {
    if (usuario) {
      const guardado = localStorage.getItem(`album_${usuario.username}`)
      setColeccion(guardado ? JSON.parse(guardado) : {})
    } else {
      setColeccion({})
    }
  }, [usuario])

  function guardarColeccion(nueva) {
    if (usuario) {
      localStorage.setItem(`album_${usuario.username}`, JSON.stringify(nueva))
    }
    setColeccion(nueva)
  }

  // ── Autenticación ──────────────────────────────────────────
  function login(username, password) {
    const encontrado = USUARIOS_PCAC.find(
      u => u.username.toLowerCase() === username.trim().toLowerCase() && u.password === password
    )
    if (encontrado) {
      const sesion = { username: encontrado.username, nombre: encontrado.nombre }
      sessionStorage.setItem('usuario_pcac', JSON.stringify(sesion))
      setUsuario(sesion)
      return true
    }
    return false
  }

  function logout() {
    sessionStorage.removeItem('usuario_pcac')
    setUsuario(null)
  }

  // ── Álbum ──────────────────────────────────────────────────
  function comprarSobre() {
    const cantidad = Math.floor(Math.random() * 2) + 2
    const obtenidos = []
    for (let i = 0; i < cantidad; i++) {
      const idx = Math.floor(Math.random() * TODOS_LOS_CROMOS_PCAC.length)
      obtenidos.push(TODOS_LOS_CROMOS_PCAC[idx])
    }
    const nueva = { ...coleccion }
    obtenidos.forEach(c => {
      nueva[c.id] = (nueva[c.id] || 0) + 1
    })
    guardarColeccion(nueva)
    return obtenidos
  }

  function tieneCromo(id) {
    return (coleccion[id] || 0) > 0
  }

  function cantidadCromo(id) {
    return coleccion[id] || 0
  }

  function getCromosRepetidos() {
    return TODOS_LOS_CROMOS_PCAC
      .filter(c => (coleccion[c.id] || 0) > 1)
      .map(c => ({ ...c, repetidos: coleccion[c.id] - 1 }))
  }

  function getProgreso() {
    const total = TODOS_LOS_CROMOS_PCAC.length
    const pegados = TODOS_LOS_CROMOS_PCAC.filter(c => (coleccion[c.id] || 0) > 0).length
    return { pegados, total, porcentaje: Math.round((pegados / total) * 100) }
  }

  // ── Render ─────────────────────────────────────────────────
  if (!usuario) {
    return <LoginPCAC onLogin={login} />
  }

  return (
    <AlbumPCAC
      usuario={usuario}
      onLogout={logout}
      tieneCromo={tieneCromo}
      cantidadCromo={cantidadCromo}
      getCromosRepetidos={getCromosRepetidos}
      getProgreso={getProgreso}
      comprarSobre={comprarSobre}
    />
  )
}
