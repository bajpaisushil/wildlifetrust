import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappUrl } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-2">
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="text-white/70">
            A small registered trust caring for injured wild animals in and around Bakkarwala, Delhi.
          </p>
        </div>

        <div className="space-y-2 text-white/70">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-[#9fd49a]" />
            {site.location}
          </p>
          {site.phone && (
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 shrink-0 text-[#9fd49a]" />
              {site.phone}
            </a>
          )}
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#9fd49a]" />
            WhatsApp us
          </a>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
            <InstagramIcon className="h-4 w-4 shrink-0 text-[#9fd49a]" />@{site.instagramHandle}
          </a>
        </div>

        <div className="flex flex-wrap content-start gap-x-5 gap-y-2 text-white/70 md:justify-end">
          <Link href="/animals" className="hover:text-white">Animals</Link>
          <Link href="/shelter" className="hover:text-white">Shelter</Link>
          <Link href="/videos" className="hover:text-white">Videos</Link>
          <Link href="/help" className="hover:text-white">Help Us</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
      <p className="bg-black/15 px-4 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
