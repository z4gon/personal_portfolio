import { useState } from 'preact/hooks'
import type { Author } from '../../models/Author'
import Button from '../Button'
import PostPreview from './PostPreview'
import styles from './PostsGrid.module.scss'

export interface BlogPostPreviewData {
  slug: string
  title: string
  date: string
  author: Author
  excerpt: string
  heroImageUrl: string
}

interface PostsGridProps {
  posts: BlogPostPreviewData[]
}

const PAGE_SIZE = 20

const PostsGrid = ({ posts }: PostsGridProps) => {
  const [page, setPage] = useState(0)
  const hasNext = posts.length > (page + 1) * PAGE_SIZE

  if (posts.length === 0) {
    return null
  }

  const previewsShowing = posts.slice(0, (page + 1) * PAGE_SIZE)

  return (
    <section className={styles.postsGrid}>
      <div className={styles.grid}>
        {previewsShowing.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
      {hasNext && (
        <div className={styles.actions}>
          <p>{`Showing ${previewsShowing.length} of ${posts.length}`}</p>
          <Button onClick={() => setPage((currentPage) => currentPage + 1)}>
            Show More
          </Button>
        </div>
      )}
    </section>
  )
}

export default PostsGrid
