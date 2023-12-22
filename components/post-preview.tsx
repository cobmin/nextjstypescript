import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '../interfaces/author';
import CategoryTags from './category';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  categories: string[];
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}: Props) => {
  return (
    <div className="bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text rounded-lg p-5 mb-4">
      <CoverImage slug={slug} title={title} src={coverImage} />
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <div className="flex justify-between items-center">
        <DateFormatter dateString={date} />
        <div className="flex flex-wrap">
          <div>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
      <div className="text-lg leading-relaxed mb-2">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {excerpt}
        </Link>
      </div>
      <CategoryTags categories={categories} />
    </div>
  );
};

export default PostPreview;

