import { useState } from 'preact/hooks'
import type { ProjectPreview } from '../../models/Project'
import SearchIcon from '../icons/SearchIcon'
import styles from './SearchProjects.module.scss'

const MAX_MATCHED_TEXT_ITEMS = 2
const MATCHED_TEXT_MAX_LENGTH = 30

const getSearchableValues = (project: ProjectPreview) => [
  project.title,
  project.subtitle,
  project.category,
  ...(project.technology ? [project.technology] : []),
  ...project.details,
  ...project.tags,
]

const buildMatchedTexts = (values: string[], query: string) =>
  values.slice(0, MAX_MATCHED_TEXT_ITEMS).map((value) => {
    if (value.length <= MATCHED_TEXT_MAX_LENGTH) {
      return value
    }

    const start = value.toLowerCase().indexOf(query)
    const end = Math.min(value.length, start + MATCHED_TEXT_MAX_LENGTH)
    const hint = value.slice(start, end).trim()

    return `${start > 0 ? '…' : ''}${hint}${end < value.length ? '…' : ''}`
  })

interface SearchProjectsProps {
  projects: ProjectPreview[]
  onSearchResults: (searchResults: ProjectPreview[]) => void
}

const SearchProjects = ({ projects, onSearchResults }: SearchProjectsProps) => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState(projects)
  const hasSearchQuery = searchInput.trim().length > 0

  const calculateSearchResults = (input: string) => {
    const query = input.trim().toLowerCase()
    const searchResults: ProjectPreview[] = query
      ? projects.flatMap((project) => {
          const matchedValues = getSearchableValues(project).filter((value) =>
            value.toLowerCase().includes(query),
          )
          const matchedTexts = buildMatchedTexts(matchedValues, query)

          return matchedValues.length > 0 ? [{ ...project, matchedTexts }] : []
        })
      : projects

    setSearchResults(searchResults)
    onSearchResults(searchResults)
  }

  const onSearchInputChange = (searchInput: string) => {
    setSearchInput(searchInput)
    calculateSearchResults(searchInput)
  }

  return (
    <div className={styles.filters}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for projects"
          onInput={(e) => onSearchInputChange(e.currentTarget.value)}
        />
        <SearchIcon />
      </div>
      <span className={styles.message}>
        {hasSearchQuery
          ? `${searchResults.length} matching projects`
          : `${searchResults.length} total projects`}
      </span>
    </div>
  )
}

export default SearchProjects
