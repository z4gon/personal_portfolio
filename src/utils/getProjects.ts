import { getCollection, type CollectionEntry } from 'astro:content'
import type { ProjectFull, ProjectPreview } from '../models/Project'

const resourcesUrl = (id: string, name: string) =>
  `/resources/projects/${id}/${name}`

const withDerivedUrls = ({
  id,
  data: { heroImageName, heroVideoName, imagesNames, videosNames, ...data },
}: CollectionEntry<'projects'>): ProjectFull => ({
  id,
  ...data,

  thumbnailUrl: resourcesUrl(id, 'thumbnail.mp4'),
  metaImageUrl: resourcesUrl(id, 'thumbnail.gif'),

  heroImageUrl: heroImageName ? resourcesUrl(id, heroImageName) : undefined,
  heroVideoUrl: heroVideoName ? resourcesUrl(id, heroVideoName) : undefined,

  imagesUrls: imagesNames?.map((name) => resourcesUrl(id, name)),
  videosUrls: videosNames?.map((name) => resourcesUrl(id, name)),
})

export const getProjects = async (): Promise<ProjectFull[]> => {
  const entries = await getCollection('projects')
  return entries.map(withDerivedUrls)
}

export const toProjectPreview = ({
  id,
  title,
  thumbnailUrl,
  technology,
}: ProjectFull): ProjectPreview => ({
  id,
  title,
  thumbnailUrl,
  technology,
})
