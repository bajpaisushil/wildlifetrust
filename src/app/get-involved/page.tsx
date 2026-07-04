"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, User, Check, Sparkles, Smile } from "lucide-react";

export default function GetInvolved() {
  // Donation States
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [selectedTier, setSelectedTier] = useState<number | null>(45);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [checkoutStep, setCheckoutStep] = useState<"form" | "processing" | "success">("form");
  
  // Volunteer States
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerName, setVolunteerName] = useState("");

  const donationTiers = [
    { amount: 15, label: "Sow Native Seed Mix", description: "Purchases a native grass and wildflower seed mix to cover 200 sq. feet of fire burn scar." },
    { amount: 45, label: "Plant 10 Streamside Trees", description: "Buys 10 redwood or alder saplings, soil bags, and guards for stream shade." },
    { amount: 120, label: "Equip a Watershed Volunteer", description: "Provides high-grade waders, clean-up tools, and water monitors for stream surveys." },
  ];

  const mascots = [
    { name: "Rusty", species: "River Otter", description: "Playful waters. Otis loves clean gravel beds and shaded pools.", image: "/images/project_reef.png" },
    { name: "Luna", species: "Spotted Owl", description: "Forest canopy. Luna nests in centennial redwoods.", image: "/images/hero_forest.png" },
    { name: "Finley", species: "Chinook Salmon", description: "Waterways. Finley returns to spawn in Emerald River.", image: "/images/project_leopard.png" },
  ];

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedTier(null);
  };

  const handleTierSelect = (amount: number) => {
    setSelectedTier(amount);
    setCustomAmount("");
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep("processing");
    setTimeout(() => {
      setCheckoutStep("success");
    }, 2000);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (volunteerName.trim()) {
      setVolunteerSubmitted(true);
      setTimeout(() => {
        setVolunteerSubmitted(false);
        setVolunteerName("");
      }, 6000);
    }
  };

  const currentAmount = selectedTier !== null ? selectedTier : parseFloat(customAmount) || 0;

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
            Support with a recurring gift, adopt a local wildlife mascot, or volunteer for hands-on creek cleanups.
          </p>
        </div>
      </section>

      {/* 2. Interactive Donation Engine */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Donation Form Widget */}
          <div className="lg:col-span-7 bg-card border border-card-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            {checkoutStep === "form" && (
              <form onSubmit={handleDonateSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-primary dark:text-primary-light">
                    Direct Conservation Donation
                  </h2>
                  <p className="text-xs text-muted mt-1">
                    Your contribution directly purchases local redwood parcels and spawns river gravel structures.
                  </p>
                </div>

                {/* Toggle Frequency */}
                <div className="grid grid-cols-2 gap-2 bg-muted-light rounded-lg p-1 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setFrequency("monthly")}
                    className={`py-2 rounded-md transition-all ${
                      frequency === "monthly" ? "bg-primary text-white shadow" : "text-foreground hover:bg-stone-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    Monthly (Recommended)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("one-time")}
                    className={`py-2 rounded-md transition-all ${
                      frequency === "one-time" ? "bg-primary text-white shadow" : "text-foreground hover:bg-stone-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    One-Time Gift
                  </button>
                </div>

                {/* Tiers Grid */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-foreground block uppercase tracking-wider">
                    Select a Donation Impact:
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {donationTiers.map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => handleTierSelect(tier.amount)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start space-x-4 ${
                          selectedTier === tier.amount
                            ? "border-primary bg-primary/5 dark:border-primary-light dark:bg-primary-light/5 scale-[1.01]"
                            : "border-card-border hover:bg-muted-light"
                        }`}
                      >
                        <div className={`p-2.5 rounded-full text-white font-mono text-sm font-bold shrink-0 ${
                          selectedTier === tier.amount ? "bg-primary" : "bg-muted"
                        }`}>
                          ${tier.amount}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-serif font-bold text-foreground text-sm">{tier.label}</h4>
                          <p className="text-xs text-muted leading-relaxed mt-1">{tier.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="space-y-2">
                  <label htmlFor="custom-amt" className="text-xs font-bold text-foreground block uppercase tracking-wider">
                    Or Enter Custom Amount ($):
                  </label>
                  <input
                    id="custom-amt"
                    type="number"
                    min="5"
                    placeholder="Enter custom dollar amount"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full bg-muted-light border border-card-border rounded-xl py-3 px-4 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Payment Checkout Info */}
                <div className="bg-muted-light/60 p-4 rounded-xl space-y-3 text-xs border border-card-border/60">
                  <div className="flex items-center space-x-2 font-bold text-foreground">
                    <Heart className="h-4 w-4 text-accent" />
                    <span>Transaction Total: ${currentAmount} {frequency === "monthly" ? "/ Month" : ""}</span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    This simulates a checkout transaction. WHT processes contributions securely through encrypted networks.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={currentAmount <= 0}
                  className="w-full justify-center inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover disabled:bg-stone-300 text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-md"
                >
                  <Heart className="h-5 w-5 fill-current" />
                  <span>Submit Donation</span>
                </button>
              </form>
            )}

            {checkoutStep === "processing" && (
              <div className="h-full min-h-[300px] flex flex-col justify-center items-center space-y-4 text-center">
                <div className="h-10 w-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                <h3 className="font-serif font-bold text-lg text-foreground">Processing Secure Donation</h3>
                <p className="text-xs text-muted max-w-xs">
                  Connecting to payment vault. Thank you for protecting the watersheds.
                </p>
              </div>
            )}

            {checkoutStep === "success" && (
              <div className="h-full min-h-[350px] flex flex-col justify-center items-center space-y-5 text-center animate-fade-in">
                <div className="p-4 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 rounded-full">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-primary dark:text-primary-light">Thank You for Your Support!</h3>
                <p className="text-sm text-foreground/80 max-w-md leading-relaxed">
                  Your mock donation of <strong>${currentAmount} {frequency === "monthly" ? "monthly" : "one-time"}</strong> has been logged. In a production environment, this would fund redwood forestry and anti-poaching measures.
                </p>
                <button
                  onClick={() => {
                    setCheckoutStep("form");
                    setSelectedTier(45);
                    setCustomAmount("");
                  }}
                  className="bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors"
                >
                  Make another contribution
                </button>
              </div>
            )}
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
                      setSelectedTier(null);
                      setCustomAmount("35");
                      window.scrollTo({ top: 400, behavior: "smooth" });
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

      {/* 4. Volunteer Form Section */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
            Hands-on Help
          </span>
          <h2 className="font-serif text-3xl font-bold text-primary dark:text-primary-light">
            Become a Watershed volunteer
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            We hold volunteer field days every second Saturday of the month.
          </p>
        </div>

        <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8 shadow-sm">
          {volunteerSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="inline-flex p-3.5 bg-green-100 text-green-600 rounded-full">
                <Smile className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-primary">Inquiry Registered!</h3>
              <p className="text-sm text-foreground/80 max-w-sm mx-auto leading-relaxed">
                Thank you for applying. A coordinator will email you instructions and safety sheets for the next creek planting session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="vol-name" className="text-xs font-bold text-foreground block">First & Last Name:</label>
                  <input
                    id="vol-name"
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={volunteerName}
                    onChange={(e) => setVolunteerName(e.target.value)}
                    className="w-full bg-muted-light border border-card-border rounded-xl py-2.5 px-3 text-sm text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="vol-email" className="text-xs font-bold text-foreground block">Email Address:</label>
                  <input
                    id="vol-email"
                    required
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-muted-light border border-card-border rounded-xl py-2.5 px-3 text-sm text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-foreground block">Preferred Volunteer Roles (Select all):</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label className="flex items-center space-x-2 border border-card-border rounded-lg p-3 hover:bg-muted-light cursor-pointer">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary shrink-0" defaultChecked />
                    <span>Creek cleanups & trash removal</span>
                  </label>
                  <label className="flex items-center space-x-2 border border-card-border rounded-lg p-3 hover:bg-muted-light cursor-pointer">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary shrink-0" defaultChecked />
                    <span>Redwood/sapling tree planting</span>
                  </label>
                  <label className="flex items-center space-x-2 border border-card-border rounded-lg p-3 hover:bg-muted-light cursor-pointer">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary shrink-0" />
                    <span>Trail maintenance & weeds weeding</span>
                  </label>
                  <label className="flex items-center space-x-2 border border-card-border rounded-lg p-3 hover:bg-muted-light cursor-pointer">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary shrink-0" />
                    <span>Citizen science bird/salmon counts</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full justify-center inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow"
              >
                <User className="h-4 w-4" />
                <span>Register as a Volunteer</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
