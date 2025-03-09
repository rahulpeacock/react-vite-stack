import { QueryProvider } from '@/client/providers/query-provider';
import { TanStackRouterDevtools } from '@/client/providers/router-devtools';
import { ThemeProvider } from '@/client/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import type { QueryClient } from '@tanstack/react-query';
import { HeadContent, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import React from 'react';
import { createPortal } from 'react-dom';
import { scan } from 'react-scan';
import { Fragment } from 'react/jsx-runtime';

interface MyRouterContext {
  queryClient: QueryClient;
}

function scanReactApp() {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

import.meta.env.MODE === 'development' && scanReactApp();

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        title: 'My App',
      },
    ],
  }),
  component: RootRouteComponent,
});

function RootRouteComponent() {
  console.log(import.meta.env.MODE);
  return (
    <Fragment>
      <ThemeProvider>
        <QueryProvider>
          {createPortal(<HeadContent />, document.querySelector('head')!)}
          <Outlet />
          <Toaster />
        </QueryProvider>
      </ThemeProvider>
      <React.Suspense>
        <TanStackRouterDevtools />
      </React.Suspense>
    </Fragment>
  );
}
