import type { Metadata } from "next";
import { ChevronDown, MapPin, Phone } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Wildlife and Habitat Trust of India",
};

const faqs = [
  {
    q: "Which areas do you cover?",
    a: "We mainly respond around Bakkarwala and nearby areas of West Delhi. If you're further away, message us anyway and we'll try to help or connect you with someone closer.",
  },
  {
    q: "Is there a fee for rescue?",
    a: "No. Rescues are free. If you'd like to support the animal's treatment, you can donate on our Help page.",
  },
  {
    q: "Can I keep the animal after it recovers?",
    a: "No. Keeping wild animals is illegal in India under the Wildlife Protection Act, and they belong in the wild. We release them once they are healthy.",
  },
  {
    q: "Can I visit the shelter?",
    a: "Please message us first. Injured animals get stressed easily, so we keep visits small and planned.",
  },
];

export default function ContactPage() {
  const channels = [
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      text: "Fastest way to reach us. Send a photo and your location.",
      href: whatsappUrl(),
      label: "Message us",
      primary: true,
    },
    ...(site.phone
      ? [
          {
            icon: Phone,
            title: "Call",
            text: site.phone,
            href: `tel:${site.phone.replace(/\s/g, "")}`,
            label: "Call now",
            primary: false,
          },
        ]
      : []),
    {
      icon: InstagramIcon,
      title: "Instagram",
      text: `@${site.instagramHandle}`,
      href: site.instagramUrl,
      label: "Follow & DM",
      primary: false,
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Saw an injured animal? Tell us."
        text="Message us with a photo and your location. The sooner we know, the better its chances."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`group flex h-full flex-col rounded-[1.75rem] p-8 transition-transform duration-300 hover:-translate-y-1 ${
                    c.primary ? "bg-leaf text-white shadow-xl shadow-leaf/25 dark:text-forest" : "card"
                  }`}
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.primary ? "bg-white/15" : "bg-leaf-soft text-leaf"}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold">{c.title}</h2>
                  <p className={`mt-1 flex-1 ${c.primary ? "opacity-85" : "text-muted"}`}>{c.text}</p>
                  <span className="mt-6 font-semibold">{c.label} →</span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-leaf-soft/70 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <SectionHeading eyebrow="Find us" title={site.location} />
            <div className="card overflow-hidden p-2">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                title={`Map of ${site.location}`}
                loading="lazy"
                className="h-80 w-full rounded-[1.4rem]"
              />
            </div>
            <p className="flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4 text-leaf" />
              Please message before visiting.
            </p>
          </Reveal>

          <Reveal className="space-y-6">
            <SectionHeading eyebrow="Questions" title="Good to know" />
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="card group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-leaf transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
