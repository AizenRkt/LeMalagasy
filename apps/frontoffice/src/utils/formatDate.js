export default function formatDate(inputDate, locale = 'fr-FR') {
  if (!inputDate) {
    return ''
  }

  const date = new Date(inputDate)

  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)
}