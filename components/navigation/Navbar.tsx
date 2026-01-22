'use client';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NavbarTabs from './NavbarTabs';
import { useAppSelector } from '@/lib/store/hooks';
import Logo from './logo.png';

function navWidth(hasUser: boolean): number {
  return hasUser ? 1400 : 1050;
}

export default function Navbar() {
  const [currentTab, setCurrentTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const pathname = usePathname();
  const userRole = useAppSelector((state) => state.user.userRole);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const updateWidth = () => {
        setWidth(window.innerWidth);
        setOpen(false);
      };
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  useEffect(() => {
    const routes = ['/', '/initiatives', '/impact', '/resources', '/mentors', '/profile'];
    const index = routes.indexOf(pathname);
    if (index !== -1) {
      setCurrentTab(index);
    }
  }, [pathname]);

  const hasUser = userRole !== '';
  const isMobile = width < navWidth(hasUser) && width > 0;

  return (
    <div className="relative">
      <AppBar position="sticky" className="top-0 z-50" style={{ backgroundColor: '#020B2C' }}>
        <Toolbar className="flex justify-between px-[6%] max-w-full">
          <Link href="/" className="no-underline flex items-center">
            <Image src={Logo} alt="Tech+ UW Logo" width={100} height={50} className="object-contain" />
          </Link>
          {isMobile ? (
            <div>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(true)}
                className="text-white"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <div onClick={() => setOpen(false)} className="min-w-[300px]">
                  <NavbarTabs
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    tabOrientation="vertical"
                  />
                </div>
              </Drawer>
            </div>
          ) : (
            <div className="flex items-center">
              <NavbarTabs
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                tabOrientation="horizontal"
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
