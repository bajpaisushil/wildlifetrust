"use client";

import { useState } from "react";
import Image from "next/image";
import { Filter, TreePine, Fish, Bird, CheckCircle2, AlertCircle, X, MapPin, Milestone, Check } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: "Forest" | "Riparian" | "Wetland";
  status: "Active" | "Completed";
  location: string;
  targetSpecies: string[];
  acresAffected: number;
  progress: number;
  image: string;
  fullStory: string;
  milestones: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "fire-reforestation",
      title: "Reforesting Fire Burn Scars",
      category: "Forest",
      status: "Active",
      description: "Planting 5,000+ native saplings on Redwood Ridge to stabilize slopes and restore the wildlife canopy.",
      location: "Redwood Canopy Ridge (East)",
      targetSpecies: ["Black Bear", "Western Grey Squirrel", "Douglas Fir"],
      acresAffected: 45,
      progress: 64,
      image: "/images/hero_forest.png",
      fullStory: "Following the fire season, high slopes on Redwood Ridge were left barren, causing soil erosion into local salmon creeks. Our volunteers are actively planting young redwoods and douglas fir trees to anchor the topsoil and rebuild nesting cover.",
      milestones: [
        "Completed soil stability assessment (Oct 2025)",
        "Planted first batch of 1,800 redwoods (Dec 2025)",
        "Launched community volunteer seeding program (Feb 2026)",
        "Installed animal grazing deterrent guards (Ongoing)",
      ],
    },
    {
      id: "creek-canopy-shade",
      title: "Creek Canopy Shade Restoration",
      category: "Riparian",
      status: "Active",
      description: "Planting riparian trees along creeks to shade salmon streams and decrease summer water temperatures.",
      location: "Emerald River Upper Tributaries",
      targetSpecies: ["Chinook Salmon", "Caddisfly", "River Otter"],
      acresAffected: 12,
      progress: 40,
      image: "/images/project_reef.png",
      fullStory: "Unshaded stream banks raise summer water temperatures to levels lethal to salmon eggs. EVT is planting native alders, willows, and dogwoods to cast critical shade and cool the pools where spawning Chinook rest.",
      milestones: [
        "Cleared invasive blackberry vines along bank (Nov 2025)",
        "Planted 600 willow and alder whips (Jan 2026)",
        "Installed water temperature trackers (Mar 2026)",
      ],
    },
    {
      id: "wetland-reed-mitigation",
      title: "Wetland Reed Canary Grass Mitigation",
      category: "Wetland",
      status: "Completed",
      description: "Eradicating invasive reed canary grass to restore native sedges and attract migrating waterbirds.",
      location: "Meadowbrook Wetlands Sanctuary",
      targetSpecies: ["Sandhill Crane", "Northern Pintail", "Red-Legged Frog"],
      acresAffected: 28,
      progress: 100,
      image: "/images/project_gorilla.png",
      fullStory: "Invasive reeds formed thick, monoculture mats choking out native wetland grasses and blocking birds. Over a 12-month period, we manually cut reeds and sowed native bulrush and sedges, successfully attracting returning Sandhill Cranes.",
      milestones: [
        "Mapped invasive coverage using drone surveys (Jun 2025)",
        "Mowed and solarized reed roots (Jul-Sep 2025)",
        "Broadcasted native sedge seed mix (Oct 2025)",
        "Migratory wildfowl nesting observed (Spring 2026)",
      ],
    },
    {
      id: "salmon-gravel-beds",
      title: "Salmon Gravel Spawning Beds",
      category: "Riparian",
      status: "Active",
      description: "Adding clean, spawning-sized gravel behind natural log jams to create salmon nests.",
      location: "Emerald River Main Spawning Bed",
      targetSpecies: ["Coho Salmon", "Steelhead Trout", "Bald Eagle"],
      acresAffected: 6,
      progress: 80,
      image: "/images/project_leopard.png",
      fullStory: "Siltation has cemented salmon gravels, making nesting impossible. EVT is importing clean river gravel and building timber structures to slow the current, allowing natural gravel sorting and creating protected side-channels.",
      milestones: [
        "Constructed 3 wood-debris log structures (Aug 2025)",
        "Deposited 40 tons of sorting gravels (Sep 2025)",
        "Observed 12 salmon redds (nesting sites) (Nov 2025)",
        "Instream monitoring camera updates (Ongoing)",
      ],
    },
    {
      id: "ridge-buffer-purchase",
      title: "Ridge Habitat Buffer Purchase",
      category: "Forest",
      status: "Completed",
      description: "Acquiring a critical 25-acre forested private property adjoining our Redwood Ridge reserve.",
      location: "Redwood Canopy Ridge (South Edge)",
      targetSpecies: ["Mountain Lion", "Spotted Owl", "Pacific Yew"],
      acresAffected: 25,
      progress: 100,
      image: "/images/project_savannah.png",
      fullStory: "A critical piece of forest connecting the ridge to public wildlands went on sale. Thanks to local donors, EVT raised the deposit to acquire the parcel, averting private residential clearing and ensuring continuous migration routes.",
      milestones: [
        "Secured property survey and purchase option (Mar 2025)",
        "Fundraised deposit amount from local community (Apr-Jun 2025)",
        "Finalized easement registry (Sep 2025)",
        "Removed internal boundary fences (Nov 2025)",
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeStatus, setActiveStatus] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchCat = activeCategory === "All" || project.category === activeCategory;
    const matchStatus = activeStatus === "All" || project.status === activeStatus;
    return matchCat && matchStatus;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Forest":
        return <TreePine className="h-4 w-4" />;
      case "Riparian":
        return <Fish className="h-4 w-4" />;
      case "Wetland":
        return <Bird className="h-4 w-4" />;
      default:
        return null;
    }
  };

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
            Field Actions
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Active Conservation Campaigns
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover how we manage regional reserves and salmon spawning waters right here in Emerald Valley.
          </p>
        </div>
      </section>

      {/* 2. Filter & Controls Section */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-card-border rounded-xl p-4 sm:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-2 text-foreground font-semibold text-sm">
            <Filter className="h-4 w-4 text-primary dark:text-primary-light" />
            <span>Filter Initiatives:</span>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="flex space-x-1.5 bg-muted-light rounded-lg p-1 text-xs">
              {["All", "Forest", "Riparian", "Wetland"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "text-foreground hover:bg-stone-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex space-x-1.5 bg-muted-light rounded-lg p-1 text-xs">
              {["All", "Active", "Completed"].map((stat) => (
                <button
                  key={stat}
                  onClick={() => setActiveStatus(stat)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeStatus === stat
                      ? "bg-primary text-white shadow-sm"
                      : "text-foreground hover:bg-stone-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {stat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catalog Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-card rounded-2xl border border-card-border overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-44 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-primary text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm ${
                        project.status === "Completed"
                          ? "bg-green-600 text-white"
                          : "bg-amber-600 text-white"
                      }`}
                    >
                      {project.status === "Completed" ? (
                        <CheckCircle2 className="h-3 w-3" />
                      ) : (
                        <AlertCircle className="h-3 w-3" />
                      )}
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-muted flex items-center gap-1 font-semibold uppercase">
                      <MapPin className="h-3 w-3 text-accent" /> {project.location}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary dark:group-hover:text-primary-light transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-card-border/60">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-muted">Impact Progress</span>
                      <span className="text-primary dark:text-primary-light">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          project.status === "Completed" ? "bg-green-600" : "bg-primary dark:bg-primary-light"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-primary dark:text-primary-light hover:underline font-bold block pt-1">
                      Click to read progress updates &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-card-border p-12 text-center rounded-2xl">
            <p className="text-muted text-sm font-medium">No matching initiatives found. Try relaxing the filters.</p>
          </div>
        )}
      </section>

      {/* 4. Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border border-card-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in flex flex-col">
            
            {/* Header Banner inside modal */}
            <div className="relative h-48 sm:h-56 w-full bg-stone-100 shrink-0">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 text-foreground p-2 rounded-full shadow hover:bg-accent hover:text-white transition-colors duration-300"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-6 space-y-1 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-accent px-2 py-0.5 rounded-md">
                  {selectedProject.category} Ecosystem
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              <div className="flex flex-wrap gap-4 text-xs font-semibold border-b border-card-border pb-4 justify-between">
                <span className="flex items-center gap-1 text-muted">
                  <MapPin className="h-4 w-4 text-accent" /> {selectedProject.location}
                </span>
                <span className="text-foreground">
                  Acres Protected: <strong className="text-primary dark:text-primary-light font-bold">{selectedProject.acresAffected}</strong>
                </span>
                <span
                  className={`px-2 py-0.5 rounded font-bold uppercase ${
                    selectedProject.status === "Completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400"
                  }`}
                >
                  {selectedProject.status}
                </span>
              </div>

              {/* Story */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-base text-foreground">Overview & Local Need</h3>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {selectedProject.fullStory}
                </p>
              </div>

              {/* Target Species */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-base text-foreground">Target Species Benefited</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.targetSpecies.map((sp) => (
                    <span
                      key={sp}
                      className="text-xs bg-muted-light text-foreground px-3 py-1 rounded-full border border-card-border"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Milestones / Logs */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-base text-foreground flex items-center gap-2">
                  <Milestone className="h-4 w-4 text-primary dark:text-primary-light" />
                  <span>Restoration Timeline & Logs</span>
                </h3>
                <ul className="space-y-2 text-xs">
                  {selectedProject.milestones.map((ms, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-muted leading-relaxed">
                      <div className="p-0.5 bg-primary/10 rounded-full text-primary dark:text-primary-light shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{ms}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Slider */}
              <div className="pt-2 border-t border-card-border space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-muted">Campaign Completion</span>
                  <span className="text-primary dark:text-primary-light">{selectedProject.progress}%</span>
                </div>
                <div className="w-full bg-stone-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      selectedProject.status === "Completed" ? "bg-green-600" : "bg-primary dark:bg-primary-light"
                    }`}
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-muted-light/40 border-t border-card-border flex justify-end shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors duration-300"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
