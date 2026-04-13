"use client";

import { useState, type FormEvent } from "react";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Forendoors",
    href: "https://forendoors.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-accent-dark">Kontakt</h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Ozvete se nam — radi vam odpotime na vsechny dotazy.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Napiste nam</h2>
              {submitted ? (
                <div className="bg-accent/10 rounded-2xl p-8 text-center">
                  <p className="text-accent-dark font-semibold text-lg">
                    Dekujeme za vasi zpravu!
                  </p>
                  <p className="text-foreground/60 mt-2">
                    Ozveme se vam co nejdrive.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Jmeno</label>
                    <input
                      type="text"
                      required
                      placeholder="Vase jmeno"
                      className="w-full border border-warm-dark/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="vas@email.cz"
                      className="w-full border border-warm-dark/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Predmet</label>
                    <select className="w-full border border-warm-dark/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white">
                      <option>Obecny dotaz</option>
                      <option>Lekce yogy</option>
                      <option>Nutricni poradenstvi</option>
                      <option>Workshopy & Kurzy</option>
                      <option>Vikendove pobyty</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Zprava</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Vase zprava..."
                      className="w-full border border-warm-dark/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors"
                  >
                    Odeslat zpravu
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Kontaktni udaje</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <a
                    href="mailto:info@nutyo.cz"
                    className="text-accent-dark hover:underline"
                  >
                    info@nutyo.cz
                  </a>
                  <p className="text-foreground/50 text-sm mt-1">(placeholder)</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <a
                    href="tel:+420123456789"
                    className="text-accent-dark hover:underline"
                  >
                    +420 123 456 789
                  </a>
                  <p className="text-foreground/50 text-sm mt-1">(placeholder)</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Adresa</h3>
                  <p className="text-foreground/70">
                    NUTYO Studio<br />
                    Ulice 123<br />
                    Praha, 110 00
                  </p>
                  <p className="text-foreground/50 text-sm mt-1">(placeholder)</p>
                </div>

                {/* Social links */}
                <div>
                  <h3 className="font-semibold mb-3">Sledujte nas</h3>
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.name}
                        className="w-10 h-10 bg-accent/10 text-accent-dark rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-warm rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-warm-dark text-sm">Mapa — placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
