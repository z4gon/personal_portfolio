import type { BlogPostPreview } from '../../models/BlogPost'
import { authors } from '../../config'
import Link from '../link/Link'
import Avatar from './Avatar'
import DateFormatter from './DateFormatter'
import styles from './PostPreview.module.scss'

type PostPreviewProps = BlogPostPreview

const PostPreview = ({
  title,
  heroImageUrl,
  date,
  author,
  id,
}: PostPreviewProps) => {
  const authorData = authors[author]

  return (
    <section className={styles.postPreview}>
      <div className={styles.imageWrapper}>
        <Link href={`/blog/${id}`} aria-label={title}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${heroImageUrl})` }}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>
          <Link href={`/blog/${id}`}>{title}</Link>
        </h3>
        <div className={styles.authorAndDate}>
          <Avatar
            name={authorData.name}
            pictureUrl={authorData.pictureUrl}
            small
          />
          <DateFormatter dateString={date} />
        </div>
      </div>
    </section>
  )
}

export default PostPreview
