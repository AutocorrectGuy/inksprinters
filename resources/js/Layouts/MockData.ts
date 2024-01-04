import { SiderBarButtonProps } from './MainLayout'

import {
  faBookmark,
  faCommentDots,
  faEnvelope,
  faFile,
  faHeart,
  faFileExcel,
  faBuilding
} from '@fortawesome/free-regular-svg-icons'

export const siderBarButtons: SiderBarButtonProps[] = [
  {
    icon: faBuilding,
    label: 'Home',
    href: '/',
  },
  {
    icon: faBookmark,
    label: 'About',
    href: '#about',
  },
  {
    icon: faFileExcel,
    label: 'Conver Excel',
    href: '#tools/convert-excel',
  },
  {
    icon: faCommentDots,
    label: 'Messages',
    href: '#messages',
  },
  {
    icon: faEnvelope,
    label: 'Emails',
    href: '#emails',
  },
  {
    icon: faFile,
    label: 'Documents',
    href: '#documents',
  },
  {
    icon: faHeart,
    label: 'Favorites',
    href: '#favorites',
  }
]
