import { getAllEvents } from "@/lib/events";
import EventCard from "./EventCard";

export default async function Events() {
  const events = await getAllEvents();

  if (!events.length) {
    return <p>No events found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  );
}
