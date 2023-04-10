import React from 'react';
import { NavbarLinkProps, NavbarSide } from './components/groups/NavbarItem';
import { IconCalendarStar, IconDashboard, IconScanEye, IconSettings, IconTelescope } from '@tabler/icons-react';

const navItems: NavbarLinkProps[] = [
  {
    icon: IconDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: IconScanEye,
    label: "Observation Log",
    href: "/observation-log",
  },
  {
    icon: IconCalendarStar,
    label: "Sky Events Calendar",
    href: "/sky-events-calendar",
  },
  {
    icon: IconTelescope,
    label: "Telescope Calculator",
    href: "/telescope-calculator",
  },
];

export function NavigationBar() {
  return (
    <NavbarSide data={navItems} />
  );
}
