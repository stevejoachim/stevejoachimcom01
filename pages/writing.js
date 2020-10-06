import Head from 'next/head'
import PostList from '../components/post-list'
import Layout from '../components/layout'
import Container from '../components/container'
import { getAllPosts } from '../lib/api'

export default function Writing({ allPosts }) {
  return (
    <Layout>
      <Container>
        <Head>
          <title>Writing | Steve Joachim</title>
        </Head>
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