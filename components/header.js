import Link from 'next/link'
import Container from '../components/container'
import { useRouter } from 'next/router'

export default function Header() {
  let navItems = [
    { name: "Steve", destination: "/", classes: "mx-3 sm:hidden" },
    { name: "Steve Joachim", destination: "/", classes: "sm:mr-6 hidden sm:block" },
    { name: "About", destination: "/about", classes: "mx-3 sm:mx-6 " },
    { name: "Writing", destination: "/writing", classes: "mx-3 sm:mx-6 " }
  ]

  const router = useRouter()


  return (
    <Container>
      <header className="flex flex-row justify-center sm:justify-start text-xl font-bold py-2 border-b border-accent-2">
        {navItems.map((item, index) => (
          <div className={item.classes} key={index}>
            <Link href={item.destination} className="">
              <a
                className={`
                  hover:border-b-2 hover:text-accent-1 hover:border-accent-1 border-black 
                  ${router.pathname == item.destination ? 'border-b-2' : ''}
                `}
              >
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </header>
    </Container>
  )
}
