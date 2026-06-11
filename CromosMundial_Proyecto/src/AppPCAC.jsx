import { useAuthPCAC } from './context/AuthContextPCAC'
import { AlbumProviderPCAC } from './context/AlbumContextPCAC'
import LoginPCAC from './components/LoginPCAC'
import AlbumPCAC from './components/AlbumPCAC'

export default function AppPCAC() {
  const { usuario } = useAuthPCAC()

  if (!usuario) {
    return <LoginPCAC />
  }

  return (
    <AlbumProviderPCAC>
      <AlbumPCAC />
    </AlbumProviderPCAC>
  )
}
