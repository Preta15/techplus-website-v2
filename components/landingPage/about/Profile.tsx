'use client';

import React from 'react';
import TeamDisplay from '../TeamDisplay/TeamDisplay';
import { techPlusTeamMembers } from './config';

export default function Profile() {
  return (
    <div className="py-10 px-5 text-center">
      <h1 className="mb-5 text-4xl font-semibold">Meet Our Team</h1>
      <p className="mb-8 max-w-[800px] mx-auto">
        We are a dedicated group of students who work toward the common goal of
        building the tech community at UW for you
      </p>
      <div className="grid grid-cols-1 gap-2">
        <TeamDisplay league={techPlusTeamMembers} />
      </div>
    </div>
  );
}
