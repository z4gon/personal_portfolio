import type { ComponentChildren } from 'preact'
import { classNames } from '../../utils/classNames'
import styles from './ProjectDetailsSection.module.scss'

interface ProjectDetailsSectionProps {
  children: ComponentChildren
  title?: string
  className?: string
  mobileFullWidth?: boolean
}

const ProjectDetailsSection = ({
  children,
  title,
  className,
  mobileFullWidth = false,
}: ProjectDetailsSectionProps) => (
  <section
    className={classNames(
      styles.section,
      { [styles.mobileFullWidth]: mobileFullWidth },
      className,
    )}
  >
    {title && <h2 className={styles.sectionTitle}>{title}</h2>}
    {children}
  </section>
)

export default ProjectDetailsSection
