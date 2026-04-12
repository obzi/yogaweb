import Link from "next/link";

const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "Forendoors", href: "https://forendoors.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-accent-dark text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-3">YogaVital</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Yoga, zdrava vyziva a harmonie tela i mysli.
              Najdete u nas lekce, kurzy, workshopy a pobyty.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-3">Navigace</h4>
            <ul className="space-y-1 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Domov</Link></li>
              <li><Link href="/o-nas" className="hover:text-white transition-colors">O nas</Link></li>
              <li><Link href="/sluzby" className="hover:text-white transition-colors">Sluzby</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Sledujte nas</h4>
            <ul className="space-y-1 text-sm text-white/70">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} YogaVital. Vsechna prava vyhrazena.
        </div>
      </div>
    </footer>
  );
}
