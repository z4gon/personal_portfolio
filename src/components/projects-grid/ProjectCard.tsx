import type { ProjectPreview } from '../../models/Project'
import Link from '../link/Link'
import styles from './ProjectCard.module.scss'

type ProjectCardProps = ProjectPreview

const ProjectCard = ({
  id,
  thumbnailUrl,
  title,
  technology,
}: ProjectCardProps) => {
  return (
    <Link href={`/project/${id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.thumbnailContainer}>
          <video autoPlay loop muted playsInline className={styles.thumbnail}>
            <source src={thumbnailUrl} type="video/mp4" />
          </video>
        </div>

        <div className={styles.information}>
          {technology && (
            <img
              className={styles.technology}
              src={`/img/technologies/${technology}.png`}
              alt={technology}
            />
          )}
          <h2 className={styles.title}>{title}</h2>
        </div>
      </article>
    </Link>
  )
}

export default ProjectCard
