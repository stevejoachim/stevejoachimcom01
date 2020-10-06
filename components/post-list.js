import PostPreview from './post-preview'

export default function PostList({ posts }) {
  return (
    <section>
      <h2 className="mt-4 mb-8 text-center sm:text-left text-5xl md:text-6xl font-bold tracking-tight leading-tight">
        Writing
      </h2>
      <div className="grid grid-cols-1 mb-16 gap-y-8 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            date={post.date}
            id={post.id}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
