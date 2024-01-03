import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faCaretRight, faHome } from '@fortawesome/free-solid-svg-icons';
import GROUND_SVG from '../../images/Pages/Welcome/inksprinters-ground.svg';
import { PageProps } from '@/types';
import { ReactNode, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import TopNav from '@/Pages/Welcome/components/TopNav';

const PLACEHOLDER_BUTTON_NAMES = ['Excel to text', 'Monaco text editor', 'CMYK color picker', 'Save artice', 'Find Article(s)', 'Find Jig(s)', 'Center article position'];


type SiderBarButtonProps = {
  icon: IconDefinition,
  label: string,
  href: string,
  isFirstChild: boolean
  isLastChild: boolean
}

const SidebarButton = ({ icon, label, href, isFirstChild, isLastChild }: SiderBarButtonProps) => {
  const borderRadiusClass = isFirstChild
    ? "rounded-t-[16px]"
    : isLastChild
      ? "rounded-b-[16px]"
      : "";

  return (
    <Link href={href} className={`flex justify-between items-center py-3 pl-4 pr-2 bg-gradient-to-r from-gray-900 from-40% to-[#8b303b] 
    text-gray-300 font-thin text-lg hover:from-neutral-400 hover:to-neutral-400 hover:text-neutral-900 w-72 ${borderRadiusClass}`}>
      <div className='flex items-center w-full'>
        <FontAwesomeIcon icon={icon} className='w-5 h-5' />
        <div className="ml-4 truncate w-full">{label}</div>
      </div>
      <FontAwesomeIcon icon={faCaretRight} className='w-7 h-7' />
    </Link>
  );
};

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

export default function MainLayout({ auth, children }: PageProps & { children: ReactNode }) {

  useEffect(() => {
    console.log('rerendered')
  }, [])
  return (
    <>
      <Head title="Welcome" />
      <div className="relative min-h-screen bg-gradient-to-b from-[#0b0d16] to-[#000313] selection:bg-red-500 selection:text-white z-10">
        <TopNav auth={auth} />

        <aside className="fixed top-6 left-6 z-40 w-72 h-screen">
          <div className="rounded-[16px] shadow-gray-950 shadow-2xl">
            <ul className="space-y-1 font-medium">
              {PLACEHOLDER_BUTTON_NAMES.map((btnName, i) => (
                <SidebarButton
                  key={`sidebar-main-btn-${i}`}
                  icon={faHome}
                  label={btnName}
                  href={`${i % 2 === 0 ? '/' : '/tools/monaco'}`}
                  isFirstChild={i === 0}
                  isLastChild={i === PLACEHOLDER_BUTTON_NAMES.length - 1}
                />
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className='ml-80 pt-6 min-h-screen flex-grow flex flex-col pr-4 text-neutral-300'>
          {children}
        </div>

      </div>
    </>
  );
}
