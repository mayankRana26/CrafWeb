export default function Design() {
  const services = [
    {
      title: "UI/UX Design",
      icon: "🎨",
      description:
        "Modern, user-friendly interfaces that enhance user experience and increase conversions.",
      features: [
        "User Research",
        "Wireframing",
        "Responsive UI",
        "Dashboard Design",
        "Landing Pages",
        "Mobile & Web Design",
      ],
    },
    {
      title: "Figma Design",
      icon: "✨",
      description:
        "Pixel-perfect Figma designs with organized components and developer-ready files.",
      features: [
        "Auto Layout",
        "Components",
        "Interactive Prototype",
        "Design Library",
        "Developer Handoff",
      ],
    },
    {
      title: "Logo Design",
      icon: "🚀",
      description:
        "Unique and memorable logo designs that build trust and strengthen your brand.",
      features: [
        "Multiple Concepts",
        "Typography",
        "Color Palette",
        "SVG / PNG Files",
        "Source Files",
      ],
    },
    {
      title: "Brand Identity",
      icon: "🎯",
      description:
        "Create a consistent visual identity for your business across every platform.",
      features: [
        "Brand Guidelines",
        "Business Cards",
        "Social Media Kit",
        "Brand Colors",
        "Typography",
      ],
    },
    {
      title: "Design System",
      icon: "🧩",
      description:
        "Reusable components and scalable design systems for faster product development.",
      features: [
        "Reusable Components",
        "Design Tokens",
        "Grid System",
        "Icons",
        "Developer Ready",
      ],
    },
  ];

  return (
    <main className="bg-[#0B0F19] text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <span className="rounded-full border border-cyan-500 px-4 py-1 text-cyan-400 text-sm">
          UI/UX & Branding
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
          Design That
          <span className="text-cyan-400"> Inspires.</span>
          <br />
          Experience That Converts.
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-gray-400 text-lg">
          We craft beautiful digital experiences with modern UI/UX design,
          branding, Figma prototypes, and scalable design systems that help
          businesses grow faster.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-xl font-semibold">
            Start Your Project
          </button>

          <button className="border border-gray-700 hover:border-cyan-400 px-7 py-3 rounded-xl">
            View Portfolio
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-800 bg-[#111827] p-8 hover:border-cyan-500 transition"
            >
              <div className="text-5xl">{service.icon}</div>

              <h2 className="mt-5 text-2xl font-bold">{service.title}</h2>

              <p className="mt-3 text-gray-400">{service.description}</p>

              <ul className="mt-6 space-y-3">
                {service.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-cyan-400">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#111827] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Our Design Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              ["01", "Research"],
              ["02", "Wireframe"],
              ["03", "Visual Design"],
              ["04", "Prototype"],
              ["05", "Testing"],
              ["06", "Developer Handoff"],
            ].map(([num, title]) => (
              <div
                key={num}
                className="rounded-2xl bg-[#0B0F19] border border-gray-800 p-8"
              >
                <div className="text-cyan-400 text-5xl font-bold">{num}</div>

                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>

                <p className="mt-3 text-gray-400">
                  We follow a structured process to deliver world-class user
                  experiences and visually stunning products.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold">
              Why Choose
              <span className="text-cyan-400"> CrafWeb?</span>
            </h2>

            <div className="grid grid-cols-2 gap-5 mt-10">
              {[
                "Modern UI",
                "Responsive Design",
                "Fast Delivery",
                "Pixel Perfect",
                "Developer Friendly",
                "Scalable Design",
                "Brand Strategy",
                "Premium Quality",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-800 p-5 bg-[#111827]"
                >
                  ✔ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-12">
            <h3 className="text-4xl font-bold">
              Let's Build Something Amazing
            </h3>

            <p className="mt-5 text-white/80">
              Whether you're launching a startup or redesigning an existing
              product, CrafWeb creates digital experiences your customers will
              love.
            </p>

            <button className="mt-8 bg-white text-black px-7 py-3 rounded-xl font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}