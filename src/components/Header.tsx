"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappUrl } from "@/data/site";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Animals", href: "/animals" },
  { name: "Shelter", href: "/shelter" },
  { name: "Videos", href: "/videos" },
  { name: "Help Us", href: "/help" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src="/images/logo.jpg" alt="" width={44} height={44} className="rounded-full" />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold">{site.shortName}</span>
            <span className="block text-xs text-muted">{site.location}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                pathname === item.href ? "bg-leaf-soft text-leaf-dark" : "text-muted hover:text-ink"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-leaf px-4 py-2 text-[15px] font-semibold text-white dark:text-forest transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Report a rescue
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-3 py-2.5 font-medium ${
                pathname === item.href ? "bg-leaf-soft text-leaf-dark" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-leaf px-4 py-3 font-semibold text-white dark:text-forest sm:hidden"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Report a rescue
          </a>
        </nav>
      )}
    </header>
  );
}
