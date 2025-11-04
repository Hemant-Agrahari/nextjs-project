export default function About() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Learn more about our company and what we stand for
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              To deliver innovative solutions that empower businesses to succeed in the digital age.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              To be the leading provider of cutting-edge technology solutions worldwide.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Our Values
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Innovation, integrity, and customer success are at the heart of everything we do.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-zinc-900 p-12 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              Founded in 2020, we started with a simple idea: to make technology accessible and 
              beneficial for everyone. Since then, we've grown into a team of passionate professionals 
              dedicated to creating exceptional digital experiences.
            </p>
            <p>
              Our journey has been marked by continuous innovation and a commitment to excellence. 
              We've helped hundreds of clients transform their businesses through cutting-edge 
              technology solutions.
            </p>
            <p>
              Today, we continue to push boundaries and explore new possibilities, always keeping 
              our clients' success at the forefront of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

