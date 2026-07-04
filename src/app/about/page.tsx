"use client";

import { useState } from "react";
import Image from "next/image";
import { User, ShieldCheck, ArrowRight } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2012",
      title: "Founding by Naturalists",
      description: "A small group of local conservationists united to purchase and protect a threatened 40-acre redwood parcel on Redwood Ridge, forming EVT.",
    },
    {
      year: "2016",
      title: "Salmon Restorations Launch",
      description: "Partnered with local watershed experts to restore the first 2 miles of salmon spawning channels in the Emerald River creek system.",
    },
    {
      year: "2020",
      title: "Ecosystem Connectivity campaign",
      description: "Launched our corridor program, connecting isolated forest segments to allow mountain lions and black bears to travel safely.",
    },
    {
      year: "2024",
      title: "1,000+ Volunteer Milestone",
      description: "Expanded our community education and weekend cleanups, registering over 1,000 active local volunteers assisting in weeding and seeding.",
    },
    {
      year: "2026",
      title: "Reaching 2,800+ Protected Acres",
      description: "Acquired critical meadow properties bordering Meadowbrook Wetlands, ensuring migratory waterfowl safety.",
    },
  ];

  const team = [
    {
      name: "Marcus Vance",
      role: "Executive Director & Co-Founder",
      bio: "20+ years in environmental policy. Marcus oversees land acquisition negotiations and local council relations.",
      image: "/images/project_gorilla.png", // Mocked path or user-supplied later
    },
    {
      name: "Dr. Sarah Lin",
      role: "Lead Field Biologist",
      bio: "Specializes in river ecology. Sarah guides the watershed restoration projects and salmon bed monitoring.",
      image: "/images/project_leopard.png",
    },
    {
      name: "Ranger Dave Miller",
      role: "Head of Land Patrols & Trails",
      bio: "Loves old-growth forest paths. Dave coordinates volunteer planting sessions and patrols reserves for safety.",
      image: "/images/hero_forest.png",
    },
  ];

  const finances = [
    { label: "Land Acquisition & Protection", value: 70, color: "bg-emerald-600 dark:bg-emerald-500" },
    { label: "Watershed & Salmon Bed Restoration", value: 15, color: "bg-blue-600 dark:bg-blue-500" },
    { label: "Community Clean-ups & Education", value: 10, color: "bg-amber-600 dark:bg-amber-500" },
    { label: "Admin & Operations", value: 5, color: "bg-stone-400 dark:bg-stone-500" },
  ];

  const [hoveredFinance, setHoveredFinance] = useState<number | null>(null);

  return (
    <div className="relative">
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
            About the Trust
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Our Story, Mission & Team
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Conserving the regional beauty, flora, and fauna of the Emerald Valley through direct land acquisition and community stewardship.
          </p>
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-card border border-card-border p-8 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-primary dark:text-primary-light">
              We focus on local, measurable conservation impact.
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Unlike large global conservation groups, we focus entirely on the local ecosystems of our district. Every dollar donated stays right here, funding physical purchases of woodlots, planting native trees, and clearing trash from spawning channels.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed font-semibold">
              Our ultimate vision is a continuous green corridor linking the foothills to the coastal plain, allowing wildlife to migrate safely without human barriers.
            </p>
          </div>
          <div className="bg-primary/5 dark:bg-primary-light/5 border border-primary/10 rounded-xl p-6 space-y-4 text-center">
            <div className="inline-flex p-3 bg-primary text-white rounded-full">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-primary dark:text-primary-light">Our Promise</h3>
            <p className="text-xs text-muted leading-relaxed">
              We pledge to allocate at least 90% of all public donations directly to field actions and conservation purchases.
            </p>
          </div>
        </div>
      </section>

      {/* 3. History Timeline (Interactive) */}
      <section className="py-16 bg-muted-light/35 border-t border-b border-card-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
              Timeline
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary dark:text-primary-light">
              Milestones of Growth
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              How a small group of concerned citizens grew into a local ecological safeguard.
            </p>
          </div>

          <div className="relative border-l-2 border-stone-200 dark:border-slate-700 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
            {milestones.map((item) => (
              <div key={item.year} className="relative group">
                {/* Bullet */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 bg-background border-4 border-primary dark:border-primary-light h-6 w-6 rounded-full group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-primary dark:bg-primary-light rounded-full" />
                </div>
                {/* Content Card */}
                <div className="bg-card border border-card-border p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-2">
                  <span className="text-sm font-bold text-accent tracking-wider font-mono">
                    {item.year}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
            Our Team
          </span>
          <h2 className="font-serif text-3xl font-bold text-primary dark:text-primary-light">
            People on the Ground
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Meet the researchers, policy advocates, and rangers protecting our backyard reserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-card border border-card-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="relative h-60 w-full bg-stone-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground">{member.name}</h3>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider block mt-0.5">
                    {member.role}
                  </span>
                  <p className="text-xs text-muted leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>
                <div className="pt-3 border-t border-card-border flex items-center space-x-2 text-xs font-bold text-primary dark:text-primary-light">
                  <User className="h-4 w-4" />
                  <span>Trust Representative</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Financial Transparency (Pie Chart Alternative) */}
      <section className="py-20 bg-muted-light/35 border-t border-card-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
              Transparency
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary dark:text-primary-light">
              Financial Integrity & Allocation
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Hover over the segments below to see how we deploy funds to conserve Emerald Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Visual breakdown list */}
            <div className="space-y-4">
              {finances.map((fin, idx) => (
                <div
                  key={fin.label}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    hoveredFinance === idx
                      ? "border-primary dark:border-primary-light bg-card shadow-sm translate-x-2"
                      : "border-card-border/60 bg-transparent hover:bg-card/40"
                  }`}
                  onMouseEnter={() => setHoveredFinance(idx)}
                  onMouseLeave={() => setHoveredFinance(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-serif font-bold text-foreground text-sm sm:text-base">
                      {fin.label}
                    </span>
                    <span className="font-bold text-primary dark:text-primary-light text-base">
                      {fin.value}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${fin.color}`}
                      style={{ width: `${fin.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Circular representation */}
            <div className="flex justify-center items-center">
              <div className="relative h-64 w-64 rounded-full border border-card-border/80 bg-card shadow-lg flex items-center justify-center p-6 text-center">
                <div className="space-y-2">
                  {hoveredFinance !== null ? (
                    <div className="animate-fade-in space-y-1">
                      <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">
                        Category Share
                      </span>
                      <div className="font-serif text-4xl font-extrabold text-primary dark:text-primary-light">
                        {finances[hoveredFinance].value}%
                      </div>
                      <p className="text-xs text-muted leading-tight font-medium max-w-[150px] mx-auto">
                        {finances[hoveredFinance].label}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">
                        EVT Total Budget
                      </span>
                      <div className="font-serif text-3xl font-extrabold text-foreground">
                        90% DIRECT
                      </div>
                      <p className="text-xs text-muted leading-tight font-medium max-w-[150px] mx-auto">
                        Dedicated to field projects & habitat purchases.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Link CTA */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4 space-y-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Want to volunteer or request an annual report?
        </h2>
        <p className="text-xs sm:text-sm text-muted">
          We welcome local citizens, schools, and civic groups to tour our projects or review our audits.
        </p>
        <div className="pt-2">
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300"
          >
            <span>Get in touch with us</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
