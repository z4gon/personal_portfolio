import { useContext } from 'preact/hooks'
import FullscreenImageCarouselContext from './FullscreenImageCarouselContext'
import styles from './OpenFullscreenImageButton.module.scss'

interface OpenFullscreenImageButtonProps {
  imagesUrls: string[]
  imageIndex: number
}

const OpenFullscreenImageButton = ({
  imagesUrls,
  imageIndex,
}: OpenFullscreenImageButtonProps) => {
  const { open } = useContext(FullscreenImageCarouselContext)

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

export default OpenFullscreenImageButton
