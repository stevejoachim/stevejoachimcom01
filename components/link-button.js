import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LinkButton({ destination, text }) {
  const router = useRouter()
  const buttonClasses = "border-gray-900 border-2 hover:border-accent-1 hover:text-accent-1 font-bold py-1 my-4 px-4 rounded-lg shadow"
  return (
    <>
      {destination ? (
        <Link href={destination}>
          <button className={buttonClasses}>
            <a>{text}</a>
          </button>
        </Link>
      ) : (
          <a onClick={() => router.back()}>
            <button className={buttonClasses}>
              {text}
            </button>
          </a>
        )
      }
    </>
  )
}