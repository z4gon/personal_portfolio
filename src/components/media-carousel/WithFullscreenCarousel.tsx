import type { ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'
import FullscreenCarouselContext from './FullscreenCarouselContext'
import FullscreenCarousel from './FullscreenCarousel'

interface WithFullscreenCarouselProps {
  children: ComponentChildren
}

const WithFullscreenCarousel = ({ children }: WithFullscreenCarouselProps) => {
  const [urls, setUrls] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const context = {
    urls,
    currentIndex,
    open: (imageUrls: string[], index: number) => {
      setUrls(imageUrls)
      setCurrentIndex(index)
    },
    next: () => {
      setCurrentIndex((index) =>
        index === null ? null : (index + 1) % urls.length,
      )
    },
    previous: () => {
      setCurrentIndex((index) =>
        index === null ? null : (index - 1 + urls.length) % urls.length,
      )
    },
    close: () => {
      setUrls([])
      setCurrentIndex(null)
    },
  }

  return (
    <FullscreenCarouselContext.Provider value={context}>
      {children}
      <FullscreenCarousel />
    </FullscreenCarouselContext.Provider>
  )
}

export default WithFullscreenCarousel
