import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../components/layout';
import { getPostsByCategory, getAllPosts } from '../../lib/api';
import type PostType from '../../interfaces/post';
// Import any other components you need to display the posts

type CategoryProps = {
    category: string;
    posts: PostType[];
};

export default function Category({ category, posts }: CategoryProps) {
    const router = useRouter();

    if (!router.isFallback && !category) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout title={`Posts in category: ${category}`}>
            {/* Layout of the category page */}
            {posts.map(post => (
        // Render each post here
      ))}
        </Layout>
    );
}

export async function getStaticProps({ params }: { params: { category: string } }) {
    const allPostsByCategory = getPostsByCategory();
    const posts = allPostsByCategory[params.category] || [];

    return {
        props: {
            category: params.category,
            posts,
        },
    };
}

export async function getStaticPaths() {
    const postsByCategory = getPostsByCategory();
    const categories = Object.keys(postsByCategory);

    return {
        paths: categories.map(category => ({
            params: { category },
        })),
        fallback: false,
    };
}

// {posts.map(post => (
//   <div key={post.slug}>
//     <h2>{post.title}</h2>
//     {/* Other post details */}
//   </div>
// ))}
