import { getCollection } from 'astro:content'
import { z } from 'astro/zod'
import Category from './enums/Category'
import Tag from './enums/Tag'
import Technology from './enums/Technology'

// demo/docs/showcase links
export const linkSchema = z.object({
  href: z.string(),
  text: z.string(),
})

// Frontmatter; the collection id comes from the file name.
export const projectSchema = z.object({
  // prevent dead links when a project id is renamed
  aliases: z.array(z.string()).optional(),

  priority: z.number().default(0),

  title: z.string(),
  date: z.string(),

  // metadata
  tags: z.array(z.enum(Tag)),
  technology: z.enum(Technology).optional(),
  category: z.enum(Category),

  // metadata
  thumbnailUrl: z.string(),
  metaImageUrl: z.string(),

  // hero
  heroImageUrl: z.string().optional(),
  heroVideoUrl: z.string().optional(),

  // carousel
  imagesUrls: z.array(z.string()).optional(),
  videosUrls: z.array(z.string()).optional(),

  subtitle: z.string(),
  description: z
    .array(z.string())
    .nullish()
    .transform((value) => value ?? []),
  implementationDetails: z.array(z.string()),

  links: z.array(linkSchema).optional(),
  gitHubUrl: z.string().optional(),

  // store links
  appleAppStoreUrl: z.string().optional(),
  googlePlayStoreUrl: z.string().optional(),
  itchioUrl: z.string().optional(),

  // youtube
  youtubeVideoIds: z.array(z.string()).optional(),
})

type Project = z.infer<typeof projectSchema>

export type ProjectPreview = Pick<
  Project,
  'title' | 'thumbnailUrl' | 'technology' | 'category' | 'priority'
> & { id: string }

export const getProjectPreviews = async (): Promise<ProjectPreview[]> => {
  const entries = await getCollection('projects')

  return entries
    .map(({ id, data }) => ({
      id,
      title: data.title,
      thumbnailUrl: data.thumbnailUrl,
      technology: data.technology,
      category: data.category,
      priority: data.priority,
    }))
    .sort((a, b) => a.priority - b.priority)
}
