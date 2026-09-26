import { useContext } from 'preact/hooks'
import FullscreenCarouselContext from './FullscreenCarouselContext'
import styles from './FullscreenCarousel.module.scss'

const FullscreenCarousel = () => {
  const {
    urls = [],
    currentIndex,
    close,
    next,
    previous,
  } = useContext(FullscreenCarouselContext)

  if (currentIndex === null || urls.length === 0) {
    return null
  }

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div
        style={{ backgroundImage: `url(${urls[currentIndex]})` }}
        className={styles.image}
        // hack to make div listen to on key down
        tabIndex={0}
        role="group"
        aria-label={`Image ${currentIndex + 1} of ${urls.length}`}
        onKeyDown={(event) => {
          // on next
          if (event.key === 'ArrowRight') {
            next()
          }
          // on previous
          if (event.key === 'ArrowLeft') {
            previous()
          }
          // on esc
          if (event.key === 'Escape') {
            close()
          }
        }}
      >
        <button
          className={styles.closeButton}
          type="button"
          aria-label="Close image viewer"
          onClick={close}
        >
          <img src="/img/ui/close-icon.png" alt="" aria-hidden="true" />
        </button>

        <button
          className={styles.nextButton}
          type="button"
          aria-label="Next image"
          onClick={next}
        >
          <img src="/img/ui/chevron-right-icon.png" alt="" aria-hidden="true" />
        </button>

        <button
          className={styles.previousButton}
          type="button"
          aria-label="Previous image"
          onClick={previous}
        >
          <img src="/img/ui/chevron-right-icon.png" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default FullscreenCarousel
