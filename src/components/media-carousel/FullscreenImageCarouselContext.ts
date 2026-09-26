import { createContext } from 'preact'

export interface FullscreenImageCarouselContextValue {
  imagesUrls: string[]
  currentIndex: number | null
  open: (imagesUrls: string[], currentIndex: number) => void
  next: () => void
  previous: () => void
  close: () => void
}

const defaultValue: FullscreenImageCarouselContextValue = {
  imagesUrls: [],
  currentIndex: null,
  open: () => {},
  next: () => {},
  previous: () => {},
  close: () => {},
}

const FullscreenImageCarouselContext = createContext(defaultValue)

export default FullscreenImageCarouselContext
