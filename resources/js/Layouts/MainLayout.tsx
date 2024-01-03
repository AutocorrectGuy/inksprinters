import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import GROUND_SVG from '../../images/Pages/Welcome/inksprinters-ground.svg'
import SCRUMBLED_PAPER_JPG from '../../images/Pages/Welcome/scrumbled-paper.png'
import LOGO_WITH_TEXT from '../../images/Pages/Welcome/logo-with-text.svg'
import HEXAGONS from '../../images/Pages/Welcome/hexagons.svg'
import { PageProps } from '@/types'
import { ReactNode, useEffect } from 'react'
import { Head, Link } from '@inertiajs/react'
import TopNav from '@/Pages/Welcome/components/TopNav'
import { siderBarButtons } from './MockData'

export type SiderBarButtonProps = {
  icon: IconDefinition
  label: string
  href: string
  isFirstChild?: boolean
  isLastChild?: boolean
}

const SidebarButton = ({ icon, label, href, isFirstChild, isLastChild }: SiderBarButtonProps) => {
  const borderRadiusClass = isFirstChild
    ? 'rounded-t-[20px] border-b-[6px] border-b-gray-950 pt-4'
    : isLastChild
      ? 'rounded-b-[20px] pb-4'
      : 'border-b-[6px] border-b-gray-950'

  return (
    <Link
      href={href}
      className={`${borderRadiusClass} flex w-80 items-center justify-between border-b-black bg-gradient-to-r 
      from-[#000522]/80 from-15% via-[#390d19]/80 to-[#8f1d1d]/80 py-3 hover:from-[#c8c3bb] 
      hover:via-[#c8c3bb] hover:to-[#c8c3bb] hover:text-[#1b1b1a] `}
    >
      <div className="flex w-full items-center">
        <div className="w-28">
          <FontAwesomeIcon icon={icon} className="mx-6 h-7 w-7" />
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
  useEffect(() => {
    console.log('rerendered')
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
        <img src={GROUND_SVG} className="absolute bottom-0 right-0 -z-10 w-full" />
        <div className="absolute bottom-0 left-0 right-0 w-full bg-black/30 py-2 text-center text-xl font-bold text-[#c8c9c9]">
          INKSPRINTERS 2023-2024
        </div>
        <TopNav auth={auth} />
        <aside className="fixed left-6 top-6 z-40 h-screen w-80">
          <img src={LOGO_WITH_TEXT} className="mb-6 w-full" />
          <div
            className="rounded-[20px] outline outline-[3px] outline-[#c8c9c9d5]"
            style={{
              ...innerShadow,
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
        <div className="ml-[370px] flex min-h-screen flex-grow flex-col pt-20 text-neutral-300">{children}</div>
      </div>
    </>
  )
}
