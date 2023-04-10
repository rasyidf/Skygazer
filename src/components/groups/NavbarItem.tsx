import { Center, Navbar, Stack, Tooltip, UnstyledButton, createStyles, rem } from '@mantine/core';
import {
  IconLogout,
  IconSettings2,
  IconSun,
  IconSwitchHorizontal,
  IconTelescope
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

export type NavbarLinkProps = {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(params?: string): void;
  href?: string;
};

function NavbarLink({ icon: Icon, label, active, onClick, href }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0.7 }}>
      <UnstyledButton onClick={() => onClick?.(href)} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}


export function NavbarSide({ data }: { data: NavbarLinkProps[]; }) {
  const [active, setActive] = useState(2);
  const navigate = useNavigate();

  const links = data.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      href={link.href}
      active={index === active}
      onClick={() => {
        if (link.href) {
          navigate(link.href);
        }
        return setActive(index);
      }}
    />
  ));

  return (
    <Navbar width={{ base: 80 }} p="md">
      <Center>
        <IconTelescope />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSettings2} label="Settings" href={"/options"}
            active={99 === active} onClick={(href) => {
              if (href) {
                navigate(href);
              }
              return setActive(99);
            }} />

          <NavbarLink icon={IconSun} label="Switch Theme" />

          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}