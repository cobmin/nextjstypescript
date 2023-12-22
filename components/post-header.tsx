import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './category'; // Import the CategoryTags component
import type Author from '../interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  categories: string[]; // Add the categories prop
};

const PostHeader = ({ title, coverImage, date, author, categories }: Props) => {
  return (
    <>
      <div className="mt-6">
        <PostTitle>{title}</PostTitle>
      </div>

      <div className="not-prose text-light-text dark:text-dark-text hidden md:block mb-3">
        <div className="flex justify-between items-center mb-3">
          <div className="flex-grow">
            <DateFormatter dateString={date} />
          </div>
          <div className="flex-end">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>

      <div className="not-prose mb-3 text-lg">
        <Categories categories={categories} />
      </div>
      <div className="not-prose mb-4 md:mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="not-prose text-light-text dark:text-dark-text max-w-2xl mx-auto">
        <div className="md:hidden flex justify-between items-center mb-3">
          <div className="flex-grow">
            <DateFormatter dateString={date} />
          </div>
          <div className="flex-end">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;