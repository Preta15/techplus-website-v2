# Tech+ UW Portal

The Tech+ UW Portal is the main landing site for current/prospective members and sponsors to learn about Tech+. Moreover, this portal also enables mentors and mentees to update their profiles and potentially maintain mentor-mentee relationships.

### Requirements

Ensure you have the following installed:
```
node@v22
pnpm@9.0.0
```

To install pnpm:
```sh
npm install -g pnpm
```

Or using corepack (recommended):
```sh
corepack enable
corepack prepare pnpm@9.0.0 --activate
```

## Setup

1. Clone the repo to your local machine
```sh
git clone https://github.com/TechPlus-UW/techplus-website-v2.git
```

2. Install dependencies
```sh
pnpm install
```

## Running the application locally

Start your local development server with:
```sh
pnpm dev:web
```

This will open up a browser window on http://localhost:3000.

You will need a `.env.local` file containing the following environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `NEXT_PUBLIC_FLAGSMITH_ENV_KEY` - Your Flagsmith environment key

## Project Overview

This is a Next.js 15 application built with:
- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Material-UI (MUI) v6
- **State Management**: Redux Toolkit
- **Backend**: Supabase (minimal setup)
- **Package Manager**: pnpm
- **Build System**: Turbo

The project is divided into various subcomponents located in the `components/` folder representing different parts of the website.

### Project Structure

```
techplus-website-v2/
├── app/                    # Next.js App Router pages
├── components/            # React components (TypeScript)
├── constants/            # TypeScript constants
├── lib/                  # Utilities, store, supabase, theme
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## Available Scripts

### `pnpm dev:web`

Runs the app in development mode with Turbo.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `pnpm build`

Builds the app for production using Turbo. The build output will be in the `.next` folder.

### `pnpm start`

Starts the production server.

### `pnpm lint`

Runs ESLint to check for code quality issues.

### `pnpm type-check`

Runs TypeScript compiler to check for type errors.

### `pnpm turbo`

Runs Turbo commands directly.

## Technology Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI v6** - React component library
- **Redux Toolkit** - State management
- **Supabase** - Backend as a service
- **Turbo** - Build system and task runner
- **pnpm** - Fast, disk space efficient package manager

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material-UI Documentation](https://mui.com)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Supabase Documentation](https://supabase.com/docs)
- [Turbo Documentation](https://turbo.build/repo/docs)
