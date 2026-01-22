'use client';

import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { useFeatureFlags } from '@/components/providers/FeatureFlagProvider';
import { useAppSelector } from '@/lib/store/hooks';
import { FEATURE_FLAGS } from '@/constants';

interface NavbarTabsProps {
  currentTab: number;
  setCurrentTab: (value: number) => void;
  tabOrientation: 'horizontal' | 'vertical';
  tabClassname?: string;
  tabItemContainerStyle?: React.CSSProperties;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavbarTabs({
  currentTab,
  setCurrentTab,
  tabOrientation,
}: NavbarTabsProps) {
  const flagsmithFFs = useFeatureFlags();
  const router = useRouter();
  const userRole = useAppSelector((state) => state.user.userRole);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    const routes = ['/', '/initiatives', '/impact', '/resources', '/mentors', '/profile'];
    if (routes[newValue]) {
      router.push(routes[newValue]);
    }
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  const showMentorProfiles =
    !flagsmithFFs.loading &&
    flagsmithFFs.allFeatureFlags?.[FEATURE_FLAGS.SHOW_SIGNUP_LOGIN_NAVTAB]
      ?.enabled &&
    userRole !== 'Mentor';

  const showProfile =
    !flagsmithFFs.loading &&
    flagsmithFFs.allFeatureFlags?.[FEATURE_FLAGS.SHOW_SIGNUP_LOGIN_NAVTAB]
      ?.enabled &&
    userRole === 'Mentor';

  const showLoginSignup =
    !flagsmithFFs.loading &&
    (!flagsmithFFs.allFeatureFlags?.[FEATURE_FLAGS.SHOW_SIGNUP_LOGIN_NAVTAB]
      ?.enabled ||
      userRole === '');

  // All tabs should match "About" styling - bright blue when active, light green when inactive
  const tabClasses =
    tabOrientation === 'vertical'
      ? 'min-w-[300px] min-h-[75px] text-lg font-medium normal-case leading-[27px]'
      : 'text-lg font-medium normal-case leading-[27px]';

  return (
    <div className={tabOrientation === 'horizontal' ? 'flex items-center gap-4' : ''}>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        orientation={tabOrientation}
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: '#8BC677' }, // light green underline for active tab
          '& .MuiTab-root': {
            color: '#8BC677', // light green for inactive tabs
            '&.Mui-selected': {
              color: '#60A5FA', // bright blue for active tab (matching "About")
            },
          },
        }}
        className={tabOrientation === 'horizontal' ? 'flex-1' : ''}
      >
        <Tab
          label="About"
          {...a11yProps(0)}
          className={tabClasses}
        />
        <Tab
          label="Initiatives"
          {...a11yProps(1)}
          className={tabClasses}
        />
        <Tab
          label="Impact"
          {...a11yProps(2)}
          className={tabClasses}
        />
        <Tab
          label="Resources"
          {...a11yProps(3)}
          className={tabClasses}
        />
        {showMentorProfiles && (
          <Tab
            label="Mentor Profiles"
            {...a11yProps(4)}
            className={tabClasses}
          />
        )}
        {showProfile && (
          <Tab
            label="My Profile"
            {...a11yProps(5)}
            className={tabClasses}
          />
        )}
      </Tabs>
      {showLoginSignup && tabOrientation === 'horizontal' && (
        <div className="flex items-center gap-2 ml-4">
          <Button
            variant="outlined"
            onClick={handleLogin}
            className="text-white border-white hover:bg-white hover:text-primary-main normal-case"
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={handleSignup}
            className="bg-secondary-green-dark hover:bg-secondary-green-light text-white normal-case"
            style={{ backgroundColor: '#6C9A5C' }}
            sx={{ '&:hover': { backgroundColor: '#8BC677' } }}
          >
            Sign Up
          </Button>
        </div>
      )}
      {showLoginSignup && tabOrientation === 'vertical' && (
        <div className="flex flex-col gap-2 p-4">
          <Button
            variant="outlined"
            onClick={handleLogin}
            className="text-primary-main border-primary-main hover:bg-primary-main hover:text-white normal-case"
            fullWidth
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={handleSignup}
            className="bg-secondary-green-dark hover:bg-secondary-green-light text-white normal-case"
            style={{ backgroundColor: '#6C9A5C' }}
            sx={{ '&:hover': { backgroundColor: '#8BC677' } }}
            fullWidth
          >
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
}
