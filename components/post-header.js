// import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'

export default function PostHeader({ title, date }) {
  return (
    <>
      <h1 className="mt-4 mb-8 text-center sm:text-left text-3xl md:text-6xl font-bold tracking-tighter leading-tight">
        {title}
      </h1>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}
