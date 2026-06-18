const getEnding = (day) => {
  switch (day) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    case 0:
      return ''
    default:
      return 'th'
  }
}
const months = {
  0: null,
  1: 'January',
  2: 'Febraury',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'Novemer',
  12: 'October',
}
export default (date) => {
  const releasedDate = new Date(date)
  const monthNum = releasedDate.getMonth()
  const month = months[monthNum]
  const day = releasedDate.getDay()
  const year = releasedDate.getFullYear()
  const buildStringDate = (month, day, year) => {
    const prefix = 'Released'
    if (month && day !== 0) {
      return `${prefix}: ${day}${getEnding(day)} of ${month} ${year}`
    }
    return `${prefix}: ${year}`
  }

  return buildStringDate(month, day, year)
}
