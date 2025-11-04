export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like Next.js, React, and Node.js.",
      icon: "🌐"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, or GCP.",
      icon: "☁️"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
      icon: "🎨"
    },
    {
      title: "Consulting",
      description: "Expert guidance on technology strategy, architecture, and best practices.",
      icon: "💡"
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance to keep your applications running smoothly.",
      icon: "🔧"
    }
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            We'd love to discuss your project and how we can help
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

