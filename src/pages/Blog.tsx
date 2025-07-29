import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How This Site is Deployed",
      excerpt: "A comprehensive look at our modern deployment architecture using Terraform, AWS, Docker, and more.",
      date: "January 15, 2024",
      author: "Engineering Team",
      slug: "how-this-site-is-deployed"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            Insights, updates, and technical deep-dives from the Briefly team.
          </p>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-8">
                <div className="mb-4">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-2xl font-semibold text-gray-900 hover:text-[#7A5AF8] transition-colors"
                  >
                    {post.title}
                  </Link>
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {post.date} • By {post.author}
                </div>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-[#7A5AF8] font-medium hover:text-[#6B4CE6] transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;