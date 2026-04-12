const services = [
  {
    title: "Nutricni poradenstvi",
    desc: "Osobni konzultace zamerne na vasi zdravotni situaci, cile a zivotni styl. Analyzujeme vase stravovaci navyky a navrhneme plan zlepseni.",
    tag: "Vyziva",
  },
  {
    title: "Sestaveni racionalniho jidelnicku",
    desc: "Jidelnicek na miru vasim potrebam — at uz chcete zhubnout, nabrat svalovou hmotu, nebo se proste stravovat zdraveji. Vcetne nakupniho seznamu a receptu.",
    tag: "Vyziva",
  },
  {
    title: "Individualni lekce yogy",
    desc: "Lekce 1-na-1 prisipusobena vasim potrebam a urovni. Idealni pro zacatecniky i pokrocile, kteri chteji pracovat na konkretnich cilech.",
    tag: "Yoga",
  },
  {
    title: "Otevrene lekce",
    desc: "Pravidelne skupinove lekce yogy pro verejnost. Ruzne styly a urovne — hatha, vinyasa, yin yoga a dalsi. Prijd'te, kdykoliv se vam hodi.",
    tag: "Yoga",
  },
  {
    title: "Uzavrene kurzy",
    desc: "Vicetydeni programy s propojenym obsahem. Systematicky vas provedeme od zakladu k pokrocilejsi praxi. Limitovany pocet ucastniku pro osobni pristup.",
    tag: "Kurz",
  },
  {
    title: "Workshopy",
    desc: "Jednodenni nebo puldenni temticke workshopy — napr. yoga pro zada, stresovy management, zaklady zdraveho varenni, detox programy a dalsi.",
    tag: "Workshop",
  },
  {
    title: "Vikendove pobyty",
    desc: "Intenzivni vikendove retreaty spojujici yogu, zdravou vyzivu, relaxaci a prirodu. Idealni zpusob, jak se odpojit od kazdodenni rutiny a naplno se venovat sobe.",
    tag: "Pobyt",
  },
];

function tagColor(tag: string) {
  switch (tag) {
    case "Vyziva":
      return "bg-green-100 text-green-800";
    case "Yoga":
      return "bg-purple-100 text-purple-800";
    case "Kurz":
      return "bg-blue-100 text-blue-800";
    case "Workshop":
      return "bg-amber-100 text-amber-800";
    case "Pobyt":
      return "bg-rose-100 text-rose-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default function Sluzby() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-accent-dark">Nase sluzby</h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Od individualnich lekci yogy pres nutricni poradenstvi az po vikendove
            retreaty — vybirejte, co vam vyhovuje.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-warm-dark/10 hover:shadow-md transition-shadow"
              >
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${tagColor(s.tag)}`}
                >
                  {s.tag}
                </span>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{s.desc}</p>
                <div className="mt-6">
                  <span className="text-sm text-accent-dark font-medium cursor-pointer hover:underline">
                    Vice informaci &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing placeholder */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Cenik</h2>
          <p className="text-foreground/60 mb-8">
            Cenik pripravujeme. Pro vice informaci nas nevahjte kontaktovat.
          </p>
          <div className="inline-block bg-warm rounded-2xl px-12 py-8">
            <span className="text-warm-dark">Cenik — pripravujeme</span>
          </div>
        </div>
      </section>
    </>
  );
}
