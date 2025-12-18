import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

interface BlogFrontmatter {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

// Use Vite's import.meta.glob to load all markdown files
const blogModules = import.meta.glob<string>('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

// Parse markdown files and extract frontmatter
export const blogPosts: BlogPost[] = Object.entries(blogModules).map(([path, content]) => {
  const { data, content: markdownContent } = matter(content);
  const frontmatter = data as BlogFrontmatter;
  
  // Validate required frontmatter fields
  if (!frontmatter.id || !frontmatter.title || !frontmatter.date) {
    throw new Error(`Blog post at ${path} is missing required frontmatter fields (id, title, or date)`);
  }
  
  return {
    id: frontmatter.id,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt || '',
    content: markdownContent,
    date: frontmatter.date,
    readTime: frontmatter.readTime || '5 min read',
    category: frontmatter.category || 'Uncategorized',
    image: frontmatter.image,
  };
}).sort((a, b) => {
  // Sort by date descending (newest first)
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
