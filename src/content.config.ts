import { defineCollection } from "astro:content";
import {
  glob,
  // , file
} from "astro/loaders";
import { z } from "astro/zod";

// zod schema
const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

// id = file path slugified (github-slugger):
//   "My Great Post.md"   -> "my-great-post"  (spaces -> dashes, lowercased)
//   "camelCasePost.md"   -> "camelcasepost"  (camelCase not split)
//   "snake_case_name.md" -> "snake_case_name" (underscores kept)
// Use `generateId` or frontmatter `slug` to override.
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: blogPostSchema,
});

export const collections = { blog };
