import { z } from 'astro/zod'

// frontmatter; `slug` comes from the file name, `author` is a username.
// Markdown lives in the entry body, so no schema field is needed for it
export const blogPostSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),

  author: z.string(),

  excerpt: z.string(),

  // hero
  heroImageUrl: z.string(),
  heroVideoUrl: z.string().optional(),
  heroImageSourceUrl: z.string(),
})

export type BlogPost = z.infer<typeof blogPostSchema>
