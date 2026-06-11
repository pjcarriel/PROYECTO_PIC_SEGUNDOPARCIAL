import { createContext, useContext, useState, useEffect } from 'react'
import { USUARIOS_PCAC } from '../data/usuariosPCAC'

const AuthContextPCAC = createContext(null)

export function AuthProviderPCAC({ children }) {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const guardado = sessionStorage.getItem('usuario_pcac')
    if (guardado) setUsuario(JSON.parse(guardado))
  }, [])

  function login(username, password) {
    const encontrado = USUARIOS_PCAC.find(
      u => u.username === username.trim().toLowerCase() && u.password === password
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

  return (
    <AuthContextPCAC.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContextPCAC.Provider>
  )
}

export function useAuthPCAC() {
  return useContext(AuthContextPCAC)
}
