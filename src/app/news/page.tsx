"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: "Conservation" | "Announcements" | "Field Notes";
  date: string;
  readTime: string;
  image: string;
}

export default function News() {
  const posts: Post[] = [
    {
      id: "salmon-returning-emerald-creek",
      title: "Coho Salmon Spawning Observed in Upper Tributaries",
      excerpt: "Following gravel sorting deposits and log placements, our team recorded Coho salmon nesting sites in Upper Emerald creek for the first time in 4 years.",
      category: "Field Notes",
      date: "Nov 12, 2025",
      readTime: "4 min read",
      image: "/images/project_reef.png",
    },
    {
      id: "sapling-planting-fire-burn",
      title: "2,000 Saplings Planted at Fire Restoration Day",
      excerpt: "Over 80 community volunteers joined our forest rangers to plant native redwoods, douglas firs, and maple whips on the burnt hills of Redwood Ridge.",
      category: "Announcements",
      date: "Jan 18, 2026",
      readTime: "3 min read",
      image: "/images/hero_forest.png",
    },
    {
      id: "bear-safe-trash-bins",
      title: "Distributing Bear-Proof Trash Bins in Valley Edge",
      excerpt: "To minimize dangerous wildlife encounters, EVT is launching a bin sponsorship program distributing locks and bear-safe containers to valley neighborhoods.",
      category: "Conservation",
      date: "Mar 05, 2026",
      readTime: "5 min read",
      image: "/images/project_leopard.png",
    },
    {
      id: "frog-breeding-ponds-restored",
      title: "Red-Legged Frog Breeding Ponds Restored",
      excerpt: "Removal of invasive bullfrogs and selective replanting of native water-lilies has successfully restored two key breeding ponds in Meadowbrook Wetlands.",
      category: "Field Notes",
      date: "Apr 22, 2026",
      readTime: "4 min read",
      image: "/images/project_savannah.png",
    },
    {
      id: "evt-wins-regional-eco-award",
      title: "EVT Receives Regional Environmental Stewardship Award",
      excerpt: "We are honored to receive the Emerald Valley County Civic Green Ribbon for our decade-long commitment to preserving local forest fragments.",
      category: "Announcements",
      date: "Jun 14, 2026",
      readTime: "2 min read",
      image: "/images/project_gorilla.png",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
            Insights & Updates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Trust News & Research
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Read stories from our field rangers, biological surveys, and upcoming restoration schedules.
          </p>
        </div>
      </section>

      {/* 2. Controls & Search */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-card-border rounded-xl p-4 sm:p-6 shadow-sm flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between">
          
          {/* Category Selector */}
          <div className="flex flex-wrap gap-2 items-center text-xs">
            <span className="text-muted font-bold uppercase tracking-wider mr-2">Categories:</span>
            {["All", "Conservation", "Announcements", "Field Notes"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-lg font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "text-foreground hover:bg-muted-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-muted-light border border-card-border rounded-full py-2.5 pl-10 pr-4 text-xs text-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <Search className="h-4 w-4 text-muted absolute left-3.5 top-3" />
          </div>

        </div>
      </section>

      {/* 3. Blog Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center space-x-3 text-[10px] text-muted font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-accent" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-accent" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary dark:group-hover:text-primary-light transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-card-border/60">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary dark:text-primary-light hover:text-accent hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-card-border p-12 text-center rounded-2xl">
            <BookOpen className="h-8 w-8 text-muted mx-auto mb-2" />
            <p className="text-muted text-sm font-medium">No updates match your search. Try adjusting terms.</p>
          </div>
        )}
      </section>
    </div>
  );
}
