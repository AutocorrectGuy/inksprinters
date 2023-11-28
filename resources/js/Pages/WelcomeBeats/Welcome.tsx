import { Head } from '@inertiajs/react'
import { WindowUtilsProvider } from '@/Contexts/WindowUtilsContext'
import NavMain from '@/Components/NavQuest/NavMain'
import HeroBanner from './HeroBanner'
import TrendingTracksSlider from './TrendingTracksSlider'

// Logo images for `HorizontalScroller` component

import PoweredByScroller from './PoweredByScroller'
import GetStartedCTA from './GetStartedCTA'

export default function Welcome() {
  return (
    <WindowUtilsProvider>
      <Head title="Welcome" />
      <NavMain />

      {/* Page content */}
      <HeroBanner />
      <TrendingTracksSlider />
      <PoweredByScroller />
      <GetStartedCTA />
    </WindowUtilsProvider>
  )
}
