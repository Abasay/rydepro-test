/** @format */
import profileIcon from '@/components/GeneralWEBApp/Dashboard/svgs/profile.svg';
import addUserIcon from '@/components/GeneralWEBApp/Dashboard/svgs/addUser.svg';
import historyIcon from '@/components/GeneralWEBApp/Dashboard/svgs/history.svg';
import cardIcon from '@/components/GeneralWEBApp/Dashboard/svgs/card.svg';
import usersIcon from '@/components/GeneralWEBApp/Dashboard/svgs/users.svg';
import giftIcon from '@/components/GeneralWEBApp/Dashboard/svgs/gift.svg';
import cupIcon from '@/components/GeneralWEBApp/Dashboard/svgs/cup.svg';
import unknownIcon from '@/components/GeneralWEBApp/Dashboard/svgs/unknown.svg';
import settingsIcon from '@/components/GeneralWEBApp/Dashboard/svgs/settings.svg';
import LogOut from '@/components/GeneralWEBApp/Dashboard/svgs/exit.svg';

type SideBarItem = {
  header: string;
  icon?: any;
  subHeader?: ReadonlyArray<{ icon: string; title: string }>;
};

export const sideBarFirstSection: ReadonlyArray<SideBarItem> = [
  {
    header: 'Individual',
    subHeader: [
      { icon: profileIcon, title: 'Profile' },
      { icon: usersIcon, title: 'Shared Accounts' },
    ],
  },
  {
    header: 'Bookings',
    subHeader: [{ icon: historyIcon, title: 'Ride History' }],
  },
  {
    header: 'Payments',
    subHeader: [{ icon: cardIcon, title: 'Payments Methods' }],
  },
  {
    header: 'Promotions',
    subHeader: [
      { icon: addUserIcon, title: 'Referral Program' },
      { icon: giftIcon, title: 'Promotion and Offers' },
      { icon: cupIcon, title: 'Rewards and Miles Points' },
    ],
  },
  {
    header: 'Legal',
    icon: unknownIcon,
  },
  {
    header: 'Help and Support',
    icon: unknownIcon,
  },
  {
    header: 'Settings',
    icon: settingsIcon,
  },
  {
    header: 'Log Out',
    icon: LogOut,
  },
];
