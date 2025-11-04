export default function Contact() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mt-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Email</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">contact@yourcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Phone</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Address</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      123 Business Street<br />
                      Suite 100<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <p><span className="font-medium text-zinc-900 dark:text-white">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium text-zinc-900 dark:text-white">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-medium text-zinc-900 dark:text-white">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

