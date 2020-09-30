import PostList from '../components/post-list'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'

export default function Writing({ allPosts }) {
  return (
    <Layout>
      <PostList posts={allPosts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}