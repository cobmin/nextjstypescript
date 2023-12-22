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
  author,
  slug,
  categories = []
}: Props) => {
  return (
    <section className="flex flex-col bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm p-5 mb-6 transition duration-300 hover:shadow-md h-full">
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="flex-grow">
        <h3 className="text-3xl lg:text-4xl leading-tight my-4">
          <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
            <span className="hover:underline cursor-pointer">{title}</span>
          </Link>
        </h3>
      </div>
      <div className="mt-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="flex justify-end">
            <CategoryTags categories={categories} />
          </div>
        </div>
        <div className="text-xs mt-2">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost;

