export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built with performance in mind. Experience blazing fast load times and smooth interactions.",
      icon: "⚡"
    },
    {
      title: "Secure by Default",
      description: "Enterprise-grade security features to keep your data safe and protected.",
      icon: "🔒"
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows.",
      icon: "🔌"
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time, from anywhere in the world.",
      icon: "👥"
    },
    {
      title: "Advanced Analytics",
      description: "Gain insights with powerful analytics and reporting tools.",
      icon: "📊"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is always here to help you succeed.",
      icon: "💬"
    },
    {
      title: "Scalable Infrastructure",
      description: "Grow without limits. Our infrastructure scales with your needs.",
      icon: "📈"
    },
    {
      title: "Customizable",
      description: "Tailor every aspect to match your brand and workflow.",
      icon: "🎨"
    },
    {
      title: "API Access",
      description: "Full API access to build custom integrations and automations.",
      icon: "🔧"
    }
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Features
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to build, scale, and succeed
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-zinc-900 dark:bg-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white dark:text-zinc-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-zinc-300 dark:text-zinc-600 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using our platform to build amazing products.
          </p>
          <a
            href="/get-started"
            className="inline-block rounded-full bg-white dark:bg-zinc-900 px-8 py-3 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}

