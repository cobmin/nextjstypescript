import { remark } from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'
import remarkToc from 'remark-toc'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(slug)
    .use(remarkToc, {
      maxDepth: 2,
      ordered: false,
      prefix: 'user-content-',
      skip: 'Continue On|Final Thoughts|Get Started',
    })
    .use(html)
    .process(markdown)
  return result.toString()
}
