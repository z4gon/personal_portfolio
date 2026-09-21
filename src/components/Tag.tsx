import type { ComponentChildren } from 'preact'
import styles from './Tag.module.scss'
import classNames from '../utils/classNames'

interface TagProps {
  children?: ComponentChildren
  className?: string
  secondary?: boolean
  dark?: boolean
}

const Tag = ({
  children,
  className,
  secondary = false,
  dark = false,
}: TagProps) => (
  <span
    className={classNames(styles.tag, className, {
      [styles.dark]: dark,
      [styles.secondary]: secondary,
    })}
  >
    {children}
  </span>
)

export default Tag
