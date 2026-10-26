import type { Metadata } from "next";
import InstagramIcon from "@/components/InstagramIcon";
import PageIntro from "@/components/PageIntro";
import ReelEmbed from "@/components/ReelEmbed";
import Reveal from "@/components/Reveal";
import { reels, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Rescue Videos | Wildlife and Habitat Trust of India",
};

export default function VideosPage() {
  return (
    <>
      <PageIntro
        eyebrow="From the field"
        title="Rescue videos"
        text="Real rescues and releases from our Instagram, many filmed together with @naturemowgli."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel) => (
            <Reveal key={reel.code}>
              <div className="card p-2">
                <ReelEmbed reel={reel} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3.5 font-semibold text-white shadow-lg shadow-leaf/25 transition-transform hover:-translate-y-0.5 dark:text-forest"
          >
            <InstagramIcon className="h-5 w-5" />
            See more on Instagram
          </a>
        </Reveal>
      </section>
    </>
  );
}
