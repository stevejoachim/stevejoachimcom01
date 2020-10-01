import Layout from '../components/layout'
import Container from '../components/container'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <Container>
        <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
          A long journey
          </h2>
        <article className="prose prose-lg mt-4">
          <p>
            I've been interested in computer science for a while
          </p>
          <p>
            <Link href="/">
              <a>Go back</a>
            </Link>
          </p>
        </article>
      </Container>
    </Layout>
  )
}