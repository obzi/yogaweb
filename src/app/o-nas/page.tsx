export default function ONas() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-accent-dark">O nas</h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Jsme tym nadsenenych lektoru a poradcu, kteri veri v silu
            yogy a zdrave vyzivy.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Placeholder image */}
            <div className="bg-warm rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-warm-dark text-sm">Foto placeholder</span>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Nas pribeh</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                YogaVital vznikla z lasky k pohybu a zdravemu zivotnimu stylu.
                Nase poslani je propojit praxi yogy s vedomym pristupem k vyzive
                a nabidnout tak komplexni cestu ke zdravi.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Nabizime individualni pristup — at uz hledate pravidelne lekce,
                nutricni plan na miru, nebo intenzivni vikendovy pobyt.
                Kazdy z naseho tymu je certifikovany odbornik ve svem oboru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Nas tym</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jana Novakova", role: "Lektorka yogy" },
              { name: "Petr Svoboda", role: "Nutricni poradce" },
              { name: "Eva Kralova", role: "Wellness kouč" },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-32 h-32 bg-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-warm-dark text-xs">Foto</span>
                </div>
                <h3 className="font-semibold">{person.name}</h3>
                <p className="text-foreground/60 text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Nase hodnoty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Individualita",
                desc: "Kazdy je jediny a zaslouzi si pristup na miru.",
              },
              {
                title: "Rovnovaha",
                desc: "Harmonicky pohled na telo, mysl a vyzivu.",
              },
              {
                title: "Komunita",
                desc: "Spolecna cesta inspiruje a motivuje.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-warm-dark/10"
              >
                <h3 className="font-semibold text-accent-dark mb-2">{v.title}</h3>
                <p className="text-foreground/60 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
