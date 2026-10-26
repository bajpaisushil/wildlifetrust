import type { Metadata } from "next";
import Image from "next/image";
import CopyUpi from "@/components/CopyUpi";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Help Us | Wildlife and Habitat Trust of India",
};

const uses = [
  { emoji: "💊", text: "Medicines, bandages and antiseptics" },
  { emoji: "🩺", text: "Vet visits and X-rays for serious injuries" },
  { emoji: "🍌", text: "Food for animals while they recover" },
  { emoji: "📦", text: "Cages, boxes and enclosures" },
  { emoji: "🛵", text: "Fuel to reach rescue calls quickly" },
];

const otherWays = [
  {
    emoji: "🙋",
    title: "Volunteer",
    text: "Help with feeding, cleaning and caring for animals at the shelter, or join us on rescues.",
    message: "Hi, I would like to volunteer with the trust.",
  },
  {
    emoji: "🎁",
    title: "Donate supplies",
    text: "Old towels, bedsheets, cardboard boxes, cages, medicines and fruit are always useful.",
    message: "Hi, I would like to donate some supplies.",
  },
  {
    emoji: "📣",
    title: "Spread the word",
    text: "Save our number and share our page so people know who to call when they see an injured animal.",
    message: "Hi, I would like to help spread the word.",
  },
];

export default function HelpPage() {
  return (
    <>
      <PageIntro
        eyebrow="Help us"
        title="Every bit of help saves a life"
        text="We are run by local volunteers and small donations. Here is how you can help the animals."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="card mx-auto max-w-sm overflow-hidden p-3">
              <Image
                src={site.upiQr}
                alt={`UPI QR code for ${site.name}, UPI ID ${site.upiId}`}
                width={788}
                height={1280}
                className="h-auto w-full rounded-[1.25rem]"
                preload
              />
            </div>
          </Reveal>

          <Reveal className="order-1 space-y-6 lg:order-2">
            <SectionHeading
              eyebrow="Donate"
              title="Scan to donate with any UPI app"
              text="Paytm, PhonePe, Google Pay or BHIM. Any amount helps, even ₹50 buys medicine for a bird."
            />
            <div>
              <p className="mb-2 text-sm font-semibold text-muted">Or copy our UPI ID</p>
              <CopyUpi />
            </div>
            <div className="card p-6">
              <p className="font-display text-lg font-bold">Where your money goes</p>
              <ul className="mt-4 space-y-3">
                {uses.map((use) => (
                  <li key={use.text} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-leaf-soft" aria-hidden="true">
                      {use.emoji}
                    </span>
                    {use.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-leaf-soft/70 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Other ways" title="Can't donate? You can still help." />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {otherWays.map((way) => (
              <Reveal key={way.title}>
                <div className="card flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-soft text-2xl" aria-hidden="true">
                    {way.emoji}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{way.title}</h3>
                  <p className="mt-2 flex-1 text-muted">{way.text}</p>
                  <a
                    href={whatsappUrl(way.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-leaf-soft px-5 py-2.5 font-semibold text-leaf-dark transition-colors hover:bg-leaf hover:text-white dark:hover:text-forest"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Message us
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
