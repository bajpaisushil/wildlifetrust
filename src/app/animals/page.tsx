import type { Metadata } from "next";
import { TriangleAlert } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { animals, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Animals We Care For | Wildlife and Habitat Trust of India",
};

export default function AnimalsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Who we help"
        title="The animals we care for"
        text="These are the animals we see most often around Bakkarwala. Here is why they get hurt, and what you can do if you find one."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {animals.map((animal) => (
            <Reveal key={animal.name}>
              <article className="card h-full p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-leaf-soft text-4xl" aria-hidden="true">
                    {animal.emoji}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">{animal.name}</h2>
                    <p className="text-muted">{animal.examples}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-marigold">How they get hurt</p>
                    <p className="mt-1">{animal.commonInjuries}</p>
                  </div>
                  <div className="rounded-2xl bg-leaf-soft p-4">
                    <p className="text-sm font-semibold uppercase tracking-wider text-leaf-dark">If you find one</p>
                    <p className="mt-1">{animal.ifYouFindOne}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-start gap-5 rounded-[2rem] bg-marigold-soft p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div className="flex gap-4">
              <TriangleAlert className="mt-1 h-6 w-6 shrink-0 text-marigold" />
              <p className="text-lg">
                <strong>Not sure what to do?</strong> Send us a photo or video and your location. We&apos;ll guide you
                right away.
              </p>
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-leaf px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 dark:text-forest"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
