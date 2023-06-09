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
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="bg-gray-200 rounded-lg p-5 mb-4">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
        >
          {<DateFormatter dateString={date} />}
        </Link>
      </div>
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"><p className="text-lg leading-relaxed">{excerpt}</p></Link>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
