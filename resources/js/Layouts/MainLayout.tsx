import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import GROUND_SVG from '../../images/Pages/Welcome/inksprinters-ground.svg'
import SCRUMBLED_PAPER_JPG from '../../images/Pages/Welcome/scrumbled-paper.png'
import HEXAGONS from '../../images/Pages/Welcome/hexagons.svg'
import { PageProps } from '@/types'
import { ReactNode, useEffect } from 'react'
import { Head, Link, usePage } from '@inertiajs/react'
import TopNav from '@/Pages/Welcome/components/TopNav'
import { siderBarButtons } from './MockData'
import { styles } from './config/MainLayout.config'

export type SiderBarButtonProps = {
  icon: IconDefinition | string
  label: string
  href: string
  isFirstChild?: boolean
  isLastChild?: boolean
}

const SidebarButton = ({ icon, label, href, isFirstChild, isLastChild }: SiderBarButtonProps) => {
  const borderRadiusClass = isFirstChild
    ? 'rounded-tr-[24px] border-b-[6px] border-b-[#242C29] pt-4'
    : isLastChild
      ? 'rounded-br-[24px] pb-4'
      : 'border-b-[6px] border-b-[#242C29]'

  return (
    <Link
      href={href}
      className={`${borderRadiusClass} flex items-center justify-between border-[#242C29] bg-gradient-to-r 
      from-[#000522]/80 from-15% via-[#390d19]/80 to-[#8f1d1d]/80 py-3 hover:from-[#c8c3bb] 
      hover:via-[#c8c3bb] hover:to-[#c8c3bb] hover:text-[#1b1b1a] `}
      style={{ width: styles.sidebarWidth }}
    >
      <div className="flex w-full items-center">
        <div className="w-28">
          {
            typeof icon === 'string'
              ? <img src={icon} className="mx-6 h-7 w-7" />
              : <FontAwesomeIcon icon={icon} className="mx-6 h-7 w-7" />
          }

        </div>
        <div className="w-full truncate">{label}</div>
      </div>
      <FontAwesomeIcon icon={faCaretRight} className="mr-2 h-10 w-10" />
    </Link>
  )
}

// const SidebarDnd = (props: SiderBarButtonProps) => {
//   return (
//     <li className='dropdown dropdown-right dropdown-hover w-72'>
//       <SidebarButton href={props.href} icon={props.icon} label={props.label} />
//       <ul tabIndex={0} className="dropdown-content z-[1] menu pl-1 py-0 shadow w-72 space-y-1">
//         <SidebarButton href={props.href} icon={props.icon} label={props.label} />
//         <SidebarButton href={props.href} icon={props.icon} label={props.label} />
//       </ul>
//     </li>
//   )
// }

const innerShadow = {
  WebkitBoxShadow: 'inset 0 0 18px 8px rgba(0, 0, 0, 0.7)', // For Safari and Chrome
  MozBoxShadow: 'inset 0 0 18px 8px rgba(0, 0, 0, 0.7)', // For Firefox
  boxShadow: 'inset 0 0 18px 8px rgba(0, 0, 0, 0.7)', // Standard syntax
}

export default function MainLayout({ auth, children }: PageProps & { children: ReactNode }) {

  const { url } = usePage()

  useEffect(() => {
    console.log(url)
  }, [])

  return (
    <>
      <Head title="Welcome" />
      <div className="relative z-10 min-h-screen bg-gradient-to-b from-[#1e201d] to-[#2d3d3b]">
        <img className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full" src={HEXAGONS} />
        <div
          className="absolute bottom-0 left-0 right-0 top-0 -z-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #00000015 20px, #00000015 22px, transparent 22px, transparent 42px)',
          }}
        />
        {url !== '/' && <div className="fixed -z-10 h-screen top-28 border-r-[3px] border-r-[#ffffff90]" style={{ marginLeft: styles.sideNavWidth }} />}

        <img src={GROUND_SVG} className="absolute bottom-0 right-0 -z-10 w-full" />

        <div className="absolute bottom-0 left-0 right-0 w-full bg-black/30 py-2 text-center text-xl font-bold text-[#c8c9c9]">
          INKSPRINTERS 2023-2024
        </div>

        <TopNav auth={auth} />

        {/* Sidebar nav */}
        <aside className="fixed z-40 h-screen top-28"
          style={{ width: styles.sideNavWidth }}
        >
          <div
            className="rounded-r-[24px] outline outline-[3px] outline-[#c8c9c9d5] mt-24"
            style={{
              ...innerShadow,
              width: styles.sidebarWidth,
              backgroundImage: `url(${SCRUMBLED_PAPER_JPG})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '200% 200%',
            }}
          >
            <ul className="text-2xl font-thin text-[#C7C3BB]">
              {siderBarButtons.map((btn, i) => (
                <SidebarButton
                  key={`sidebar-main-btn-${i}`}
                  icon={btn.icon}
                  label={btn.label}
                  href={btn.href}
                  isFirstChild={i === 0}
                  isLastChild={i === siderBarButtons.length - 1}
                />
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex min-h-screen flex-grow flex-col text-neutral-300"
          style={{
            marginLeft: styles.sideNavWidth,
            paddingTop: styles.topNavHeigh
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
