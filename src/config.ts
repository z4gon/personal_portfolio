import { getUser, type Author } from './models/Author'

// GitHub identity used for links and footer attribution
export const githubUser = 'z4gon'
export const githubUrl = `https://github.com/${githubUser}`

// Blog post authors, keyed by username (posts' `author` field)
export const authors: Record<string, Author> = {
  [githubUser]: getUser(githubUser),
}

// Site-wide identity used for page titles and meta tags
export const site = {
  title: `${githubUser} | Portfolio`,
  description: 'Game Development, Graphics Programming & Technical Art.',
  imagePath: '/thumbnail.gif',
  faviconPath: '/favicon.ico',
}

// Google Analytics measurement ID
export const gaMeasurementId = 'G-NPBT98N1FD'
