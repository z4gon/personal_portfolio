import type { FunctionalComponent, ComponentChildren } from 'preact'
import styles from './ExternalLink.module.scss'
import ExternalLinkIcon from '../icons/ExternalLinkIcon'
import classNames from '../../utils/classNames'
import Link from './Link'

interface ExternalLinkProps {
  href: string
  className?: string
  Icon?: FunctionalComponent<{ className?: string }>
  children: ComponentChildren
}

const ExternalLink = ({
  href,
  className,
  Icon,
  children,
}: ExternalLinkProps) => {
  return (
    <Link
      href={href}
      newTab
      className={classNames(styles.externalLink, className)}
    >
      {children}
      {Icon ? (
        <Icon className={styles.iconSvg} />
      ) : (
        <ExternalLinkIcon className={styles.iconSvg} />
      )}
    </Link>
  )
}

export default ExternalLink
