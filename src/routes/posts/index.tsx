import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  loader: () => {
    console.log('loading posts route');
  },
});
