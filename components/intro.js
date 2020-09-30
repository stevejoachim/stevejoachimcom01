import Link from 'next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Steve Joachim
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Software engineer writing about the internet and machines that learn things
      </h4>
      <p><Link href="/about"><a>More</a></Link></p>
    </section>
  )
}
