import Image from "next/image";
import { Camera } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { ShelterRoom } from "@/data/site";

export default function ShelterGrid({ rooms }: { rooms: ShelterRoom[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {rooms.map((room) => (
        <Reveal key={room.name}>
          <figure className="card group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-leaf-soft to-[#cfe3c4] dark:to-forest">
              {room.photo ? (
                <Image
                  src={room.photo}
                  alt={room.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-leaf">
                  <span className="rounded-full bg-surface/70 p-3">
                    <Camera className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium">Photo coming soon</span>
                </div>
              )}
            </div>
            <figcaption className="p-5">
              <p className="font-display text-lg font-bold">{room.name}</p>
              <p className="mt-1 text-[15px] text-muted">{room.note}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
