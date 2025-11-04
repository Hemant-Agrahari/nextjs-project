export default function Documentation() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know to get started and make the most of our platform
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mt-12">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 sticky top-4">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Contents</h2>
              <nav className="space-y-2">
                <a href="#getting-started" className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Getting Started
                </a>
                <a href="#installation" className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Installation
                </a>
                <a href="#configuration" className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Configuration
                </a>
                <a href="#api-reference" className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  API Reference
                </a>
                <a href="#examples" className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Examples
                </a>
                <a href="#troubleshooting" className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Troubleshooting
                </a>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <section id="getting-started" className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Getting Started
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Welcome to our documentation! This guide will help you get up and running quickly.
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                <code className="text-sm text-zinc-900 dark:text-white">
                  npm install your-package
                </code>
              </div>
            </section>

            <section id="installation" className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Installation
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Install our package using your preferred package manager:
              </p>
              <div className="space-y-2">
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">npm:</p>
                  <code className="text-sm text-zinc-900 dark:text-white">
                    npm install your-package
                  </code>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">yarn:</p>
                  <code className="text-sm text-zinc-900 dark:text-white">
                    yarn add your-package
                  </code>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">pnpm:</p>
                  <code className="text-sm text-zinc-900 dark:text-white">
                    pnpm add your-package
                  </code>
                </div>
              </div>
            </section>

            <section id="configuration" className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Configuration
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Configure your application with these basic settings:
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-zinc-900 dark:text-white">
{`{
  "apiKey": "your-api-key",
  "environment": "production",
  "debug": false
}`}
                </pre>
              </div>
            </section>

            <section id="api-reference" className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                API Reference
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Complete API documentation for all available methods and endpoints.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-zinc-900 dark:border-white pl-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    GET /api/users
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Retrieve a list of all users
                  </p>
                </div>
                <div className="border-l-4 border-zinc-900 dark:border-white pl-4">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    POST /api/users
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Create a new user
                  </p>
                </div>
              </div>
            </section>

            <section id="examples" className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Examples
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Here are some common use cases and examples:
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-zinc-900 dark:text-white">
{`import { YourPackage } from 'your-package';

const app = new YourPackage({
  apiKey: 'your-api-key'
});

await app.connect();`}
                </pre>
              </div>
            </section>

            <section id="troubleshooting" className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Troubleshooting
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Common issues and their solutions:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    Connection timeout
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Check your network connection and API key configuration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    Authentication failed
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Verify that your API key is valid and has the necessary permissions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

