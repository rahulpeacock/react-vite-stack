import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/posts/post/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/posts/post/"!{' '}
      <Button asChild>
        <Link to='/'>Home</Link>
      </Button>
    </div>
  );
}
