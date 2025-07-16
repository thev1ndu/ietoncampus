import { getAllEvents } from "@/lib/events";
import EventCard from "./EventCard";
import SectionHeading from "./section-heading";

export default async function Events() {
  const events = await getAllEvents();

  if (!events.length) {
    return <p className="text-center">No events found.</p>;
  }

  return (
    <div className="mb-8 scroll-mt-[140px]" id="events">
      <h3 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 uppercase tracking-wide text-muted-foreground text-center">
        Our Events
      </h3>
      <SectionHeading>
        Discover Our Latest Events, Workshops & Innovation Showcases
      </SectionHeading>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </div>
  );
}
