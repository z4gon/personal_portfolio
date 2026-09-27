import formatDate from '../../utils/formatDate'
import styles from './DateFormatter.module.scss'

interface DateFormatterProps {
  dateString: string
  includeDay?: boolean
}

const DateFormatter = ({ dateString, includeDay = false }: DateFormatterProps) => (
  <time className={styles.dateFormatter} dateTime={dateString}>
    {formatDate(new Date(dateString), includeDay)}
  </time>
)

export default DateFormatter
