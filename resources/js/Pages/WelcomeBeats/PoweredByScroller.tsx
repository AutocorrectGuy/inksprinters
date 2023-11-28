import React from 'react'


import logoDaisy from '../../../images/Pages/Welcome/PoweredBy logos/daisyui-logo-white.png'
import logoHostinger from '../../../images/Pages/Welcome/PoweredBy logos/hostinger-logo-white.png'
import logoInertia from '../../../images/Pages/Welcome/PoweredBy logos/inertia-logo-white.png'
import logoJetstream from '../../../images/Pages/Welcome/PoweredBy logos/jetstream-logo-white.png'
import logoLaravel from '../../../images/Pages/Welcome/PoweredBy logos/laravel-logo-white.png'
import logoReact from '../../../images/Pages/Welcome/PoweredBy logos/react-logo-white.png'
import logoRedis from '../../../images/Pages/Welcome/PoweredBy logos/redis-logo-white.png'
import logoStripe from '../../../images/Pages/Welcome/PoweredBy logos/stripe-logo-white.png'
import logoTailwind from '../../../images/Pages/Welcome/PoweredBy logos/tailwind-logo-white.png'
import HorizontalScroller from '@/Components/HorizontalScroller'

const PoweredByScroller = () => {
  return (
    <div className='w-full pt-4 bg-black'>
      <h3 className='text-neutral-400 font-semibold text-center'>Powered by</h3>
      <HorizontalScroller
        name="poweredBy"
        imgClassName="py-8 opacity-50"
        containerClassName="w-full"
        scrollSpeed={100}
        height={95}
        images={[
          logoDaisy,
          logoHostinger,
          logoInertia,
          logoJetstream,
          logoLaravel,
          logoReact,
          logoRedis,
          logoStripe,
          logoTailwind,
        ]}
      />
    </div>
  )
}

export default PoweredByScroller
