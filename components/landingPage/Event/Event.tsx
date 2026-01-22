'use client';

import React from 'react';
import UpcomingEventsCard from '../UpcomingEventsCard/UpcomingEventsCard';

export default function Event() {
  return (
    <div id="upcoming_events" className="py-10 px-5 text-center">
      <h1 className="mb-8 text-4xl font-semibold">Upcoming Events</h1>
      <div className="flex gap-5 justify-center flex-wrap">
        <UpcomingEventsCard
          imageUrl="/assets/images/MockInterview.svg"
          eventTitle="Mentorship Winter 2023"
          buttonTitle="Sign-up closed"
        />
        <UpcomingEventsCard
          imageUrl="/assets/images/CoffeeChat.svg"
          eventTitle="Coffee Chats"
          buttonTitle="Coming Soon"
        />
      </div>
    </div>
  );
}
