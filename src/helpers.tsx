import { IconType } from 'react-icons'
import { BsHouse, BsHouseFill, BsHash, BsBell, BsBellFill, BsEnvelope, BsEnvelopeFill, BsBookmarks, BsBookmarksFill, BsList, BsPerson, BsPersonFill, BsThreeDots } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'

interface ListLink {
  title: string
  href: string
  activeIcon: IconType
  inactiveIcon: IconType
}

export const mainLogoNav = {
  title: 'Home',
  href: '/',
  icon: FaTwitter
}

export const asideLinksProperties: ListLink[] = [
  {
    title: 'Inicio',
    href: '/',
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse
  },
  {
    title: 'Explorar',
    href: '/explore',
    activeIcon: BsHash,
    inactiveIcon: BsHash
  },
  {
    title: 'Notificaciones',
    href: '/notifications',
    activeIcon: BsBellFill,
    inactiveIcon: BsBell
  },
  {
    title: 'Mensajes',
    href: '/messages',
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope
  },
  {
    title: 'Guardados',
    href: '/bookmarks',
    activeIcon: BsBookmarksFill,
    inactiveIcon: BsBookmarks
  },
  {
    title: 'Listas',
    href: '/lists',
    activeIcon: BsList,
    inactiveIcon: BsList
  },
  {
    title: 'Perfil',
    href: '/profile',
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson
  },
  {
    title: 'Más opciones',
    href: '/options',
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots
  }
]
