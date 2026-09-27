import type { ComponentChildren } from 'preact'
import type { Author } from '../../models/Author'
import PostHeader from './PostHeader'
import styles from './Post.module.scss'

interface BlogPostData {
  slug: string
  title: string
  date: string
  author: Author
  excerpt: string
  heroImageUrl: string
  heroImageCreditUrl: string
  heroVideoUrl?: string
}

interface PostProps {
  post: BlogPostData
  children: ComponentChildren
}

const Post = ({ post, children }: PostProps) => {
  return (
    <article>
      <PostHeader
        title={post.title}
        excerpt={post.excerpt}
        heroImageUrl={post.heroImageUrl}
        heroImageCreditUrl={post.heroImageCreditUrl}
        heroVideoUrl={post.heroVideoUrl}
        date={post.date}
        author={post.author}
      />
      <div className={styles.markdownContent}>{children}</div>
    </article>
  )
}

export default Post
