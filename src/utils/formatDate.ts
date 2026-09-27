const formatDate = (date: Date, includeDay = false) => {
  const locale = includeDay ? 'en-CA' : 'en'
  const options: Intl.DateTimeFormatOptions = includeDay
    ? {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC',
      }
    : { year: 'numeric', month: 'short' }

  return date.toLocaleDateString(locale, options)
}

export default formatDate
