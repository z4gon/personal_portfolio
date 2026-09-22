import { useState } from 'preact/hooks'
import type { ProjectPreview } from '../../models/Project'
import Button from '../Button'
import ProjectCard from './ProjectCard'
import styles from './ProjectsGrid.module.scss'

interface ProjectsGridProps {
  title?: string
  projects: ProjectPreview[]
  pageSize?: number
  pageJump?: number
}

const PAGE_SIZE = 12
const PAGE_JUMP = 2

const ProjectsGrid = ({
  title,
  projects,
  pageSize = PAGE_SIZE,
  pageJump = PAGE_JUMP,
}: ProjectsGridProps) => {
  const [page, setPage] = useState(0)

  const hasNext = projects.length > (page + 1) * pageSize

  const loadMore = () => {
    if (!hasNext) {
      return
    }

    setPage((currentPage) => currentPage + pageJump)
  }

  if (projects.length == 0) {
    return null
  }

  const thumbnailsShowing = projects.slice(0, (page + 1) * pageSize)

  return (
    <div className={styles.gridWrapper}>
      {title && (
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.projectCount}>{`${projects.length} project${
            projects.length > 1 ? 's' : ''
          }`}</span>
        </div>
      )}

      <div className={styles.grid}>
        {thumbnailsShowing.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {hasNext && (
        <div className={styles.actions}>
          <p>{`Showing ${thumbnailsShowing.length} of ${projects.length}`}</p>
          <Button onClick={() => loadMore()}>Show More</Button>
        </div>
      )}
    </div>
  )
}

export default ProjectsGrid
