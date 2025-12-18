import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPost, blogPosts } from "@/data/blogLoader";
import { renderMarkdown } from "@/lib/markdown";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import 'highlight.js/styles/github-dark.css';

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
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
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

export default BlogPost;
