import Link from 'next/link'
import Container from '../components/container'
import { useRouter } from 'next/router'

export default function Header() {
  let navItems = [
    { name: "Steve", destination: "/", classes: "sm:hidden" },
    { name: "Steve Joachim", destination: "/", classes: "hidden sm:block" },
    { name: "About", destination: "/about" },
    { name: "Writing", destination: "/writing" }
  ]

  const router = useRouter()
  navItems = navItems.map((item) => (
    item.destination == router.pathname ?
      { classes: item.classes + " underline", ...item } :
      { ...item }
  ))

  return (
    <Container>
      <header className="flex flex-row text-xl font-bold px-2 py-2 border-b border-accent-2">
        {navItems.map((item, index) => (
          <div className={`mx-3 sm:mx-6 ${item.classes}`} key={index}>
            <Link href={item.destination}>
              <a className="hover:underline">{item.name}</a>
            </Link>
          </div>
        ))}
      </header>
    </Container>
  )
}
