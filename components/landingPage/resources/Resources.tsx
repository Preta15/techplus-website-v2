'use client';

import React from 'react';
import ResourcesDisplay from '../ResourcesDisplay/ResourcesDisplay';
import { Divider } from '@mui/material';
import Image from 'next/image';

export default function Resources() {
  return (
    <div className="py-10 px-5">
      <h2 className="mb-8 text-4xl font-semibold">Resources</h2>
      <ResourcesDisplay />
      <Divider className="my-10" />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <Image
            src="/assets/images/W22TeamStatement.svg"
            alt="Team Statement"
            width={500}
            height={300}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <h3 className="mb-5 text-2xl">Get Involved</h3>
          <p>
            Join our community and help make tech more accessible for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
