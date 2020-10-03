import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  // Highlight syntax on component mount
  React.useEffect(() => {
    Prism.highlightAll()
  }, []);
  return (
    <div className="prose md:prose-lg">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
