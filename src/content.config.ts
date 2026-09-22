import { defineCollection } from 'astro:content'
import {
  glob,
  // , file
} from 'astro/loaders'
import { blogPostSchema } from './models/BlogPost'
import { projectSchema } from './models/Project'

// id = file path slugified (github-slugger):
//   "My Great Post.md"   -> "my-great-post"  (spaces -> dashes, lowercased)
//   "camelCasePost.md"   -> "camelcasepost"  (camelCase not split)
//   "snake_case_name.md" -> "snake_case_name" (underscores kept)
// Use `generateId` or frontmatter `slug` to override.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: blogPostSchema,
})

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: projectSchema,
})

export const collections = { blog, projects }
