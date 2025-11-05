import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-blue-950">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Good Morning
              </span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Start your day right with innovative solutions that empower your business to reach new heights
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/signup"
                className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Free
              </Link>
              <Link
                href="/about"
                className="rounded-full bg-white border-2 border-zinc-300 px-8 py-4 text-lg font-semibold text-zinc-900 hover:border-zinc-400 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:hover:border-zinc-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Discover the features that make us stand out from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-zinc-800 dark:to-blue-900/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Experience blazing fast performance that keeps your workflow smooth and efficient
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-zinc-800 dark:to-purple-900/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-600 dark:bg-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Secure & Private
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Your data is protected with enterprise-grade security and privacy controls
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-zinc-800 dark:to-green-900/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-green-600 dark:bg-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Easy to Customize
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                Tailor every aspect to match your brand and workflow requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Active Users</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">99.9%</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Uptime</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Countries</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their workflow with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/signup"
              className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-transparent border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
