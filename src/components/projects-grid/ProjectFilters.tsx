import { useEffect, useState } from 'preact/hooks'
import type { ProjectPreview } from '../../models/Project'
import SearchIcon from '../icons/SearchIcon'
import styles from './ProjectFilters.module.scss'

interface ProjectFiltersProps {
  allProjects: ProjectPreview[]
  // eslint-disable-next-line unused-imports/no-unused-vars
  onFiltersChanged: (filterResults: ProjectPreview[]) => void
}

const ProjectFilters = ({
  allProjects,
  onFiltersChanged,
}: ProjectFiltersProps) => {
  const [searchInput, setSearchInput] = useState('')
  const [filterResultsCount, setFilterResoultsCount] = useState(
    allProjects.length,
  )

  const onFilter = () => {
    const filterResults: ProjectPreview[] = searchInput
      ? allProjects.filter((project) =>
          project.title.toLowerCase().includes(searchInput.toLowerCase()),
        )
      : allProjects

    setFilterResoultsCount(filterResults.length)
    onFiltersChanged(filterResults)
  }

  useEffect(() => {
    onFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])

  const onSearchChange = (searchInput: string) => {
    setSearchInput(searchInput)
    onFilter()
  }

  return (
    <div className={styles.filters}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for projects"
          onChange={(e) => onSearchChange(e.currentTarget.value)}
        />
        <SearchIcon />
      </div>
      <span className={styles.message}>
        {searchInput
          ? `${filterResultsCount} matching projects`
          : `${filterResultsCount} total projects`}
      </span>
    </div>
  )
}

export default ProjectFilters
