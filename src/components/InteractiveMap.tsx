"use client";

import { useState } from "react";
import { Trees, Fish, Bird, MapPin, ArrowRight, type LucideIcon } from "lucide-react";

interface Region {
  id: string;
  name: string;
  type: string;
  icon: LucideIcon;
  description: string;
  acres: number;
  species: string[];
  status: string;
  percentage: number;
  color: string;
}

export default function InteractiveMap() {
  const regions: Region[] = [
    {
      id: "redwood-ridge",
      name: "Redwood Canopy Ridge",
      type: "Forest Reserve",
      icon: Trees,
      description: "Home to centennial old-growth Redwoods, providing nesting grounds for the endangered Marbled Murrelet and shelter for black bears. We are actively purchasing parcels of land to connect fragmented habitat corridors.",
      acres: 1850,
      species: ["Black Bear", "Marbled Murrelet", "Mountain Lion"],
      status: "Actively expanding corridors",
      percentage: 82,
      color: "bg-emerald-600 dark:bg-emerald-500",
    },
    {
      id: "emerald-river",
      name: "Emerald River Watershed",
      type: "Riparian Spawning Habitat",
      icon: Fish,
      description: "A vital waterway for Chinook salmon spawning. Our team works with landowners to construct gravel spawning beds, plant shade canopy trees to control water temperature, and clean up runoff blockages.",
      acres: 620,
      species: ["Chinook Salmon", "River Otter", "Bald Eagle"],
      status: "Spawning bed restoration",
      percentage: 65,
      color: "bg-blue-600 dark:bg-blue-500",
    },
    {
      id: "meadowbrook",
      name: "Meadowbrook Wetlands",
      type: "Wetland Sanctuary",
      icon: Bird,
      description: "A critical rest-stop for migratory wildfowl on the Pacific Flyway. We are working to eradicate invasive reed canary grass and replant native sedges to attract nesting waterbirds.",
      acres: 380,
      species: ["Sandhill Crane", "Red-Legged Frog", "Western Pond Turtle"],
      status: "Invasive species mitigation",
      percentage: 90,
      color: "bg-amber-600 dark:bg-amber-500",
    },
  ];

  const [activeRegion, setActiveRegion] = useState<Region>(regions[0]);

  return (
    <div className="bg-card rounded-2xl shadow-xl border border-card-border p-6 md:p-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
          Interactive Hub
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold mt-3 text-primary dark:text-primary-light">
          Explore Our Regional Preserves
        </h3>
        <p className="text-muted text-sm md:text-base mt-2">
          Click on our local sanctuaries below to see the wildlife we protect and our ongoing restoration progress.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Selector Panel */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {regions.map((region) => {
            const Icon = region.icon;
            const isActive = activeRegion.id === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start space-x-4 ${
                  isActive
                    ? "border-primary bg-primary/5 dark:border-primary-light dark:bg-primary-light/5 shadow-sm scale-[1.02]"
                    : "border-card-border hover:bg-muted-light"
                }`}
              >
                <div
                  className={`p-3 rounded-lg text-white ${
                    isActive ? region.color : "bg-muted"
                  } transition-colors`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-semibold text-accent tracking-wider">
                      {region.type}
                    </span>
                    <span className="text-[10px] text-muted flex items-center gap-1 font-medium">
                      <MapPin className="h-3 w-3" /> {region.acres} Acres
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base mt-1 text-foreground">
                    {region.name}
                  </h4>
                  <p className="text-xs text-muted truncate mt-1">
                    Status: {region.status}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info & Map Display Panel */}
        <div className="lg:col-span-7 bg-muted-light/60 rounded-xl p-6 flex flex-col justify-between border border-card-border/60">
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-light">
                Reserve Details & Impact
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-white dark:bg-slate-800 rounded-full border border-card-border text-foreground">
                {activeRegion.acres} protected acres
              </span>
            </div>

            <h4 className="font-serif text-2xl font-bold text-foreground">
              {activeRegion.name}
            </h4>

            <p className="text-sm text-foreground/80 leading-relaxed">
              {activeRegion.description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-muted block mb-2">
                Key Species Protected:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeRegion.species.map((sp) => (
                  <span
                    key={sp}
                    className="text-xs bg-white dark:bg-slate-800 text-foreground px-3 py-1 rounded-full shadow-sm border border-card-border"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-card-border space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-muted">Restoration Progress</span>
              <span className="font-bold text-primary dark:text-primary-light">
                {activeRegion.percentage}% Complete
              </span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${activeRegion.color}`}
                style={{ width: `${activeRegion.percentage}%` }}
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-muted italic">
                Target: 100% stable ecosystem buffer
              </span>
              <a
                href="/projects"
                className="text-xs font-semibold text-primary dark:text-primary-light hover:text-accent dark:hover:text-accent flex items-center gap-1 group"
              >
                View all project updates
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
