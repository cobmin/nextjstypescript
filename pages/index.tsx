import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import React, { useState, useMemo, useCallback } from 'react';

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const allCategories: string[] = useMemo(() => {
    const categories = new Set<string>();
    allPosts.forEach(post => {
      post.categories.forEach(category => categories.add(category.trim().toLowerCase()));
    });
    return Array.from(categories);
  }, [allPosts]);


  const toggleCategory = useCallback((category) => {
    setSelectedCategories((prevSelected) => {
      const normalizedCategory = category.trim().toLowerCase();
      const isAlreadySelected = prevSelected.includes(normalizedCategory);

      return isAlreadySelected
        ? prevSelected.filter(c => c !== normalizedCategory)
        : [...prevSelected, normalizedCategory];
    });
  }, []);

  const heroPost = allPosts[0];

  const filteredPosts = useMemo(() => {
    const postsToFilter = selectedCategories.length === 0 ? allPosts.slice(1) : allPosts;

    if (selectedCategories.length === 0) return postsToFilter;

    const normalizedSelectedCategories = selectedCategories.map(c => c.trim().toLowerCase());

    return postsToFilter.filter(post =>
      post.slug !== heroPost.slug && // Exclude the hero post
      post.categories.some(category =>
        normalizedSelectedCategories.includes(category.trim().toLowerCase())
      )
    );
  }, [allPosts, selectedCategories, heroPost.slug]); // Include heroPost.slug in the dependency array

  const morePosts = filteredPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>{`cobmin's stuff`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <>
              <h2 className="text-4xl mb-4 font-bold">Featured Post</h2>
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
                categories={heroPost.categories}
              />
            </>
          )}
          <div className="mb-4 flex flex-wrap gap-2">
            {allCategories.map((category) => {
              const isSelected = selectedCategories.map(c => c.trim().toLowerCase()).includes(category);
              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isSelected
                    ? 'bg-light-accent text-white' // Active state
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-400' // Inactive state
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          {morePosts.length > 0 && (
            <>
              <h2 className="text-4xl mb-4 font-bold">More Posts</h2>
              <MoreStories posts={morePosts} />
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'categories',
  ])

  return {
    props: { allPosts },
  }
}
