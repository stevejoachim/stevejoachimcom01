import Link from 'next/link'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL, EMAIL } from '../lib/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Intro() {
  const links = [
    { icon: faGithub, "destination": GITHUB_URL },
    { icon: faLinkedin, "destination": LINKEDIN_URL },
    { icon: faTwitter, "destination": TWITTER_URL },
    { icon: faEnvelope, "destination": `mailto:${EMAIL}` }
  ]
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between my-4 sm:my-16">
      <h1 className="text-center md:text-left text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Steve Joachim
      </h1>
      <div className="text-center md:text-left mt-5 md:pl-8 text-lg">
        <div>
          Software engineer writing about the internet and machine learning
        </div>
        <div className="container text-center md:text-left">
          <button className=" border-gray-900 border-4 hover:border-gray-700 hover:text-gray-700 font-bold py-1 my-4 px-4 rounded-lg shadow">
            <Link href="/about">
              <a className="">more</a>
            </Link>
          </button>
        </div>
        <div className="container text-center md:text-left">
          {links.map((link, index) => (
            <a href={link.destination} target="_blank" key={index}>
              <FontAwesomeIcon icon={link.icon} size="3x" className="px-2" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
