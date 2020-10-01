import remark from 'remark'
import html from 'remark-html'
import unified from 'unified'
import markdown from 'remark-parse'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'



export default async function markdownToHtml(rawMarkdown) {
  const result = await unified()
    .use(markdown)
    .use(math)
    .use(remark2rehype)
    .use(katex, { minRuleThickness: .09 })
    .use(stringify)
    .process(rawMarkdown)
  return result.toString()
}
