import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="not-prose mt-6">
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="not-prose hidden md:block md:mb-6">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="not-prose mb-3 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <div className="not-prose mb-4 md:mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="not-prose max-w-2xl mx-auto">
        <div className="block md:hidden mb-3">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
