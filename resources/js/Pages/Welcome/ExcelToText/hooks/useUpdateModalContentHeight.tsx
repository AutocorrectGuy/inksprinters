import { useState, useEffect, RefObject } from 'react'

const MODAL_PADDING = 24 // Default padding for modal-box from Daisy-ui (one-side)

const useUpdateModalContentHeight = (headerRef: RefObject<HTMLHeadingElement>) => {
  const [contentHeight, setContentHeight] = useState(0)

  const updateContentHeight = () => {
    if (!headerRef.current) return
    const headerHeight = headerRef.current.clientHeight
    setContentHeight(window.innerHeight - 100 - headerHeight - MODAL_PADDING * 2)
  }

  useEffect(() => {
    window.addEventListener('resize', updateContentHeight)
    updateContentHeight() // Initial calculation

    return () => {
      window.removeEventListener('resize', updateContentHeight)
    }
  }, [headerRef, MODAL_PADDING])

  return contentHeight
}

export default useUpdateModalContentHeight
