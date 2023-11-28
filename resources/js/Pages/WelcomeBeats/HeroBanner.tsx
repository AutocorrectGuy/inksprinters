import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { WindowUtilsContext } from '@/Contexts/WindowUtilsContext'
import heroImage from '../../../images/Pages/Welcome/HeroBanner/hero-girl-1.png'

const data = {
  heroText: 'Your first hit starts here',
  trending: ['drill', 'afrobeat', 'dancehall', 'drake type beat'],
  song: {
    song: 'Neon Shadows',
    artist: 'SynthRazor',
    beatType: 'Cyber-Trap x type beat',
  },
}

// Sets random color to the banner backgroound
const rand = Math.random() * 20 + 10 // 10 - 29
const bgColor = `${rand}, ${rand}, ${rand + 5}`

const HeroBanner = () => {
  const { isDesktopWidth, windowDimensions } = useContext(WindowUtilsContext)
  const dynamicHeight = isDesktopWidth ? `${windowDimensions.height * 0.75}px` : '340px'

  return (
    <div className="relative w-full" style={{ backgroundColor: `rgb(${bgColor}, 1)`, height: dynamicHeight }}>
      <div
        style={{
          backgroundImage: `${
            isDesktopWidth
              ? `linear-gradient(90deg, rgb(${bgColor}, 1) 10%, transparent 45%, transparent 83%, rgb(${bgColor}, 1) 100%), url(${heroImage})`
              : `linear-gradient(180deg, rgb(${bgColor}, 0.8) 0%, rgb(${bgColor}, 0.5) 70%, rgb(${bgColor}, 1) 95%), url(${heroImage})`
          }`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 40%',
          width: `${isDesktopWidth ? '50%' : '100%'}`,
          height: `${isDesktopWidth ? `${window.innerHeight * 0.75}px` : '340px'}`,
          position: 'absolute',
          right: '0',
          top: '0',
        }}
      />

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full flex items-center justify-start max-w-7xl">
        <div className="text-white text-xl w-full lg:w-2/3 flex flex-col gap-8 px-4 sm:px-2 xl:px-0">
          {/* Master heading */}
          <h1 className="uppercase text-3xl text-center lg:text-5xl sm:text-left text-white tracking-tighter font-semibold overflow-hidden">
            {data.heroText}
          </h1>

          {/* Input field */}
          <div className="flex justify-start text-neutral-700 bg-white rounded-lg w-full max-w-2xl text-lg lg:text-xl">
            <button className="px-2 lg:px-5">
              <FontAwesomeIcon icon={faSearch} className="text" />
            </button>
            <input
              type="text"
              placeholder="Explore new stuff - search for beats or producers"
              className="px-2 py-3 min-w-0 lg:py-6 bg-transparent grow placeholder:text-sm lg:placeholder:text-xl placeholder:-translate-y-[2px] lg:placeholder:-translate-y-0 placeholder:text-neutral-400 border-0 focus:outline-none focus:ring-0 text-sm lg:text-xl font-normal"
            />
            <button className="px-2 lg:px-5 font-semibold text-sm lg:text-lg overflow-hidden">Search</button>
          </div>

          {/* Trending list*/}
          <div className="flex flex-wrap">
            <div className="mr-3 whitespace-nowrap overflow-hidden mb-3 text-sm md:text-lg">
              What is trending right now:
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {data.trending.map((item, index) => (
                <button
                  key={index}
                  className="badge text-xs sm:text-sm border-2 border-neutral-700 bg-neutral-800 hover:bg-neutral-700 cursor-pointer p-4 text-white font-semibold whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Current Beat */}
        {isDesktopWidth && windowDimensions.height > 640 && (
          <div className="block absolute right-0 bottom-14 text-white font-bold text-3xl uppercase text-right rounded-xl p-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <div className="flex gap-4 bg-neutral-700 bg-opacity-25 rounded-lg px-2">
              <div>{data.song.artist}</div>
              <div>|</div>
              <div>{data.song.song}</div>
            </div>
            <div className="bg-neutral-700 bg-opacity-25 rounded-lg px-2 w-fit float-right">{data.song.beatType}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroBanner
