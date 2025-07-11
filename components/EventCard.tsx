import Image from "next/image";
import Link from "next/link";
import { EventMeta } from "@/lib/events";

export interface EventCardProps {
  event: EventMeta & { slug: string };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="block rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
    >
      <Image
        src={event.thumbnail}
        alt={event.title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {event.title}
        </h3>
        <p className="text-sm text-gray-500">{event.date}</p>
      </div>
    </Link>
  );
}
