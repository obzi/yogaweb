import Link from "next/link";

const highlights = [
  {
    title: "Lekce yogy",
    desc: "Individualni i skupinove lekce pro vsechny urovne.",
    href: "/sluzby",
  },
  {
    title: "Zdrava vyziva",
    desc: "Nutricni poradenstvi a sestaveni jidelnicku na miru.",
    href: "/sluzby",
  },
  {
    title: "Kurzy & Workshopy",
    desc: "Vikendove pobyty, seminare a uzavrene kurzy.",
    href: "/sluzby",
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
            Yoga, zdrava vyziva a celistvy pristup k vasemu zdravi.
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
                  <div className="w-6 h-6 bg-accent rounded-lg" />
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
