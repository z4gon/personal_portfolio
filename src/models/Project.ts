import { z } from 'astro/zod'
import Category from './enums/Category'
import Tag from './enums/Tag'
import Technology from './enums/Technology'

// demo/docs/showcase links
export const linkSchema = z.object({
  href: z.string(),
  text: z.string(),
})

// Frontmatter; `id` comes from the file name, and asset URLs are resolved after loading.
export const projectSchema = z.object({
  // prevent dead links when a project slug is renamed
  aliases: z.array(z.string()).optional(),

  priority: z.number().default(0),

  title: z.string(),
  date: z.coerce.date(),

  // metadata
  tags: z.array(z.enum(Tag)),
  technology: z.enum(Technology).optional(),
  category: z.enum(Category),

  // hero
  heroImageName: z.string().optional(),
  heroVideoName: z.string().optional(),

  // carousel
  imagesNames: z.array(z.string()).optional(),
  videosNames: z.array(z.string()).optional(),

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

export type Project = z.infer<typeof projectSchema>

export type ProjectFull = Omit<
  Project,
  'heroImageName' | 'heroVideoName' | 'imagesNames' | 'videosNames'
> & {
  id: string

  thumbnailUrl: string
  metaImageUrl: string

  heroImageUrl?: string
  heroVideoUrl?: string

  imagesUrls?: string[]
  videosUrls?: string[]
}

export type ProjectPreview = Pick<
  ProjectFull,
  'id' | 'title' | 'thumbnailUrl' | 'technology'
>
