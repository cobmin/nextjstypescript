import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm rounded-lg', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      layout="fill"
      objectFit="cover"
    />
  )
  return (
    <div className="sm:mx-0 relative w-full h-0 pb-[56.25%] overflow-hidden">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage

