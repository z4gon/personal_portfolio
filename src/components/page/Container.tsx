import type { HTMLAttributes } from 'preact'
import classNames from '../../utils/classNames'
import styles from './Container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  className?: string
  wide?: boolean
}

const Container = ({
  children,
  className,
  wide = true,
  ...rest
}: ContainerProps) => (
  <main
    {...rest}
    className={classNames(
      styles.container,
      {
        [styles.wide]: wide,
        [styles.narrow]: !wide,
      },
      className,
    )}
  >
    {children}
  </main>
)

export default Container
