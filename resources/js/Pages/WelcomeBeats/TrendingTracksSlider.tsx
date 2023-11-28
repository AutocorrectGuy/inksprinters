import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import TrackCard, { TrackCardProps } from '@/Components/TrackCard'

import artwork1 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (1).png'
import artwork2 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (2).png'
import artwork3 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (3).png'
import artwork4 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (4).png'
import artwork5 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (5).png'
import artwork6 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (6).png'
import artwork7 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (7).png'
import artwork8 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (8).png'
import artwork9 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (9).png'
import artwork10 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (10).png'
import artwork11 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (11).png'
import artwork12 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (12).png'

import { useContext } from 'react'
import { WindowUtilsContext } from '@/Contexts/WindowUtilsContext'

const TrendingTracksSlider = () => {
  const { isDesktopWidth } = useContext(WindowUtilsContext)

  const tracksDummyData: TrackCardProps[] = [
    {
      price: 70,
      badge: 'NEW',
      bpm: 130,
      hasAd: true,
      beatName: 'Summer Groove',
      author: 'Beach Vibes',
      image: artwork1,
    },
    {
      price: 75,
      badge: 'FEATURED',
      bpm: 100,
      hasAd: false,
      beatName: 'Neon City',
      author: 'Urban Dreams',
      image: artwork2,
    },
    {
      price: 60,
      badge: 'CLASSIC',
      bpm: 128,
      hasAd: true,
      beatName: 'Sunset Melody',
      author: 'Calm Waves',
      image: artwork3,
    },
    {
      price: 85,
      badge: 'HYPE',
      bpm: 140,
      hasAd: true,
      beatName: 'Vibrant Echoes',
      author: 'Artistic Soul',
      image: artwork4,
    },
    {
      price: 55,
      badge: 'TRENDING',
      bpm: 125,
      hasAd: false,
      beatName: 'Night Show',
      author: 'The Soloist',
      image: artwork5,
    },
    {
      price: 50,
      badge: 'HOT',
      bpm: 120,
      hasAd: false,
      beatName: 'Apocalyptic Strings',
      author: 'DJ Strato',
      image: artwork6,
    },
    {
      price: 65,
      badge: 'FIRE',
      bpm: 110,
      hasAd: false,
      beatName: 'Battle Cry',
      author: 'Epic Sound',
      image: artwork7,
    },
    {
      price: 80,
      badge: 'EXCLUSIVE',
      bpm: 95,
      hasAd: true,
      beatName: 'Rap Anthem',
      author: 'MC Rhymes',
      image: artwork8,
    },
    {
      price: 99,
      badge: 'ELECTRO',
      bpm: 128,
      hasAd: true,
      beatName: 'Retro Wave',
      author: 'DJ Pixel',
      image: artwork9,
    },
    {
      price: 150,
      badge: 'RAP',
      bpm: 90,
      hasAd: false,
      beatName: 'Street Verse',
      author: 'MC Lyricist',
      image: artwork10,
    },
    {
      price: 120,
      badge: 'CHILL',
      bpm: 100,
      hasAd: false,
      beatName: 'Urban Sunset',
      author: 'Soul Beats',
      image: artwork11,
    },
    {
      price: 200,
      badge: 'HYPE',
      bpm: 140,
      hasAd: true,
      beatName: 'Hyper Flow',
      author: 'Rap Machine',
      image: artwork12,
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Min-width 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // Min-width 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1400, // Min-width 1024px
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 2000, // Min-width 1024px
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          arrows: true,
        },
      },
    ],
  }

  return (
    <div className="pt-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto text-white">
        <h1 className="font-bold text-3xl pb-4 px-2">Trending tracks</h1>
        <Slider {...settings} touchThreshold={100}>
          {tracksDummyData.map((track, i) => (
            <span key={`trending-track-card-${i}`}>
              <TrackCard {...track} />
            </span>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TrendingTracksSlider
