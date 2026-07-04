"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Check, Sparkles, QrCode } from "lucide-react";

export default function GetInvolved() {
  // Mascot Adoption State
  const [selectedMascot, setSelectedMascot] = useState<{ name: string; species: string } | null>(null);

  const mascots = [
    { name: "Rusty", species: "River Otter", description: "Playful waters. Otis loves clean gravel beds and shaded pools.", image: "/images/project_reef.png" },
    { name: "Luna", species: "Spotted Owl", description: "Forest canopy. Luna nests in centennial redwoods.", image: "/images/hero_forest.png" },
    { name: "Finley", species: "Chinook Salmon", description: "Waterways. Finley returns to spawn in Emerald River.", image: "/images/project_leopard.png" },
  ];


  return (
    <div className="relative min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative bg-emerald-950 py-20 text-white text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_forest.png"
            alt="Misty redwood forest conservation"
            fill
            priority
            className="object-cover opacity-25 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-emerald-950/90 to-emerald-950/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4 animate-fade-in pt-12">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/20 px-3 py-1 rounded-full border border-accent/20">
            Join the Cause
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Ways to Help WHT
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Support WHT with a direct donation or adopt a local wildlife mascot.
          </p>
        </div>
      </section>

      {/* 2. Interactive Donation Engine */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* QR Code Donation Widget */}
          <div id="donation-section" className="lg:col-span-7 bg-card border border-card-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary dark:text-primary-light flex items-center gap-2">
                  <QrCode className="h-6 w-6 text-accent" />
                  <span>Scan to Donate</span>
                </h2>
                <p className="text-xs text-muted mt-1">
                  As a local grassroots NGO, we keep giving direct. Scan the code to fund woodlots and watershed restoration.
                </p>
              </div>

              {/* Dynamic Mascot Banner */}
              {selectedMascot && (
                <div className="bg-primary/5 dark:bg-primary-light/5 border border-primary/20 dark:border-primary-light/20 text-foreground rounded-xl p-4 flex items-center justify-between text-xs animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/20 rounded-full text-accent shrink-0 animate-pulse">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <span>
                      Adopting <strong>{selectedMascot.name} ({selectedMascot.species})</strong>! Scan the QR code to contribute <strong>$35</strong>.
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedMascot(null)}
                    className="text-muted hover:text-foreground font-bold ml-2 text-lg leading-none"
                    aria-label="Clear mascot selection"
                  >
                    &times;
                  </button>
                </div>
              )}

              {/* QR Code Display Container */}
              <div className="flex flex-col items-center justify-center p-6 bg-muted-light/40 border border-card-border/60 rounded-xl relative group overflow-hidden">
                {/* Scanner decorative corners */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/40 dark:border-primary-light/40 group-hover:border-accent transition-colors" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/40 dark:border-primary-light/40 group-hover:border-accent transition-colors" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/40 dark:border-primary-light/40 group-hover:border-accent transition-colors" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/40 dark:border-primary-light/40 group-hover:border-accent transition-colors" />

                {/* QR Code Image */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-white p-3 rounded-lg shadow-inner transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/images/donation_qr_code.png"
                    alt="Scan to Donate QR Code"
                    fill
                    className="object-contain"
                  />
                  {/* Subtle scan active line */}
                  <div className="absolute left-0 right-0 h-0.5 bg-accent/50 animate-scan z-10" />
                </div>

                <div className="mt-4 text-center space-y-1">
                  <p className="text-xs font-bold text-foreground">Scan with your banking or payment app</p>
                  <p className="text-[10px] text-muted">Supports Venmo, PayPal, Cash App, Zelle, or credit wallets</p>
                </div>
              </div>

              {/* How to Donate Instructions */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">How to complete your gift:</h3>
                <ol className="text-xs text-muted space-y-2 list-decimal list-inside pl-1">
                  <li>Open your preferred mobile banking, camera, or payment app.</li>
                  <li>Focus your lens on the QR code until the donation link is detected.</li>
                  <li>Enter your contribution amount (e.g. <strong>$35</strong> for mascot adoption) and complete the secure transfer.</li>
                </ol>
              </div>
            </div>

            {/* Donation impact breakdown */}
            <div className="border-t border-card-border/60 pt-4 mt-4 text-[11px] text-muted flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <Heart className="h-3.5 w-3.5 text-accent fill-current" />
                100% of QR funds go to local ecosystems
              </span>
              <span>Need help? <a href="/contact" className="underline text-primary dark:text-primary-light hover:text-accent">Contact us</a></span>
            </div>
          </div>

          {/* Right Side: Trust & Direct Impact FAQ Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-serif font-bold text-xl">Where Does My Money Go?</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3.5">
                  <div className="p-1 bg-white/10 rounded-full shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span><strong>90% Direct Conservation:</strong> Lands purchase, weed solarization, gravel laying.</span>
                </li>
                <li className="flex items-start space-x-3.5">
                  <div className="p-1 bg-white/10 rounded-full shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span><strong>8% Educational Outreach:</strong> Organizing citizen wildlife tracking.</span>
                </li>
                <li className="flex items-start space-x-3.5">
                  <div className="p-1 bg-white/10 rounded-full shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span><strong>2% Operational Audits:</strong> Required legal filing and local reporting.</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/15 text-xs text-stone-200">
                WHT is registered 501(c)(3) NGO. All donations are tax-deductible to the extent allowed by law.
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-2xl p-6 space-y-4 shadow-sm">
              <h4 className="font-serif font-bold text-foreground text-base">Questions about donations?</h4>
              <p className="text-xs text-muted leading-relaxed">
                If you have questions regarding land donations, legacy endowments, or corporate partnerships, please contact our fundraising office directly.
              </p>
              <a href="/contact" className="text-xs font-bold text-primary dark:text-primary-light hover:text-accent block">
                Contact Fundraising Representative &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Adopt a Mascot Center */}
      <section className="py-20 bg-muted-light/35 border-t border-b border-card-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
              Adoptions
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary dark:text-primary-light">
              Adopt a Wildlife Mascot
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Choose a representative animal. For $35, receive an adoption certificate and support their habitat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mascots.map((mascot) => (
              <div key={mascot.name} className="bg-card border border-card-border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col group">
                <div className="relative h-44 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={mascot.image}
                    alt={mascot.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
                      Species: {mascot.species}
                    </span>
                    <h4 className="font-serif font-bold text-foreground text-lg">
                      Adopt {mascot.name}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {mascot.description}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedMascot({ name: mascot.name, species: mascot.species });
                      const element = document.getElementById("donation-section");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full text-center py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-xs rounded-lg transition-colors duration-300"
                  >
                    Adopt {mascot.name} - $35
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
