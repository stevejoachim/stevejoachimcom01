import PostList from '../components/post-list'
import Layout from '../components/layout'
import Container from '../components/container'
import { getAllPosts } from '../lib/api'

export default function Writing({ allPosts }) {
  return (
    <Layout>
      <Container>
        <PostList posts={allPosts} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'id',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}