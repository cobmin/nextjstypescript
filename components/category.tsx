type CategoryTagsProps = {
    categories: string[];
};

const CategoryTags = ({ categories }: CategoryTagsProps) => {
    return (
        <>
            {categories.map((category, index) => (
                <span
                    key={category}
                    className={`bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text rounded-full px-3 py-1 text-sm font-semibold ${index > 0 ? 'ml-2' : ''}`}
                >
                    {category}
                </span>
            ))}
        </>
    );
};

export default CategoryTags;
