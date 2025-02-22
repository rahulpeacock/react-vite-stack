import { TanStackRouterDevtools as _DevTools } from '@tanstack/router-devtools';

export function TanStackRouterDevtools() {
  if (import.meta.env.MODE === 'production') return null;

  return <_DevTools />;
}
