import { Button } from '@/components/ui/button';
import { Link, createLazyFileRoute } from '@tanstack/react-router';

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
