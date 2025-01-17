'use client';
import Logo from '../Logo/Logo';
import Link from 'next/link'
import { useState } from 'react';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGalaxy,
  IconHome2,
  IconLogout,
  IconUser,
} from '@tabler/icons-react';
import { Center, Group, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
  url?: string;
}

function NavbarLink({ icon: Icon, label, active, onClick, url }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link href={`${url}`}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon size={20} stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', url: '/' },
  // If not logged in, go to signup page, need logic for login status
  { icon: IconUser, label: 'Account', url: '/Account' },
  { icon: IconDeviceDesktopAnalytics, label: 'Our Course', url: '/OurCourse' },
  { icon: IconCalendarStats, label: 'Laws by State', url: '/LawsByState' },
  { icon: IconGalaxy, label: 'About Us', url: '/AboutUs' },
  { icon: IconFingerprint, label: 'Contact Us', url: '/ContactUs' },
];

const Navbar = () => {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
      url={link.url}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Logo />
      </Center>

      <div className={classes.navbarMain}>
        <Group justify="center" gap={0}>
          {links}
        </Group>
      </div>

      <Group justify="center" gap={0}>
        {/* Will render conditionally based on user logged in state */}
        <NavbarLink icon={IconLogout} label="Logout" />
      </Group>
    </nav>
  );
}

export default Navbar;