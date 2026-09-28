import { useState } from 'preact/hooks'
import Category from '../../models/enums/Category'
import type { ProjectPreview } from '../../models/Project'
import SearchProjects from './SearchProjects'
import ProjectsGrid from './ProjectsGrid'

const PAGE_SIZE = 8
const CATEGORIES = [
  Category.GameDev,
  Category.Shaders,
  Category.VisualEffects,
  Category.ComputeShaders,
]

interface ProjectsCategoriesProps {
  projects: ProjectPreview[]
}

const ProjectsCategories = ({ projects }: ProjectsCategoriesProps) => {
  const [searchResults, setSearchResults] = useState(projects)

  return (
    <>
      <SearchProjects projects={projects} onSearchResults={setSearchResults} />
      {CATEGORIES.map((category) => (
        <ProjectsGrid
          key={category}
          title={category}
          projects={searchResults.filter(
            (project) => project.category === category,
          )}
          pageSize={PAGE_SIZE}
        />
      ))}
    </>
  )
}

export default ProjectsCategories
