import { useContext } from 'preact/hooks'
import FullscreenCarouselContext from './FullscreenCarouselContext'
import styles from './GoFullscreenButton.module.scss'

interface GoFullscreenButtonProps {
  imagesUrls: string[]
  imageIndex: number
}

const GoFullscreenButton = ({
  imagesUrls,
  imageIndex,
}: GoFullscreenButtonProps) => {
  const { open } = useContext(FullscreenCarouselContext)

  return (
    <button
      className={styles.openButton}
      type="button"
      aria-label="View image fullscreen"
      onClick={() => open(imagesUrls, imageIndex)}
    >
      <img src="/img/ui/full-screen-icon.png" alt="" aria-hidden="true" />
    </button>
  )
}

export default GoFullscreenButton
