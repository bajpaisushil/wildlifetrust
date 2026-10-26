import type { Reel } from "@/data/site";

export default function ReelEmbed({ reel }: { reel: Reel }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-surface">
      <iframe
        src={`https://www.instagram.com/reel/${reel.code}/embed`}
        title={`Instagram reel by @${reel.author}`}
        loading="lazy"
        allowFullScreen
        className="block h-[560px] w-full"
      />
    </div>
  );
}
