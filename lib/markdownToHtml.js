import unified from 'unified'
import markdown from 'remark-parse'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import highlight from 'rehype-highlight'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'



export default async function markdownToHtml(rawMarkdown) {
  const result = await unified()
    .use(markdown)
    .use(math)
    .use(remark2rehype)
    .use(katex, { minRuleThickness: .08 })
    .use(highlight)
    .use(stringify)
    .process(rawMarkdown)
  return result.toString()
}
