import { SiderBarButtonProps } from './MainLayout'

import {
  faAddressBook,
  faBell,
  faBookmark,
  faCommentDots,
  faEnvelope,
  faFile,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons'

export const siderBarButtons: SiderBarButtonProps[] = [
  {
    icon: faAddressBook,
    label: 'Address Book',
    href: '#address-book',
  },
  {
    icon: faBell,
    label: 'Notifications',
    href: '#notifications',
  },
  {
    icon: faBookmark,
    label: 'Bookmarks',
    href: '#bookmarks',
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
  },
  {
    icon: faUser,
    label: 'Profile',
    href: '#profile',
  }
]
