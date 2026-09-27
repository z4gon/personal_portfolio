import classNames from '../../utils/classNames'
import Link from '../link/Link'
import styles from './HeroImage.module.scss'

interface HeroImageProps {
  title: string
  imageUrl: string
  imageCreditUrl?: string
  className?: string
}

const HeroImage = ({
  title,
  imageUrl,
  imageCreditUrl,
  className,
}: HeroImageProps) => (
  <div className={classNames(styles.heroImage, className)}>
    <img src={imageUrl} alt={`Cover image for ${title}`} />
    {imageCreditUrl && (
      <Link href={imageCreditUrl} newTab>
        Image credit 🔗
      </Link>
    )}
  </div>
)

export default HeroImage
