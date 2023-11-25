import { remark } from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(slug) // Add slugs to headings
    .use(html) // Convert to HTML
    .process(markdown)
  return result.toString()
}
