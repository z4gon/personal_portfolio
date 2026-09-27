import styles from './Avatar.module.scss'
import classNames from '../../utils/classNames'

interface AvatarProps {
  name: string
  pictureUrl: string
  small?: boolean
}

const Avatar = ({ name, pictureUrl, small = false }: AvatarProps) => {
  return (
    <div
      className={classNames(styles.avatar, {
        [styles.small]: small,
      })}
    >
      <img src={pictureUrl} alt={name} />
      <div className={styles.name}>{name}</div>
    </div>
  )
}

export default Avatar
