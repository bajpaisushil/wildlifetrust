import Link from "next/link";
import { ArrowRight, HeartHandshake, Phone } from "lucide-react";
import CopyUpi from "@/components/CopyUpi";
import FloatingBadge from "@/components/FloatingBadge";
import Foliage from "@/components/Foliage";
import ReelEmbed from "@/components/ReelEmbed";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ShelterGrid from "@/components/ShelterGrid";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { animals, reels, shelterRooms, site, steps, whatsappUrl } from "@/data/site";

const reasons = [
  {
    emoji: "⚡",
    title: "Animals are getting hurt",
    text: "As Delhi grows, more monkeys, owls, snakes and birds are injured by live wires, kite string, traffic and dogs.",
  },
  {
    emoji: "🤲",
    title: "They have nowhere to go",
    text: "Most injured wild animals are ignored or chased away. A quick, local response is often the difference between life and death.",
  },
  {
    emoji: "🌳",
    title: "They belong in the wild",
    text: "We don't keep animals as pets or for show. The goal is always to heal them and let them go back home.",
  },
];

const featuredReel = reels.find((r) => r.author === site.instagramHandle) ?? reels[0];

const arrowLink = "group inline-flex items-center gap-1 font-semibold text-leaf";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero text-white">
        <Foliage className="text-[#9fd49a]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-24">
          <Reveal className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/85 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#9fd49a]" />
              Registered Trust · {site.location}
            </p>
            <h1 className="text-[2.7rem] font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
              We help injured wild animals <span className="text-[#f6c27a]">heal and go home.</span>
            </h1>
            <p className="max-w-xl text-lg text-white/80 sm:text-xl">
              We are a small group of local people in Bakkarwala, Delhi. When a monkey, snake, owl, turtle or bird is
              hurt, we rescue it, treat it, and release it back into nature once it is healthy.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-forest shadow-xl shadow-black/20 transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5 text-leaf" />
                Found an injured animal?
              </a>
              <Link
                href="/help"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-semibold backdrop-blur transition-colors hover:bg-white/20"
              >
                <HeartHandshake className="h-5 w-5 text-[#f6c27a]" />
                Support our work
              </Link>
            </div>
          </Reveal>

          <Reveal className="relative mx-auto w-full max-w-[360px]">
            <div className="rotate-2 rounded-[2.2rem] bg-white/15 p-2.5 shadow-2xl shadow-black/30 backdrop-blur transition-transform duration-500 hover:rotate-0">
              <ReelEmbed reel={featuredReel} />
            </div>
            <FloatingBadge emoji="🐒" label="Monkeys" className="-left-6 top-10 sm:-left-16" delay={0.3} />
            <FloatingBadge emoji="🦉" label="Owls" className="-right-3 top-1/3 sm:-right-12" delay={0.6} />
            <FloatingBadge emoji="🐢" label="Turtles" className="-left-4 bottom-24 sm:-left-14" delay={0.9} />
            <FloatingBadge emoji="🐍" label="Snakes" className="-right-2 bottom-8 sm:-right-10" delay={1.2} />
          </Reveal>
        </div>

        <svg className="absolute -bottom-px left-0 h-12 w-full text-bg sm:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 80V40c240-40 480-40 720 0s480 40 720 0v40Z" fill="currentColor" />
        </svg>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Why we do this" title="Every injured animal deserves a second chance." />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <Reveal key={reason.title}>
              <div className="card h-full p-8 transition-transform duration-300 hover:-translate-y-1">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-soft text-2xl" aria-hidden="true">
                  {reason.emoji}
                </span>
                <h3 className="mt-5 text-xl font-bold">{reason.title}</h3>
                <p className="mt-2 text-muted">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 text-white sm:px-12">
          <Foliage className="text-[#9fd49a]" />
          <Reveal className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f6c27a]">How it works</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{site.tagline}</h2>
          </Reveal>
          <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title}>
                <li className="h-full rounded-3xl bg-white/[0.07] p-6 backdrop-blur transition-colors hover:bg-white/[0.12]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9fd49a] font-display font-bold text-forest">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-white/75">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Who we help" title="The animals we care for" />
          <Link href="/animals" className={arrowLink}>
            What to do if you find one
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {animals.map((animal) => (
            <Reveal key={animal.name}>
              <Link
                href="/animals"
                className="card group flex h-full flex-col items-center px-4 py-7 text-center transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-leaf-soft text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
                  {animal.emoji}
                </span>
                <span className="mt-4 font-display text-lg font-bold">{animal.name}</span>
                <span className="mt-1 text-sm text-muted">{animal.examples.split(",")[0]}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-leaf-soft/70 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Inside the shelter"
              title="Where animals rest and recover"
              text="A look at our rooms and the animals currently in our care."
            />
            <Link href="/shelter" className={arrowLink}>
              See the shelter
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="mt-12">
            <ShelterGrid rooms={shelterRooms} />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="From the field" title="Recent rescues" text="Real rescues, straight from our Instagram." />
            <Link href="/videos" className={arrowLink}>
              All videos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:px-6 [scrollbar-width:none]">
          {reels.slice(0, 5).map((reel) => (
            <div key={reel.code} className="card w-[300px] shrink-0 snap-start p-2 sm:w-[340px]">
              <ReelEmbed reel={reel} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-marigold-soft p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-6 -top-10 text-[10rem] leading-none opacity-10" aria-hidden="true">
              🐾
            </div>
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold sm:text-4xl">Your help keeps this going.</h2>
                <p className="text-lg text-muted">
                  We run on small donations from people like you. Every rupee goes to medicines, food, cages and vet
                  visits for the animals.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <CopyUpi />
                  <Link href="/help" className={arrowLink}>
                    Scan QR & other ways
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="card p-7 sm:p-8">
                <p className="font-display text-xl font-bold">Found an injured animal?</p>
                <ul className="mt-4 space-y-2.5 text-muted">
                  <li>🚫 Keep people, pets and crowds away.</li>
                  <li>🥣 Don&apos;t feed it or give water.</li>
                  <li>🐍 Never try to catch a snake or monkey.</li>
                  <li>📍 Send us a photo and your location.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-2.5 font-semibold text-white transition-transform hover:-translate-y-0.5 dark:text-forest"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                  {site.phone && (
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-5 py-2.5 font-semibold text-leaf-dark"
                    >
                      <Phone className="h-4 w-4" />
                      {site.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
