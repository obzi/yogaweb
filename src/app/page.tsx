import Link from "next/link";

const highlights = [
  {
    title: "Lekce yogy",
    desc: "Individualni i skupinove lekce pro vsechny urovne.",
    href: "/sluzby",
    icon: (
      <svg className="w-6 h-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 4-4 6-4 9a4 4 0 108 0c0-3-2.5-5-4-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-3" />
      </svg>
    ),
  },
  {
    title: "Zdrava vyziva",
    desc: "Nutricni poradenstvi a sestaveni jidelnicku na miru.",
    href: "/sluzby",
    icon: (
      <svg className="w-6 h-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 7v1m0-9a4.5 4.5 0 00-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Kurzy & Workshopy",
    desc: "Vikendove pobyty, seminare a uzavrene kurzy.",
    href: "/sluzby",
    icon: (
      <svg className="w-6 h-6 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-dark leading-tight">
            Harmonie tela i mysli
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            Yoga, nutrice a celistvy pristup k vasemu zdravi.
            Najdete u nas lekce, kurzy, workshopy i vikendove pobyty.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sluzby"
              className="inline-block bg-accent-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors"
            >
              Nase sluzby
            </Link>
            <Link
              href="/kontakt"
              className="inline-block border-2 border-accent-dark text-accent-dark px-8 py-3 rounded-full font-semibold hover:bg-accent-dark hover:text-white transition-colors"
            >
              Kontaktujte nas
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Co u nas najdete</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <Link
                key={h.title}
                href={h.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-warm-dark/10 hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl mb-4 flex items-center justify-center">
                  {h.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-dark transition-colors">
                  {h.title}
                </h3>
                <p className="text-foreground/60">{h.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Zacnete svou cestu k zdravi</h2>
          <p className="text-white/70 mb-8 text-lg">
            Ozvete se nam a spolecne najdeme to prave pro vas.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-accent-dark px-8 py-3 rounded-full font-semibold hover:bg-warm transition-colors"
          >
            Napiste nam
          </Link>
        </div>
      </section>
    </>
  );
}
