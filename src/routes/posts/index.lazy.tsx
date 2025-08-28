import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createLazyFileRoute('/posts/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/posts"!{' '}
      <Button asChild>
        <Link to='/'>Home</Link>
      </Button>
    </div>
  );
}
