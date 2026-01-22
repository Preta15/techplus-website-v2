'use client';

import React from 'react';
import ProfileForm from './ProfileForm';

export default function Profile() {
  return (
    <div className="py-10 px-5">
      <h2 className="mb-8 text-4xl font-semibold">My Profile</h2>
      <ProfileForm />
    </div>
  );
}
