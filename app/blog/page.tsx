export default function Blog() {
  const posts = [
    {
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with the latest version of Next.js.",
      date: "Nov 1, 2025",
      author: "John Doe",
      category: "Development"
    },
    {
      title: "Best Practices for React Performance",
      excerpt: "Discover techniques to optimize your React applications for better performance.",
      date: "Oct 28, 2025",
      author: "Jane Smith",
      category: "Performance"
    },
    {
      title: "Understanding Server Components",
      excerpt: "A deep dive into React Server Components and how they work.",
      date: "Oct 25, 2025",
      author: "Mike Johnson",
      category: "Development"
    },
    {
      title: "Tailwind CSS Tips and Tricks",
      excerpt: "Master Tailwind CSS with these advanced tips and techniques.",
      date: "Oct 20, 2025",
      author: "Sarah Williams",
      category: "Design"
    },
    {
      title: "Building Scalable Applications",
      excerpt: "Learn the principles of building applications that scale.",
      date: "Oct 15, 2025",
      author: "Tom Brown",
      category: "Architecture"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development.",
      date: "Oct 10, 2025",
      author: "Emily Davis",
      category: "Trends"
    }
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Insights, tutorials, and news from our team
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    By {post.author}
                  </span>
                  <a
                    href="#"
                    className="text-sm font-medium text-zinc-900 dark:text-white hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-full border-2 border-zinc-900 dark:border-white px-8 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-200">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}

