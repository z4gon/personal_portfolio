import { getCollection } from 'astro:content'
import { z } from 'astro/zod'

// Frontmatter; collection ids come from file names, and author is a username.
// Markdown lives in the entry body, so no schema field is needed for it
export const blogPostSchema = z.object({
  title: z.string(),
  date: z.string(),

  author: z.string(),

  excerpt: z.string(),

  // hero
  heroImageUrl: z.string(),
  heroVideoUrl: z.string().optional(),
  heroImageCreditUrl: z.string(),
})

type BlogPost = z.infer<typeof blogPostSchema>

export type BlogPostPreview = Pick<
  BlogPost,
  'title' | 'excerpt' | 'heroImageUrl'
> & {
  id: string
  date: string
  author: string
}

export const getBlogPostPreviews = async (): Promise<BlogPostPreview[]> => {
  const entries = await getCollection('blog')

  return entries
    .map(({ id, data }) => ({
      id,
      title: data.title,
      author: data.author,
      date: new Date(data.date).toISOString(),
      excerpt: data.excerpt,
      heroImageUrl: data.heroImageUrl,
    }))
    .sort((a, b) => b.date.localeCompare(a.date))
}
