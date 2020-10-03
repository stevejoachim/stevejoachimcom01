import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'
import PostHeader from '../../components/post-header'
import PostBody from '../../components/post-body'
import LinkButton from '../../components/link-button'
import { getPostById, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <Head>
          <title>{post.title} | Steve Joachim</title>
        </Head>
        <article className="max-w-xl md:max-w-2xl mx-auto mb-32">
          <PostHeader title={post.title} date={post.date} />
          <PostBody content={post.content} />
          <div>
            <LinkButton text="back" />
          </div>
        </article>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostById(params.id, [
    'title',
    'date',
    'id',
    'content'
  ])
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

export async function getStaticPaths() {
  const posts = getAllPosts(['id'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          id: post.id,
        },
      }
    }),
    fallback: false,
  }
}