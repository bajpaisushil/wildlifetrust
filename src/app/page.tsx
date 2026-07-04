import Image from "next/image";
import Link from "next/link";
import { Trees, Compass, Users, Map, Heart, ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import InteractiveMap from "@/components/InteractiveMap";

export default function Home() {
  const stats = [
    { value: "2,850+", label: "Acres Protected", icon: Trees },
    { value: "15+ mi", label: "Salmon Watershed Restored", icon: Compass },
    { value: "1,200+", label: "Local Volunteers", icon: Users },
    { value: "3", label: "Active Preserves", icon: Map },
  ];

  const highlights = [
    {
      title: "Reforesting Fire Burn Scars",
      description: "Restoring the local ridge ecosystems damaged by recent wildland fires by planting 5,000+ native saplings including redwoods and douglas firs.",
      image: "/images/hero_forest.png", // Fallback to our generated asset
      category: "Forest Ecology",
    },
    {
      title: "Salmon Spawning Bed Protection",
      description: "Constructing protective structures and planting streamside trees along the Emerald River to reduce temperature and run-off sedimentation.",
      image: "/images/project_reef.png", // Will use reef as placeholder if they change, but path is set
      category: "Riparian Restorations",
    },
    {
      title: "Urban Wildlife Corridors",
      description: "Educating local communities on bear-safe containment and building green fences to ensure safe animal migration around roadways.",
      image: "/images/project_leopard.png",
      category: "Community Conservation",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 bg-emerald-950 text-white">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_forest.png"
            alt="Misty redwood forest conservation"
            fill
            priority
            className="object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-emerald-950/80 to-emerald-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-light px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-accent/30">
            <Leaf className="h-3.5 w-3.5" />
            <span>Emerald Valley Conservation Trust</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.15]">
            Protecting the Wild Spaces of Our Local Community
          </h1>

          <p className="text-stone-200 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            We are a dedicated local NGO conserving regional redwood forests, restoring critical salmon spawning watersheds, and building safe wildlife pathways in the Emerald Valley.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-102"
            >
              <Heart className="h-5 w-5 fill-current" />
              <span>Support Our Trust</span>
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Metrics / Stats Bar */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-card rounded-2xl shadow-xl border border-card-border p-6 md:p-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 space-y-2 border-r last:border-r-0 border-card-border/60 max-lg:odd:border-r-0 max-sm:border-r-0 max-sm:border-b last:border-b-0 max-sm:pb-4 max-sm:pt-2">
                <div className="inline-flex p-2.5 bg-primary/10 rounded-full text-primary dark:text-primary-light">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-serif text-2xl md:text-3xl font-extrabold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-muted tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Core Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary dark:text-primary-light leading-tight">
              Preserving local wildlife habitats for generations to come.
            </h2>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Founded in 2012 by community naturalists, the Emerald Valley Conservation Trust works at a local grassroots level to address local ecological fragmentation.
            </p>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              By working closely with local schools, private landowners, and municipal offices, we restore damaged creeks, coordinate garbage cleanup days, and purchase threatened land plots to keep them wild forever.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-primary dark:text-primary-light hover:text-accent font-semibold text-sm transition-colors group"
              >
                <span>Read our full story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card border border-card-border rounded-xl p-6 shadow-sm space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg text-primary dark:text-primary-light inline-block">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground">Habitat Conservation</h3>
              <p className="text-xs text-muted leading-relaxed">
                Protecting forests, waterways, and valleys from industrial development and logging through physical land purchases and legal easements.
              </p>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6 shadow-sm space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg text-primary dark:text-primary-light inline-block">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground">Local Re-wilding</h3>
              <p className="text-xs text-muted leading-relaxed">
                Replanting native plant flora, constructing shelters, and removing man-made barriers to promote natural biodiversity.
              </p>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6 shadow-sm space-y-3 sm:col-span-2">
              <div className="p-3 bg-primary/10 rounded-lg text-primary dark:text-primary-light inline-block">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground">Community Clean-ups & Education</h3>
              <p className="text-xs text-muted leading-relaxed">
                Educating schools, leading weekend volunteer cleanups, and distributing eco-friendly guidelines to neighborhoods bordering reserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Map Section */}
      <section className="py-16 bg-muted-light/35 border-t border-b border-card-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveMap />
        </div>
      </section>

      {/* 5. Highlight Projects Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="font-serif text-3xl font-bold text-primary dark:text-primary-light">
              Current Conservation Campaigns
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-primary dark:text-primary-light hover:text-accent font-semibold text-sm transition-colors group shrink-0"
          >
            <span>See all local initiatives</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((project) => (
            <div key={project.title} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-card-border transition-all duration-300 flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-primary dark:text-primary-light hover:text-accent transition-colors pt-2 border-t border-card-border/60"
                >
                  <span>Read Updates</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Local Volunteer/Donate Banner */}
      <section className="py-20 bg-primary text-white border-t border-primary-hover">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Protecting Emerald Valley Starts in Our Backyards
          </h2>
          <p className="text-stone-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            As a local grassroots organization, over 90% of our funding goes directly back into buying local forest tracts, restoring salmon spawning beds, and organizing river clean-ups.
          </p>
          <div className="flex justify-center pt-4">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-lg"
            >
              <span>Donate Locally</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
