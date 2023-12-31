import React from 'react'

export type TrackCardProps = {
  price: number
  badge: string
  bpm: number
  hasAd: boolean
  beatName: string
  author: string
  image: string
}

const TrackCard = ({ price, badge, bpm, hasAd, beatName, author, image }: TrackCardProps) => {
  return (
    <div className="w-full cursor-pointer overflow-hidden rounded-lg border border-transparent p-3 hover:border-neutral-700 hover:bg-neutral-600 hover:bg-opacity-25">
      {/* Image */}
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-neutral-800">
        <img src={image} className="w-full object-cover" />
      </div>
      {/* Text content */}
      <div className="py-2">
        {/* 1st row */}
        <div className="flex items-center justify-start gap-1 overflow-hidden text-sm font-medium sm:text-base">
          <div className="overflow-hidden whitespace-nowrap text-blue-500">€{price}</div>
          {badge && (
            <div className="badge overflow-hidden whitespace-nowrap bg-orange-500 bg-opacity-20 text-[0.6rem] font-light text-orange-400">
              {badge}
            </div>
          )}
          <div className="text-neutral-400">·</div>
          <div className="overflow-hidden whitespace-nowrap text-neutral-400 opacity-90">{bpm} BPM</div>
        </div>
        {/* 2nd row */}
        <div className="flex items-center justify-start gap-2 overflow-hidden">
          {hasAd && (
            <div className="font-neutral-500 badge rounded-md border-none bg-neutral-700 bg-opacity-50 px-1.5 text-[0.55rem]">
              AD
            </div>
          )}
          <div className="truncate text-lg font-extrabold text-neutral-200">{beatName}</div>
        </div>
        {/* 3rd row */}
        <div className="truncate font-normal text-neutral-400 opacity-90">{author}</div>
      </div>
    </div>
  )
}

export default TrackCard
