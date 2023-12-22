import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export default async function handler(req, res) {
    try {
        const postsDirectory = path.join(process.cwd(), '_posts');
        const filenames = await fs.readdir(postsDirectory);

        const posts = await Promise.all(filenames.map(async filename => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = await fs.readFile(filePath, 'utf8');
            const { data, content } = matter(fileContents);
            return { ...data, content };
        }));

        res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
