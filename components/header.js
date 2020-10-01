import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  const navItems = [
    { name: "Steve Joachim", destination: "/" },
    { name: "About", destination: "/about" },
    { name: "Writing", destination: "/writing" }
  ]
  return (
    <Container>
      <ul className="flex flex-col sm:flex-row text-xl font-bold px-5 py-2 border-b border-accent-2">
        {navItems.map((item) => (
          <li className="mx-6">
            <Link href={item.destination}>
              <a className="hover:underline">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
