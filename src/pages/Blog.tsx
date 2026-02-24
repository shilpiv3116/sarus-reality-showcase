import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";

const Blog = () => {
  return (
    <div>
      <section className="navy-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">Insights & Updates</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Blog</h1>
          <p className="text-primary-foreground/60 max-w-xl mx-auto">Expert insights on real estate investment, market trends, and home buying guides.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-premium transition-all group">
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <span className="text-5xl">📰</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold font-medium uppercase tracking-wide">{post.category}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
