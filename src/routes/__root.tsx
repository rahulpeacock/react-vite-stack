import { QueryProvider } from '@/client/providers/query-provider';
import { ThemeProvider } from '@/client/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';
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
  component: RootRouteComponent,
});

function RootRouteComponent() {
  return (
    <Fragment>
      <ThemeProvider>
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
