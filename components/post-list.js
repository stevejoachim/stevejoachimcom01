import PostPreview from './post-preview'

export default function PostList({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
        Writing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
