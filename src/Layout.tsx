import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { NavigationBar } from "./NavigationBar";

export function Layout() {
  return (
    <AppShell
      navbar={<NavigationBar />}
    >
      <Outlet />
    </AppShell>
  );
}
