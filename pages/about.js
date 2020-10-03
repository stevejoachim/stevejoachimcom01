import Layout from '../components/layout'
import Container from '../components/container'
import LinkButton from '../components/link-button'

export default function About() {
  return (
    <Layout>
      <Container>
        <h2 className="mt-4 mb-8 text-center sm:text-left text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
          A long journey
          </h2>
        <article className="prose prose-lg mt-4">
          <p>
            I've been interested in computer science for a while
          </p>
          <p>
            Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
          </p>
          <p>
            Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
          </p>
        </article>
        <LinkButton text="back" />
      </Container>
    </Layout>
  )
}