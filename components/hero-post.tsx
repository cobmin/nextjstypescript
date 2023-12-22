import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import CategoryTags from './category'

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
    <section className="bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text rounded-lg p-5 mb-6">
      <div className="mb-2a md:mb-4">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-3xl lg:text-4xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
            >
              {title}
            </Link>
          </h3>
          <div className="flex flex-row text-lg items-center">
            <div>
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
        <div className='mb-2'>
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"><p className="text-lg leading-relaxed">{excerpt}</p></Link>
        </div>
        <div>
          <CategoryTags categories={categories} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
