import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import image from '../../../images/Pages/Welcome/GetStartCTA/cta-cover.png'

type CheckListItemType = {
  heading: string
  description: string
}

const checkListItems: CheckListItemType[] = [
  {
    heading: 'Dive into a vast sea of premium beats',
    description:
      'Explore a curated collection of over beats, crafted by a diverse network of talented producers nearby.',
  },
  {
    heading: 'Effortless Genre Browsing and Checkout',
    description:
      'Navigate through an array of genres and secure your choice of beats without complication, all on one unified platform.',
  },
  {
    heading: 'Join a Community of Fellow Artists',
    description:
      "Connect with our supportive staff and collaborate with artists who share your passion. You're not alone on this journey.",
  },
]

const ChecklistItem = ({ heading, description }: CheckListItemType) => (
  <div className="flex mb-4">
    <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 w-7 h-7 mr-4" />
    <div>
      <h2 className="text-2xl font-bold pb-1">{heading}</h2>
      <p className="text-neutral-400 font-medium">{description}</p>
    </div>
  </div>
)

const GetStartedCTA = () => {
  return (
    <div className="bg-gradient-to-b from-purple-950 to-black text-white py-16">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 px-2 flex flex-col-reverse">
        {/* Left section - CTA text */}
        <div className="flex flex-col lg:pr-10">
          <h1 className="text-4xl font-bold pb-6">Begin Your Journey in Music</h1>

          {checkListItems.map((item, i) => (
            <ChecklistItem
              heading={item.heading}
              description={item.description}
              key={`get-started-cta-checklist-item-${i}`}
            />
          ))}

          <button className="btn w-fit lg:ml-10 bg-pink-600 hover:bg-pink-500 text-white py-2 px-4 rounded-md transition">
            Get started
          </button>
        </div>

        {/* Right section - Image */}
        <div className="relative w-full h-full overflow-hidden rounded-lg mb-8">
          <img src={image} className="w-full h-fit lg:h-[calc(100%-64px)] object-cover rounded-lg" />
          <div
            className="absolute top-0 right-0 bottom-0 lg:bottom-16 left-0 border border-neutral-800 rounded-lg"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.3) 10%, transparent 45%, transparent 83%, rgba(0,0,0,0.6) 100%)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedCTA
