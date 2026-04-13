import Image from "next/image";

export default function ONas() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-accent-dark">O nas</h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Jsme Karolina a Veronika — spojuje nas laska k joze, zdravemu
            zivotnimu stylu a touha predavat dal to, co nam samotnym pomaha.
          </p>
        </div>
      </section>

      {/* Karolína */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/yogaweb/kaja.png"
                alt="Karolina Ruszova"
                width={400}
                height={400}
                className="rounded-2xl object-cover aspect-square"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Karolina</h2>
              <p className="text-accent-dark font-medium mb-4">
                Nutricni poradkyne, zakladatelka NUKARU
              </p>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Ahoj, jsem Kaja! Joze a zdravemu zivotnimu stylu se venuji uz
                  radu let. Postupne jsem si uvedomila, ze pohyb a vyziva jdou
                  ruku v ruce — jedno bez druheho nefunguje naplno.
                </p>
                <p>
                  Zalozila jsem NUKARU, kde propojuji praxi jogy s nutricnim
                  poradenstvi. Verim, ze kazdy si zaslouzi individualni pristup —
                  at uz hledate cestu k lepsimu zdravi, chcete zacit s jogou,
                  nebo potrebujete poradit s jidelnickem.
                </p>
                <p>
                  Mym cilem je vytvorit bezpecny prostor, kde se muzete rozvjet
                  svym vlastnim tempem. Rada vas provedu na teto ceste.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/nukaru_cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-dark font-medium hover:underline"
                >
                  Instagram
                </a>
                <span className="text-foreground/30">|</span>
                <a
                  href="https://nukaru.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent-dark font-medium hover:underline"
                >
                  nukaru.cz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veronika */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 flex justify-center">
              <Image
                src="/yogaweb/verca.png"
                alt="Veronika"
                width={400}
                height={400}
                className="rounded-2xl object-cover aspect-square"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-2xl font-bold mb-1">Veronika</h2>
              <p className="text-accent-dark font-medium mb-4">
                Lektorka jogy, propagatorka zdraveho zivotniho stylu
              </p>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Jsem Verca a joga je pro me vic nez cviceni — je to zpusob,
                  jak zit vedomeji a v rovnovaze. K joze jsem se dostala v
                  obdobi, kdy jsem hledala cestu ke klidu a k sobe same.
                </p>
                <p>
                  Postupne se joga stala soucastí meho kazdeho dne a s ni i
                  zajem o zdravou vyzivu a celostni pristup k peci o telo i mysl.
                  Dnes predavam sve zkusenosti dal — na lekcich, workshopech
                  a pri osobnich konzultacich.
                </p>
                <p>
                  Verim, ze mala kazdodenni zmena muze prinest velke vysledky.
                  Rada vas inspiruji a podpoirim na vasi ceste ke zdravejsimu
                  a spokojenejsimu zivotu.
                </p>
              </div>
            </div>
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
                title: "Autenticita",
                desc: "Sdilime to, co samy zijeme a cemu verime.",
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
