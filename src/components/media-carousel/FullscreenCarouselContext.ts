import { createContext } from 'preact'

export interface FullscreenCarouselContextValue {
  urls: string[]
  currentIndex: number | null
  open: (urls: string[], currentIndex: number) => void
  next: () => void
  previous: () => void
  close: () => void
}

const defaultValue: FullscreenCarouselContextValue = {
  urls: [],
  currentIndex: null,
  open: () => {},
  next: () => {},
  previous: () => {},
  close: () => {},
}

const FullscreenCarouselContext = createContext(defaultValue)

export default FullscreenCarouselContext
