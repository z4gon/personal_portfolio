import styles from './YouTubeEmbed.module.scss'

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => (
  <iframe
    className={styles.embed}
    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
    title={title}
    loading="lazy"
    allow="autoplay; encrypted-media;"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
)

export default YouTubeEmbed
