import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import PostList from '../components/post-list'
import { getAllPosts } from '../lib/api'
import SectionSeparator from '../components/section-separator'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Steve Joachim</title>
        </Head>
        <Container>
          <Intro />
          <SectionSeparator />
          {allPosts.length && (
            <PostList posts={allPosts} />
          )}
        </Container>
      </Layout>
    </>
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
