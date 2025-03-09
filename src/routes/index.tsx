import { Button } from '@/components/ui/button';
import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
      <Button asChild>
        <Link to='/about'>About</Link>
      </Button>
      <Button asChild>
        <Link to='/posts'>Posts</Link>
      </Button>
      <Button asChild>
        <Link to='/posts/post'>Individual Post</Link>
      </Button>
    </div>
  );
}
