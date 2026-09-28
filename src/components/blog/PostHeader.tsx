import { authors } from '../../config'
import Avatar from './Avatar'
import DateFormatter from './DateFormatter'
import HeroImage from './HeroImage'
import PostTitle from './PostTitle'
import styles from './PostHeader.module.scss'

interface PostHeaderProps {
  title: string
  heroImageUrl: string
  heroImageCreditUrl?: string
  heroVideoUrl?: string
  date: string
  author: string
  excerpt: string
}

const PostHeader = ({
  title,
  heroImageUrl,
  heroImageCreditUrl = '',
  heroVideoUrl = '',
  date,
  author,
  excerpt,
}: PostHeaderProps) => {
  const authorData = authors[author]

  return (
    <div className={styles.postHeader}>
      <PostTitle>{title}</PostTitle>
      <div className={styles.authorAndDate}>
        <Avatar name={authorData.name} pictureUrl={authorData.pictureUrl} />
        <DateFormatter dateString={date} includeDay />
      </div>
      {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
      {heroVideoUrl ? (
        <video muted playsInline controls className={styles.heroVideo}>
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
      ) : (
        <HeroImage
          title={title}
          imageUrl={heroImageUrl}
          imageCreditUrl={heroImageCreditUrl}
          className={styles.picture}
        />
      )}
    </div>
  )
}

export default PostHeader
