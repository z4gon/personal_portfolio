import classNames from '../../utils/classNames'
import type { Author } from '../../models/Author'
import Link from '../link/Link'
import Avatar from './Avatar'
import DateFormatter from './DateFormatter'
import styles from './PostPreview.module.scss'

interface PostPreviewProps {
  isHero?: boolean
  title: string
  heroImageUrl: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  isHero = false,
  title,
  heroImageUrl,
  date,
  author,
  slug,
}: PostPreviewProps) => {
  return (
    <section
      className={classNames(styles.postPreview, {
        [styles.hero]: isHero,
      })}
    >
      <div className={styles.imageWrapper}>
        <Link href={`/blog/${slug}`} aria-label={title}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${heroImageUrl})` }}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <div className={styles.authorAndDate}>
          <Avatar name={author.name} pictureUrl={author.pictureUrl} small />
          <DateFormatter dateString={date} />
        </div>
      </div>
    </section>
  )
}

export default PostPreview
