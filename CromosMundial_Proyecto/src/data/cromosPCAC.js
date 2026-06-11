// Fotos locales en /public/players/ (descargadas de Wikipedia Commons)
const P = (id, ext = 'jpg') => `/players/${id}.${ext}`
const AVATAR = (nombre, bg, color = 'fff') =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(nombre)}&background=${bg}&color=${color}&size=200&bold=true`

export const PAISES_PCAC = {
  argentina: {
    id: 'argentina',
    nombre: 'Argentina',
    bandera: '🇦🇷',
    color: '#74ACDF',
    colorTexto: '#ffffff',
    gradiente: 'linear-gradient(135deg, #74ACDF 0%, #FFFFFF 50%, #74ACDF 100%)',
    cromos: [
      { id: 'ARG-1', numero: 1,  nombre: 'Lionel Messi',        posicion: 'Delantero',      imagen: P('ARG-1'),       fallback: AVATAR('L Messi',     '74ACDF') },
      { id: 'ARG-2', numero: 2,  nombre: 'Ángel Di María',      posicion: 'Extremo',        imagen: P('ARG-2'),       fallback: AVATAR('Di Maria',    '5b8ab0') },
      { id: 'ARG-3', numero: 3,  nombre: 'Emiliano Martínez',   posicion: 'Portero',        imagen: P('ARG-3'),       fallback: AVATAR('E Martinez',  '2d6a9f') },
      { id: 'ARG-4', numero: 4,  nombre: 'Rodrigo De Paul',     posicion: 'Mediocampista',  imagen: P('ARG-4'),       fallback: AVATAR('De Paul',     '4a90c4') },
      { id: 'ARG-5', numero: 5,  nombre: 'Nahuel Molina',       posicion: 'Lateral',        imagen: P('ARG-5'),       fallback: AVATAR('N Molina',    '6aabd6') },
      { id: 'ARG-6', numero: 6,  nombre: 'Nicolás Tagliafico',  posicion: 'Defensa',        imagen: P('ARG-6', 'png'), fallback: AVATAR('Tagliafico',  '3c7ab5') },
      { id: 'ARG-7', numero: 7,  nombre: 'Cristian Romero',     posicion: 'Defensa Central',imagen: P('ARG-7'),       fallback: AVATAR('C Romero',    '1e5f9e') },
      { id: 'ARG-8', numero: 8,  nombre: 'Alexis Mac Allister', posicion: 'Mediocampista',  imagen: P('ARG-8'),       fallback: AVATAR('Mac Allister','558dc2') },
    ],
  },

  ecuador: {
    id: 'ecuador',
    nombre: 'Ecuador',
    bandera: '🇪🇨',
    color: '#FFD100',
    colorTexto: '#1a1a1a',
    gradiente: 'linear-gradient(135deg, #003087 0%, #FFD100 50%, #EF3340 100%)',
    cromos: [
      { id: 'ECU-1', numero: 9,  nombre: 'Enner Valencia',    posicion: 'Delantero',      imagen: P('ECU-1'),       fallback: AVATAR('E Valencia',  'FFD100','1a1a1a') },
      { id: 'ECU-2', numero: 10, nombre: 'Gonzalo Plata',     posicion: 'Extremo',        imagen: P('ECU-2'),       fallback: AVATAR('G Plata',     'f5c200','1a1a1a') },
      { id: 'ECU-3', numero: 11, nombre: 'Piero Hincapié',   posicion: 'Defensa',        imagen: P('ECU-3'),       fallback: AVATAR('P Hincapie',  'e6b800','1a1a1a') },
      { id: 'ECU-4', numero: 12, nombre: 'Pervis Estupiñán', posicion: 'Lateral',        imagen: P('ECU-4', 'png'), fallback: AVATAR('Estupinian',  'd4a800','1a1a1a') },
      { id: 'ECU-5', numero: 13, nombre: 'Jhegson Méndez',   posicion: 'Mediocampista',  imagen: P('ECU-5'),       fallback: AVATAR('J Mendez','ffd933','1a1a1a') },
      { id: 'ECU-6', numero: 14, nombre: 'Moisés Caicedo',   posicion: 'Mediocampista',  imagen: P('ECU-6'),       fallback: AVATAR('M Caicedo',   'c49a00','1a1a1a') },
      { id: 'ECU-7', numero: 15, nombre: 'Angelo Preciado',  posicion: 'Lateral Derecho',imagen: P('ECU-7'),       fallback: AVATAR('A Preciado',  'f0c400','1a1a1a') },
      { id: 'ECU-8', numero: 16, nombre: 'Robert Arboleda',  posicion: 'Defensa Central',imagen: P('ECU-8'),       fallback: AVATAR('R Arboleda',  'b89000','1a1a1a') },
    ],
  },

  espana: {
    id: 'espana',
    nombre: 'España',
    bandera: '🇪🇸',
    color: '#AA151B',
    colorTexto: '#ffffff',
    gradiente: 'linear-gradient(135deg, #AA151B 0%, #F1BF00 50%, #AA151B 100%)',
    cromos: [
      { id: 'ESP-1', numero: 17, nombre: 'Pedri González',   posicion: 'Mediocampista',  imagen: P('ESP-1'),       fallback: AVATAR('Pedri',      'AA151B') },
      { id: 'ESP-2', numero: 18, nombre: 'Lamine Yamal',     posicion: 'Extremo',        imagen: P('ESP-2'),       fallback: AVATAR('L Yamal',    'c41e24') },
      { id: 'ESP-3', numero: 19, nombre: 'Álvaro Morata',    posicion: 'Delantero',      imagen: P('ESP-3'),       fallback: AVATAR('A Morata',   '8a1014') },
      { id: 'ESP-4', numero: 20, nombre: 'Nico Williams',    posicion: 'Extremo',        imagen: P('ESP-4'),       fallback: AVATAR('N Williams', 'b51820') },
      { id: 'ESP-5', numero: 21, nombre: 'Dani Carvajal',    posicion: 'Lateral',        imagen: P('ESP-5'),       fallback: AVATAR('D Carvajal', '9e1216') },
      { id: 'ESP-6', numero: 22, nombre: 'Rodri',            posicion: 'Pivote',         imagen: P('ESP-6'),       fallback: AVATAR('Rodri','d01e25') },
      { id: 'ESP-7', numero: 23, nombre: 'Marc ter Stegen',  posicion: 'Portero',        imagen: P('ESP-7'),       fallback: AVATAR('Ter Stegen', '7a0e12') },
      { id: 'ESP-8', numero: 24, nombre: 'Dani Olmo',        posicion: 'Mediocampista',  imagen: P('ESP-8'),       fallback: AVATAR('D Olmo',     'bf1a21') },
    ],
  },
}

export const TODOS_LOS_CROMOS_PCAC = Object.values(PAISES_PCAC)
  .flatMap(pais => pais.cromos)
