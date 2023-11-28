import React, { useState, useEffect, useRef } from 'react'

type HorizontalScrollerProps = {
  images: string[]
  name: string
  height?: number
  scrollSpeed?: number
  imgClassName?: string
  containerClassName?: string
}

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  images,
  name,
  height = 100,
  scrollSpeed = 100,
  imgClassName = '',
  containerClassName = 'mx-auto max-w-7xl w-full bg-black',
}) => {
  const [scrollerWidth, setScrollerWidth] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (trackRef.current) {
      const totalWidth = Array.from(trackRef.current.children).reduce((total, child, index, array) => {
        return total + child.getBoundingClientRect().width + (index !== array.length - 1 ? 80 : 0) // 80px is the margin-right
      }, 0)

      setScrollerWidth(totalWidth)
    }
  }, [images])

  // Duplicate the images array to create an infinite effect
  const duplicatedImages = [...images, ...images]

  // Calculate the animation duration based on the total width
  const animationDuration = scrollerWidth / scrollSpeed // Adjust the speed factor as needed

  return (
    <div className={`overflow-hidden ${containerClassName}`}>
      <div
        ref={trackRef}
        className="flex"
        style={{
          width: `${scrollerWidth}px`,
          animation: `scroll ${animationDuration}s linear infinite`,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`horizontal_scroller_${name}_${index}`}
            className={`flex-none ${index !== duplicatedImages.length - 1 ? 'mr-20' : ''}`}
            style={{ height: `${height}px` }}
          >
            <img src={image} alt={`Image ${index}`} className={`w-auto h-full object-cover ${imgClassName}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalScroller
