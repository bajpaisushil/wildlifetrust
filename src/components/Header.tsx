"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TreePine, Menu, X, Heart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Initiatives", href: "/projects" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header py-3 shadow-sm"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary rounded-lg text-white transition-transform group-hover:scale-105 duration-300">
              <TreePine className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight tracking-tight ${isScrolled ? 'text-primary dark:text-primary-light' : 'text-white'}`}>
                WildTrust
              </span>
              <span className={`text-[10px] uppercase tracking-wider font-medium ${isScrolled ? 'text-muted' : 'text-stone-300'}`}>
                Habitat & Wildlife
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? (isScrolled ? "text-primary dark:text-primary-light" : "text-accent-light font-semibold")
                      : (isScrolled ? "text-foreground/80 hover:text-primary dark:hover:text-primary-light" : "text-white/80 hover:text-white")
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full animate-fade-in ${
                      isScrolled ? "bg-primary dark:bg-primary-light" : "bg-accent-light"
                    }`} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-md hover:scale-102"
            >
              <Heart className="h-4 w-4 fill-current" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? "text-foreground" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-header absolute top-full left-0 right-0 py-4 shadow-lg border-t border-card-border animate-fade-in text-foreground">
          <div className="px-4 space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary dark:text-primary-light font-semibold"
                      : "text-foreground hover:bg-muted-light"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-card-border">
              <Link
                href="/get-involved"
                onClick={() => setIsOpen(false)}
                className="w-full justify-center inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-full text-base font-semibold transition-all duration-300"
              >
                <Heart className="h-5 w-5 fill-current" />
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
