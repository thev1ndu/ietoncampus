import Image from "next/image";
import Link from "next/link";
import { EventMeta } from "@/lib/events";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface EventCardProps {
  event: EventMeta & { slug: string };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`} className="group">
      <Card className="w-72 h-[440px] overflow-hidden rounded-2xl border border-border shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] dark:bg-slate-900">
        <div className="relative h-56 w-full">
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="100%"
            priority
          />
        </div>

        <CardHeader className="pt-5 px-5">
          <Badge
            variant="secondary"
            className="mb-2 text-xs font-medium px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-700 text-muted-foreground"
          >
            {event.date}
          </Badge>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug">
            {event.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-5 pb-5 pt-2 text-sm text-muted-foreground">
          <p className="line-clamp-2">
            {event.description || "Exciting event awaits! Click to learn more."}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
