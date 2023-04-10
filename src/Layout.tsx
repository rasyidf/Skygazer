import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Header, ScrollArea } from '@mantine/core';
import { NavigationBar } from "./NavigationBar";

export function Layout() {
  return (
    <AppShell 
      layout='alt'
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      header={<Header height={0}> </Header>}
      navbar={<NavigationBar />}
    >
      <ScrollArea style={{ height: "100vh", width: "calc(100vw - 90px)" }}>
        <Outlet />
      </ScrollArea>
    </AppShell>
  );
}
