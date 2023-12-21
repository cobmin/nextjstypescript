type CategoryTagsProps = {
    categories: string[];
};

const CategoryTags = ({ categories }: CategoryTagsProps) => {
    return (
        <>
            {categories.map((category, index) => (
                <span
                    key={category}
                    className={`bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ${index > 0 ? 'ml-2' : ''}`}
                >
                    {category}
                </span>
            ))}
        </>
    );
};

export default CategoryTags;
