'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';
import FeatureFlagProvider from '@/components/providers/FeatureFlagProvider';
import Footer from '@/components/navigation/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Provider store={store}>
          <FeatureFlagProvider>
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </FeatureFlagProvider>
        </Provider>
      </body>
    </html>
  );
}
