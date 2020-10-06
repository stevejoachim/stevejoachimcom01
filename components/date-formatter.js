import { parse, format } from 'date-fns'

export default function DateFormatter({ dateString }) {
  const date = parse(dateString, 'M/d/yyyy', new Date())
  const htmlDate = format(date, 'yyyy-MM-dd')
  const displayDate = format(date, 'LLLL	d, yyyy')
  return <time dateTime={htmlDate}>{displayDate}</time>
}
