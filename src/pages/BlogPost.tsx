import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPost(id) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <article className="container px-6">
          {/* Back Link */}
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <header className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Article Content */}
          <div className="max-w-3xl prose prose-invert prose-lg prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border">
            <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="max-w-3xl mt-20 pt-12 border-t border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <article className="bg-card border border-border rounded-xl p-5 transition-all duration-300 hover:border-primary/50">
                      <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

// Simple markdown-like formatting
function formatContent(content: string): string {
  let html = content;
  
  // First, handle code blocks (must be done before other replacements)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  
  // Split content into lines for processing
  const lines = html.split('\n');
  const processedLines: string[] = [];
  let inList = false;
  let listType = '';
  
  for (let i = 0; i < lines.length; i++) {
    // Trim leading/trailing whitespace from each line
    const line = lines[i].trim();
    
    // Skip empty lines
    if (line === '') {
      if (inList) {
        processedLines.push(`</${listType}>`);
        inList = false;
        listType = '';
      }
      processedLines.push('');
      continue;
    }
    
    // Handle headers
    if (line.match(/^## (.+)$/)) {
      if (inList) {
        processedLines.push(`</${listType}>`);
        inList = false;
        listType = '';
      }
      processedLines.push(line.replace(/^## (.+)$/, '<h2>$1</h2>'));
      continue;
    }
    
    if (line.match(/^### (.+)$/)) {
      if (inList) {
        processedLines.push(`</${listType}>`);
        inList = false;
        listType = '';
      }
      processedLines.push(line.replace(/^### (.+)$/, '<h3>$1</h3>'));
      continue;
    }
    
    // Handle unordered lists
    if (line.match(/^- (.+)$/)) {
      if (!inList) {
        processedLines.push('<ul>');
        inList = true;
        listType = 'ul';
      } else if (listType !== 'ul') {
        processedLines.push(`</${listType}>`);
        processedLines.push('<ul>');
        listType = 'ul';
      }
      processedLines.push(line.replace(/^- (.+)$/, '<li>$1</li>'));
      continue;
    }
    
    // Handle ordered lists
    if (line.match(/^(\d+)\. (.+)$/)) {
      if (!inList) {
        processedLines.push('<ol>');
        inList = true;
        listType = 'ol';
      } else if (listType !== 'ol') {
        processedLines.push(`</${listType}>`);
        processedLines.push('<ol>');
        listType = 'ol';
      }
      processedLines.push(line.replace(/^(\d+)\. (.+)$/, '<li>$2</li>'));
      continue;
    }
    
    // Close list if we're in one and hit a non-list line
    if (inList) {
      processedLines.push(`</${listType}>`);
      inList = false;
      listType = '';
    }
    
    // Handle regular paragraphs (skip if already HTML)
    if (!line.startsWith('<')) {
      processedLines.push(`<p>${line}</p>`);
    } else {
      processedLines.push(line);
    }
  }
  
  // Close any open list
  if (inList) {
    processedLines.push(`</${listType}>`);
  }
  
  html = processedLines.join('\n');
  
  // Now handle inline formatting
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  return html;
}

export default BlogPost;
