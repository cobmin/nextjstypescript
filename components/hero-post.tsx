import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  categories: string[]
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories = [] // Set a default empty array
}: Props) => {
  return (
    <section className="bg-gray-200 rounded-lg p-5 mb-6">
      <div className="mb-2 md:mb-4">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-2 text-3xl lg:text-4xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
            >
              {title}
            </Link>
          </h3>
          <div className="mt-2">
            {categories.map(category => (
              <span key={category} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {category}
              </span>
            ))}
          </div>
          <div className="flex flex-row text-lg">
            <div className="mt-2">
              <Link
                as={`/posts/${slug}`}
                href="/posts/[slug]"
              >
                {<DateFormatter dateString={date} />}
              </Link>
            </div>
            <div className='ml-auto'>
              <Avatar name={author.name} picture={author.picture} />
            </div>
          </div>
        </div>
        <div>
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"><p className="text-lg leading-relaxed">{excerpt}</p></Link>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
