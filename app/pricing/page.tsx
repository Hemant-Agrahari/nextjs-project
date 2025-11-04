export default function Pricing() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mt-12 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Basic</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">For individuals getting started</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-zinc-900 dark:text-white">$0</span>
              <span className="text-zinc-600 dark:text-zinc-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Up to 3 projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">5GB storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Community support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Basic features</span>
              </li>
            </ul>
            <button className="w-full rounded-full border-2 border-zinc-900 dark:border-white px-6 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-200">
              Get Started Free
            </button>
          </div>

          {/* Professional Plan - Highlighted */}
          <div className="bg-zinc-900 dark:bg-white p-8 rounded-lg shadow-xl border-2 border-zinc-900 dark:border-zinc-100 transform lg:scale-105">
            <div className="text-center mb-2">
              <span className="bg-zinc-700 dark:bg-zinc-200 text-white dark:text-zinc-900 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-zinc-900 mb-2">Professional</h3>
            <p className="text-zinc-300 dark:text-zinc-600 mb-6">For professionals and small teams</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-white dark:text-zinc-900">$29</span>
              <span className="text-zinc-300 dark:text-zinc-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">Unlimited projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">50GB storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">Priority support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">Advanced features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-zinc-300 dark:text-zinc-600">Team collaboration</span>
              </li>
            </ul>
            <button className="w-full rounded-full bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Enterprise</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">For large organizations</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-zinc-900 dark:text-white">Custom</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Unlimited everything</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Unlimited storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">24/7 dedicated support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">Custom integrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">SLA guarantee</span>
              </li>
            </ul>
            <button className="w-full rounded-full border-2 border-zinc-900 dark:border-white px-6 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 text-left">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                Can I change plans later?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 text-left">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 text-left">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                Is there a free trial?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Yes! All paid plans include a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

