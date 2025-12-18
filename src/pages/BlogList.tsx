import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogLoader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogList = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container px-6">
          {/* Back Link */}
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          {/* Page Header */}
          <div className="mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Blog
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              All Articles
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Thoughts on web development, design patterns, and building great software.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group"
              >
                <article
                  className="h-full bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
