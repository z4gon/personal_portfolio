import { site } from '../../config'

// page-level overrides, falling back to site config
interface MetatagsProps {
  path: string
  title?: string
  description?: string
  metaImageUrl?: string
}

const Metatags = ({ path, ...siteOverrides }: MetatagsProps) => {
  const title = siteOverrides.title ?? site.title
  const description = siteOverrides.description ?? site.description
  const metaImageUrl = siteOverrides.metaImageUrl ?? site.metaImageUrl

  const siteUrl = import.meta.env.SITE

  const url = new URL(path, siteUrl).toString()
  // base is ignored if the URL is already absolute
  const metaImageUrlFull = new URL(metaImageUrl, siteUrl).toString()

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImageUrlFull} />

      {/* Twitter: format only, content falls back to og:* tags */}
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" href={site.faviconUrl} />

      {/* https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls */}
      <link rel="canonical" href={url} />
    </>
  )
}

export default Metatags
