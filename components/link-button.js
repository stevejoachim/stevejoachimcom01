import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LinkButton({ destination, text }) {
  const router = useRouter()
  return (
    <button className=" border-gray-900 border-2 hover:border-accent-1 hover:text-accent-1 font-bold py-1 my-4 px-4 rounded-lg shadow">
      {destination ? (
        <Link href={destination}>
          <a>{text}</a>
        </Link>
      ) : (
          <a onClick={() => router.back()}>{text}</a>
        )
      }

    </button>
  )
}