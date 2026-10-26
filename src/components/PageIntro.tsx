import Foliage from "@/components/Foliage";
import Reveal from "@/components/Reveal";

export default function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <Foliage className="text-[#9fd49a]" />
      <Reveal className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f6c27a]">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">{text}</p>
      </Reveal>
    </section>
  );
}
