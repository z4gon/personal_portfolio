import { useRef, useState } from 'preact/hooks'
import classNames from '../../utils/classNames'
import OpenFullscreenImageButton from './OpenFullscreenImageButton'
import FullscreenImageCarouselProvider from './FullscreenImageCarouselProvider'
import styles from './MultimediaCarousel.module.scss'

interface MultimediaCarouselProps {
  imagesUrls?: string[]
  videosUrls?: string[]
  autoPlayVideos?: boolean
}

enum SlideType {
  Video = 'video',
  Image = 'image',
}

type Slide = { type: SlideType; url: string; index: number }

const buildSlideKey = (slide: Slide, index: number) =>
  `${slide.type}:${slide.url}:${index}`

interface VideoSlideProps {
  url: string
  autoPlay: boolean
}

const VideoSlide = ({ url, autoPlay }: VideoSlideProps) => (
  <video autoPlay={autoPlay} preload="metadata" loop muted playsInline controls>
    <source src={url} type="video/mp4" />
  </video>
)

interface ImageSlideProps {
  url: string
  index: number
  fullscreenImagesUrls: string[]
}

const ImageSlide = ({ url, index, fullscreenImagesUrls }: ImageSlideProps) => (
  <div
    className={styles.image}
    style={{ backgroundImage: `url(${url})` }}
    role="group"
    aria-label={`Project image ${index + 1}`}
  >
    <OpenFullscreenImageButton
      imagesUrls={fullscreenImagesUrls}
      imageIndex={index}
    />
  </div>
)

enum Direction {
  Previous = 'previous',
  Next = 'next',
}

interface ArrowButtonProps {
  direction: Direction
  onGoToRelativeSlide: (idxOffset: number) => void
}

const ArrowButton = ({ direction, onGoToRelativeSlide }: ArrowButtonProps) => {
  const isPrevious = direction === Direction.Previous

  return (
    <button
      className={classNames(styles.arrow, styles[direction])}
      type="button"
      aria-label={isPrevious ? 'Previous slide' : 'Next slide'}
      onClick={() => onGoToRelativeSlide(isPrevious ? -1 : 1)}
    >
      <img src="/img/ui/chevron-right-icon.png" alt="" aria-hidden="true" />
    </button>
  )
}

interface SlideDotsProps {
  slides: Slide[]
  activeIndex: number
  onSelect: (index: number) => void
}

const SlideDots = ({ slides, activeIndex, onSelect }: SlideDotsProps) => (
  <div className={styles.dots} aria-label="Choose a slide">
    {slides.map((slide, index) => (
      <button
        className={classNames(styles.dot, {
          [styles.active]: activeIndex === index,
        })}
        type="button"
        aria-label={`Go to slide ${index + 1}`}
        aria-current={activeIndex === index ? 'true' : undefined}
        onClick={() => onSelect(index)}
        key={buildSlideKey(slide, index)}
      />
    ))}
  </div>
)

const MultimediaCarouselContent = ({
  imagesUrls = [],
  videosUrls = [],
  autoPlayVideos = false,
}: MultimediaCarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const slides: Slide[] = [
    ...videosUrls.map((url, index) => ({ type: SlideType.Video, url, index })),
    ...imagesUrls.map((url, index) => ({ type: SlideType.Image, url, index })),
  ]

  if (slides.length === 0) {
    return null
  }

  const goToSlide = (index: number) => {
    const viewport = viewportRef.current
    const slide = viewport?.children[index] as HTMLElement | undefined

    if (!viewport || !slide) {
      return
    }

    const slideLeftEdgeXCoord = slide.getBoundingClientRect().left
    const viewportLeftEdgeXCoord = viewport.getBoundingClientRect().left
    const viewportLeftBorderWidth = viewport.clientLeft
    const viewportScrollLeftAmount = viewport.scrollLeft
    const left =
      slideLeftEdgeXCoord -
      viewportLeftEdgeXCoord -
      viewportLeftBorderWidth +
      viewportScrollLeftAmount

    viewport.scrollTo({ left, behavior: 'smooth' })
    setActiveIndex(index)
  }

  const goToRelativeSlide = (idxOffset: number) => {
    goToSlide((activeIndex + idxOffset + slides.length) % slides.length)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport} ref={viewportRef}>
        {slides.map((slide, slideIndex) => (
          <div className={styles.slide} key={buildSlideKey(slide, slideIndex)}>
            {slide.type === SlideType.Video ? (
              <VideoSlide
                url={slide.url}
                autoPlay={slide.index === 0 || autoPlayVideos}
              />
            ) : (
              <ImageSlide
                url={slide.url}
                index={slide.index}
                fullscreenImagesUrls={imagesUrls}
              />
            )}
            {/* Slide position for screen readers */}
            <span className={styles.visuallyHidden}>
              Slide {slideIndex + 1} of {slides.length}
            </span>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <ArrowButton
            direction={Direction.Previous}
            onGoToRelativeSlide={goToRelativeSlide}
          />
          <ArrowButton
            direction={Direction.Next}
            onGoToRelativeSlide={goToRelativeSlide}
          />
          <SlideDots
            slides={slides}
            activeIndex={activeIndex}
            onSelect={goToSlide}
          />
        </>
      )}
    </div>
  )
}

const MultimediaCarousel = (props: MultimediaCarouselProps) => (
  <FullscreenImageCarouselProvider>
    <MultimediaCarouselContent {...props} />
  </FullscreenImageCarouselProvider>
)

export default MultimediaCarousel
