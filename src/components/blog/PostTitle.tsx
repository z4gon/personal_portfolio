import type { ComponentChildren } from 'preact'
import styles from './PostTitle.module.scss'

interface PostTitleProps {
  children?: ComponentChildren
}

const PostTitle = ({ children }: PostTitleProps) => (
  <h1 className={styles.postTitle}>{children}</h1>
)

export default PostTitle
