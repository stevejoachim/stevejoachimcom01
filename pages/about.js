import Layout from '../components/layout'
import Container from '../components/container'
import Head from 'next/head'
import LinkButton from '../components/link-button'
import { getPostById } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import PostBody from '../components/post-body'
import PostHeader from '../components/post-header'

export default function About({ post }) {
  return (
    <Layout>
      <Container>
        <Head>
          <title>About | Steve Joachim</title>
        </Head>
        <article className="prose md:prose-lg mt-4 max-w-xl md:max-w-2xl mx-auto mb-32">
          <PostHeader title={post.title} />
          <PostBody content={post.content} />
          <LinkButton text="back" />
        </article>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const post = getPostById('_about', [
    'title',
    'date',
    'id',
    'content'
  ])
  console.log(post)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}