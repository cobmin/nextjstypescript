import { remark } from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(slug)
    .use(html)
    .process(markdown)
  // console.log(result);
  return result.toString()
}
