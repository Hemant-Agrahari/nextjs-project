export default function Careers() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      department: "Engineering"
    },
    {
      title: "Product Designer",
      location: "New York, NY / Remote",
      type: "Full-time",
      department: "Design"
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering"
    },
    {
      title: "Marketing Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Marketing"
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering"
    },
    {
      title: "Customer Success Manager",
      location: "Boston, MA / Remote",
      type: "Full-time",
      department: "Customer Success"
    }
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Help us build the future of technology. We're always looking for talented people.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Remote First
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Work from anywhere in the world. We believe in flexibility and work-life balance.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Competitive Pay
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Industry-leading salaries and equity packages. Your work deserves to be valued.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Growth Opportunities
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Continuous learning and development. We invest in your career growth.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center">
                        📍 {position.location}
                      </span>
                      <span className="flex items-center">
                        💼 {position.type}
                      </span>
                      <span className="flex items-center">
                        🏢 {position.department}
                      </span>
                    </div>
                  </div>
                  <button className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors duration-200 whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-zinc-900 dark:bg-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white dark:text-zinc-900 mb-4">
            Don't see the right position?
          </h2>
          <p className="text-zinc-300 dark:text-zinc-600 mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-white dark:bg-zinc-900 px-8 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

