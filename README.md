# ⚛️ React + Vite Sass kit
A simple, flexible and batteries-included starter template to kickstart your React projects with ease.

## The Stack includes
- [Typescript](https://www.typescriptlang.org/) for type safe and scalable React app
- [React.js](https://react.dev/) as the library for building frontend application
- [Tanstack Router](https://tanstack.com/router/latest) for type-safe and flexible client-side routing for React app
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn UI](https://ui.shadcn.com/) as the UI component library
- [Vite](https://vitejs.dev/guide/) for fast and optimized development and production build
- [Biome](https://biomejs.dev/) for formatting and linting
- [pnpm](https://pnpm.io/) as fast, efficient package-manager

## Installation
1. Clone the repository ```git clone https://github.com/rahulpeacock/react-vite-stack.git```
2. Navigate to the directory ```cd react-vite-stack```
3. Configure the environment variables ```cp .env.example .env.development.local```
4. Create the certificates for ```https``` which is configured in the ```vite.config.ts```
5. Install dependencies ```pnpm install```

## Development
1. Starting the development server ```pnpm dev```
2. This will launch the app in development mode. Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

> Make sure you have __Node.js__ and __pnpm__ installed in your machine

## Self-hosting using nginx
1. Copy the environment variables ```cp .env.example .env.production.local```
2. Build the application ```pnpm build```
3. Serve the ```dist``` directory using nginx as an SPA

## Deploying to cloudflare pages
1. Setup the environment variables and cloudflare api token at GitHub secrets > Actions
2. Use the workflow ```.github/workflows/deploy-pages.yaml```

## Support & Contribute
If you found this project helpful or enjoyed using it, please consider giving it a ⭐️ on GitHub! It helps others find the project and motivates us to keep improving.
