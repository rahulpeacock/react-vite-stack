import { TanStackRouterDevtools as _DevTools } from '@tanstack/react-router-devtools';

export function TanStackRouterDevtools() {
  if (import.meta.env.MODE === 'production') return null;

  return <_DevTools />;
}
