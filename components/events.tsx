"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { EventMetadata } from "@/lib/events";
import { useSectionInView } from "@/lib/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Clock, X } from "lucide-react";

const eventsData: EventMetadata[] = [
  {
    title: "React Workshop: Building Modern Web Applications",
    description: "Learn the fundamentals of React and build your first interactive web application with hands-on exercises and real-world projects.",
    date: "March 15, 2024 - 10:00 AM",
    location: "Engineering Building, Room 101",
    duration: "4 hours",
    capacity: 50,
    registrations: 32,
    status: "upcoming",
    tags: ["React", "JavaScript", "Web Development", "Workshop"]
  },
  {
    title: "AI & Machine Learning Seminar",
    description: "Explore the latest trends in artificial intelligence and machine learning with industry experts and researchers.",
    date: "March 22, 2024 - 2:00 PM",
    location: "Main Auditorium",
    duration: "2 hours",
    capacity: 150,
    registrations: 89,
    status: "upcoming",
    tags: ["AI", "Machine Learning", "Technology", "Seminar"]
  },
  {
    title: "IoT Innovation Challenge",
    description: "Compete in teams to create innovative IoT solutions for smart cities and sustainable technology.",
    date: "March 8, 2024 - 9:00 AM",
    location: "Innovation Lab",
    duration: "8 hours",
    capacity: 40,
    registrations: 40,
    status: "completed",
    tags: ["IoT", "Innovation", "Competition", "Smart Cities"]
  }
];

interface EventsProps {
  events?: EventMetadata[];
}

export default function Events({ events }: EventsProps) {
  const { ref } = useSectionInView("Projects", 0.5);
  
  // Use provided events or fallback to eventsData
  const eventsList = events || eventsData;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h3 className="text-l font-medium mb-4 capitalize text-center">EVENTS</h3>
      <SectionHeading>
        Build your technical foundation and professional network through
        diverse, skill-driven IET events.
      </SectionHeading>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {eventsList.map((event, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      disabled={event.status === 'completed' || event.status === 'cancelled'}
                    >
                      {event.status === 'upcoming' ? 'Register' : 'View Details'}
                    </Button>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <div className="flex justify-between items-start">
                  <DialogTitle className="text-2xl font-bold pr-8">
                    {event.title}
                  </DialogTitle>
                  <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'}>
                    {event.status}
                  </Badge>
                </div>
                <DialogDescription className="text-base mt-2">
                  {event.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  
                  {event.location && (
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                      </div>
                    </div>
                  )}
                  
                  {event.duration && (
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">{event.duration}</p>
                      </div>
                    </div>
                  )}
                  
                  {event.capacity && (
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Capacity</p>
                        <p className="text-sm text-muted-foreground">
                          {event.registrations || 0} / {event.capacity} registered
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {event.tags && event.tags.length > 0 && (
                  <div>
                    <p className="font-medium mb-3">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    className="flex-1"
                    disabled={event.status === 'completed' || event.status === 'cancelled'}
                  >
                    {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                  </Button>
                  <Button variant="outline">
                    Share Event
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      
      {eventsList.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No events scheduled at the moment.</p>
          <p className="text-sm">Check back soon for upcoming IET events!</p>
        </div>
      )}
    </section>
  );
}