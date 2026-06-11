import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { TODOS_LOS_CROMOS_PCAC } from '../data/cromosPCAC'
import { useAuthPCAC } from './AuthContextPCAC'

const AlbumContextPCAC = createContext(null)

export function AlbumProviderPCAC({ children }) {
  const { usuario } = useAuthPCAC()
  const [coleccion, setColeccion] = useState({})

  const storageKey = usuario ? `album_${usuario.username}` : null

  useEffect(() => {
    if (storageKey) {
      const guardado = localStorage.getItem(storageKey)
      setColeccion(guardado ? JSON.parse(guardado) : {})
    } else {
      setColeccion({})
    }
  }, [storageKey])

  const guardar = useCallback((nueva) => {
    if (storageKey) localStorage.setItem(storageKey, JSON.stringify(nueva))
    setColeccion(nueva)
  }, [storageKey])

  function comprarSobre() {
    const cantidad = Math.floor(Math.random() * 2) + 2 // 2 o 3 cromos
    const obtenidos = []

    for (let i = 0; i < cantidad; i++) {
      const idx = Math.floor(Math.random() * TODOS_LOS_CROMOS_PCAC.length)
      obtenidos.push(TODOS_LOS_CROMOS_PCAC[idx])
    }

    const nueva = { ...coleccion }
    obtenidos.forEach(c => {
      nueva[c.id] = (nueva[c.id] || 0) + 1
    })
    guardar(nueva)
    return obtenidos
  }

  function tieneCromo(id) {
    return (coleccion[id] || 0) > 0
  }

  function cantidadCromo(id) {
    return coleccion[id] || 0
  }

  function getCromosRepetidos() {
    return TODOS_LOS_CROMOS_PCAC.filter(c => (coleccion[c.id] || 0) > 1)
      .map(c => ({ ...c, repetidos: coleccion[c.id] - 1 }))
  }

  function getProgreso() {
    const total = TODOS_LOS_CROMOS_PCAC.length
    const pegados = TODOS_LOS_CROMOS_PCAC.filter(c => tieneCromo(c.id)).length
    return { pegados, total, porcentaje: Math.round((pegados / total) * 100) }
  }

  return (
    <AlbumContextPCAC.Provider value={{ coleccion, comprarSobre, tieneCromo, cantidadCromo, getCromosRepetidos, getProgreso }}>
      {children}
    </AlbumContextPCAC.Provider>
  )
}

export function useAlbumPCAC() {
  return useContext(AlbumContextPCAC)
}
