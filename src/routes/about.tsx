import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'My App is a web application',
      },
      {
        title: 'About',
      },
    ],
  }),
  component: () => (
    <div>
      Hello /about!{' '}
      <div>
        <Link to='/'>Back to Home</Link>
      </div>
    </div>
  ),
});
