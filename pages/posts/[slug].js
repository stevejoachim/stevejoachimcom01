import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import Container from '../../components/container'
import Head from 'next/head'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import PostBody from '../../components/post-body'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Head>
          <title>{post.title} | Steve Joachim</title>
        </Head>
        <Header />
        <article className="mb-32">
          <PostHeader title={post.title} date={post.date} />
          <PostBody content={post.content} />
        </article>
        <div className="mx-auto">
          <Link href="/">
            <a>Go back</a>
          </Link>
        </div>

      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
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
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
