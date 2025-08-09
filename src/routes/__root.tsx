import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import { scan } from 'react-scan';
import { QueryProvider } from '@/client/providers/query-provider';
import { TanStackRouterDevtools } from '@/client/providers/router-devtools';
import { ThemeProvider } from '@/client/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

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
  component: RootRouteComponent,
});

function RootRouteComponent() {
  return (
    <Fragment>
      <ThemeProvider defaultTheme='light'>
        <QueryProvider>
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
