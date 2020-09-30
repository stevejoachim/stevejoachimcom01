import Link from 'next/link'

export default function Nav() {
  return (
    <ul className="flex text-xl font-bold px-5 py-2 bg-accent-1 border-b border-accent-2">
      <Link href="/"><li className="mr-6">Home</li></Link>
      <Link href="/about"><li className="mr-6">About</li></Link>
      <Link href="/writing"><li className="mr-6">Writing</li></Link>
    </ul>
  )
}