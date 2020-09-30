import Layout from '../components/layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <article className="prose prose-lg">
        <h1>A long journey</h1>
        <p>
          I've been interested in computer science for a while
      </p>
        <p>
          <Link href="/">
            <a>Go back</a>
          </Link>
        </p>
      </article>
    </Layout>
  )
}