import { useState } from 'preact/hooks'
import type { BlogPostPreview } from '../../models/BlogPost'
import Button from '../Button'
import PostPreview from './PostPreview'
import styles from './PostsGrid.module.scss'

interface PostsGridProps {
  posts: BlogPostPreview[]
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
          <PostPreview key={post.id} {...post} />
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
