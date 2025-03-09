import { Button } from '@/components/ui/button';
import { Link, createFileRoute } from '@tanstack/react-router';

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
