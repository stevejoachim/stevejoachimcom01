// import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div
      className="max-w-2xl mx-auto prose md:prose-lg"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
