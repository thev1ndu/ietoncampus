export interface EventMetadata {
  title: string;
  description: string;
  date: string;
  location?: string;
  duration?: string;
  capacity?: number;
  registrations?: number;
  status: "upcoming" | "completed" | "cancelled";
  tags?: string[];
}

// 2. Import and use the Events component in your page/component
import Events from "@/components/Events"; // Adjust path as needed
import { EventMetadata } from "@/lib/events";

// 3. Create your events data
const eventsData: EventMetadata[] = [
  {
    title: "React Workshop: Building Modern Web Applications",
    description:
      "Learn the fundamentals of React and build your first interactive web application with hands-on exercises and real-world projects.",
    date: "March 15, 2024 - 10:00 AM",
    location: "Engineering Building, Room 101",
    duration: "4 hours",
    capacity: 50,
    registrations: 32,
    status: "upcoming",
    tags: ["React", "JavaScript", "Web Development", "Workshop"],
  },
  {
    title: "AI & Machine Learning Seminar",
    description:
      "Explore the latest trends in artificial intelligence and machine learning with industry experts and researchers.",
    date: "March 22, 2024 - 2:00 PM",
    location: "Main Auditorium",
    duration: "2 hours",
    capacity: 150,
    registrations: 89,
    status: "upcoming",
    tags: ["AI", "Machine Learning", "Technology", "Seminar"],
  },
  {
    title: "IoT Innovation Challenge",
    description:
      "Compete in teams to create innovative IoT solutions for smart cities and sustainable technology.",
    date: "March 8, 2024 - 9:00 AM",
    location: "Innovation Lab",
    duration: "8 hours",
    capacity: 40,
    registrations: 40,
    status: "completed",
    tags: ["IoT", "Innovation", "Competition", "Smart Cities"],
  },
];
