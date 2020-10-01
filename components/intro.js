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
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Steve Joachim
      </h1>
      <div className="flex-col mt-5 md:pl-8 text-center md:text-left text-lg">
        <div>
          Software engineer writing about the internet and machine learning
        </div>
        <div>
          <Link href="/about">
            <a className="hover:underline">More</a>
          </Link>
        </div>
        <div>
          {links.map((link) => (
            <a href={link.destination} target="_blank">
              <FontAwesomeIcon icon={link.icon} size="3x" className="px-2" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
