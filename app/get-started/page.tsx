export default function GetStarted() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Get Started
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that's right for you and start your journey today
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {/* Starter Plan */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Starter
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Perfect for individuals and small projects
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">$29</span>
              <span className="text-zinc-600 dark:text-zinc-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">1 Project</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Basic Support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">10GB Storage</span>
              </li>
            </ul>
            <button className="w-full rounded-full border-2 border-zinc-900 dark:border-white px-6 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-zinc-900 dark:bg-white p-8 rounded-lg shadow-lg border-2 border-zinc-900 dark:border-white transform scale-105">
            <div className="text-center mb-2">
              <span className="bg-zinc-700 dark:bg-zinc-200 text-white dark:text-zinc-900 text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-zinc-900 mb-2">
              Pro
            </h3>
            <p className="text-zinc-300 dark:text-zinc-600 mb-6">
              For growing businesses and teams
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white dark:text-zinc-900">$99</span>
              <span className="text-zinc-300 dark:text-zinc-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">10 Projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">Priority Support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">100GB Storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">Advanced Analytics</span>
              </li>
            </ul>
            <button className="w-full rounded-full bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Enterprise
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              For large organizations
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Unlimited Projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">24/7 Support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Unlimited Storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Custom Integration</span>
              </li>
            </ul>
            <button className="w-full rounded-full border-2 border-zinc-900 dark:border-white px-6 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a
            href="/contact"
            className="text-zinc-900 dark:text-white hover:underline font-medium"
          >
            Have questions? Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

