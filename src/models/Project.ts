import { z } from 'astro/zod'
import Category from './enums/Category'
import Tag from './enums/Tag'
import Technology from './enums/Technology'

// demo/docs/showcase links
export const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
})

// frontmatter; `id` comes from the file name, body markdown lives outside the schema
export const projectSchema = z.object({
  // prevent dead links when a project slug is renamed
  aliases: z.array(z.string()).optional(),

  priority: z.number(),

  title: z.string(),
  date: z.coerce.date(),

  thumbnailUrl: z.string(),

  // metadata
  tags: z.array(z.enum(Tag)),
  technology: z.enum(Technology).optional(),
  category: z.enum(Category),

  metaImageUrl: z.string(),

  // hero
  heroImageUrl: z.string().optional(),
  heroVideoUrl: z.string().optional(),

  // carousel
  imagesUrls: z.array(z.string()).optional(),
  videosUrls: z.array(z.string()).optional(),

  subtitle: z.string(),
  description: z.array(z.string()).optional(),
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
