import type { ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'
import FullscreenImageCarouselContext from './FullscreenImageCarouselContext'
import FullscreenImageCarousel from './FullscreenImageCarousel'

interface WithFullscreenImageCarouselProps {
  children: ComponentChildren
}

const WithFullscreenImageCarousel = ({
  children,
}: WithFullscreenImageCarouselProps) => {
  const [imagesUrls, setImagesUrls] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const context = {
    imagesUrls,
    currentIndex,
    open: (imagesUrls: string[], index: number) => {
      setImagesUrls(imagesUrls)
      setCurrentIndex(index)
    },
    next: () => {
      setCurrentIndex((index) =>
        index === null ? null : (index + 1) % imagesUrls.length,
      )
    },
    previous: () => {
      setCurrentIndex((index) =>
        index === null
          ? null
          : (index - 1 + imagesUrls.length) % imagesUrls.length,
      )
    },
    close: () => {
      setImagesUrls([])
      setCurrentIndex(null)
    },
  }

  return (
    <FullscreenImageCarouselContext.Provider value={context}>
      {children}
      <FullscreenImageCarousel />
    </FullscreenImageCarouselContext.Provider>
  )
}

export default WithFullscreenImageCarousel
