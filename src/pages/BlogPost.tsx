import { useParams, Link } from "react-router-dom";
import { getBlogBySlug, blogPosts } from "@/data/blogs";
import { ArrowLeft, Clock, User } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-gold font-medium">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const otherPosts = blogPosts.filter(p => p.id !== post.id);

  return (
    <div>
      <section className="navy-gradient py-20">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-gold text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="text-xs text-gold font-medium uppercase tracking-wide block mb-3">{post.category}</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4 max-w-3xl">{post.title}</h1>
          <div className="flex items-center gap-4 text-primary-foreground/50 text-sm">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                {post.content.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("## ")) {
                    return <h2 key={i} className="font-heading text-xl font-bold text-foreground mt-8 mb-3">{paragraph.replace("## ", "")}</h2>;
                  }
                  if (paragraph.startsWith("**")) {
                    return <p key={i} className="font-semibold text-foreground">{paragraph.replace(/\*\*/g, "")}</p>;
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-1">
                        {paragraph.split("\n").map((item, j) => (
                          <li key={j} className="text-sm">{item.replace("- ", "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i} className="text-sm leading-relaxed">{paragraph}</p>;
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="font-heading font-bold text-foreground mb-4">Other Articles</h3>
                <div className="space-y-4">
                  {otherPosts.map((p) => (
                    <Link key={p.id} to={`/blog/${p.slug}`} className="block group">
                      <h4 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">{p.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{p.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="gold-gradient rounded-lg p-6 text-center">
                <h3 className="font-heading font-bold text-primary mb-2">Need Expert Advice?</h3>
                <p className="text-primary/70 text-sm mb-4">Our team is here to help you make informed decisions.</p>
                <Link to="/contact" className="bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded text-sm inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
