import type { Metadata } from "next";
import Image from "next/image";
import InstagramIcon from "@/components/InstagramIcon";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ShelterGrid from "@/components/ShelterGrid";
import { patients, shelterRooms, site, type PatientStatus } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Shelter | Wildlife and Habitat Trust of India",
};

const statusStyles: Record<PatientStatus, string> = {
  "Under treatment": "bg-marigold-soft text-marigold",
  Recovering: "bg-leaf-soft text-leaf-dark",
  "Ready for release": "bg-[#dcefff] text-[#1d5b8f] dark:bg-[#132a3d] dark:text-[#8cc4f0]",
  Released: "bg-leaf text-white dark:text-forest",
};

export default function ShelterPage() {
  return (
    <>
      <PageIntro
        eyebrow="Inside the shelter"
        title="Where animals rest and recover"
        text="Our shelter in Bakkarwala is small and simple, but it gives injured animals a safe, quiet place to heal."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Our rooms" title="A look around" />
        </Reveal>
        <div className="mt-12">
          <ShelterGrid rooms={shelterRooms} />
        </div>
      </section>

      <section className="bg-leaf-soft/70 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Right now"
              title="Animals in our care"
              text="Who is with us today and how they are doing."
            />
          </Reveal>

          {patients.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {patients.map((patient, i) => (
                <Reveal key={`${patient.animal}-${i}`}>
                  <article className="card h-full overflow-hidden">
                    {patient.photo && (
                      <div className="relative aspect-[4/3]">
                        <Image src={patient.photo} alt={patient.animal} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                      </div>
                    )}
                    <div className="p-6">
                      <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${statusStyles[patient.status]}`}>
                        {patient.status}
                      </span>
                      <h3 className="mt-3 text-xl font-bold">{patient.animal}</h3>
                      <p className="mt-1 text-muted">{patient.story}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="card mt-12 flex flex-col items-center gap-4 px-6 py-14 text-center">
                <span className="text-5xl" aria-hidden="true">🩹</span>
                <p className="max-w-md text-lg text-muted">
                  Updates on the animals currently in our care will appear here soon. Until then, follow their
                  recovery on Instagram.
                </p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 dark:text-forest"
                >
                  <InstagramIcon className="h-5 w-5" />@{site.instagramHandle}
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
