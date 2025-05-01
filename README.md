# Next.js with Better Auth

A minimal setup for using [Better Auth](https://www.better-auth.com) authentication in Next.js. This project implements email and password authentication using Drizzle ORM and PostgreSQL.

## Features

- Email and password authentication with Better Auth
- PostgreSQL database with Drizzle ORM
- Next.js 15 with App Router
- Tailwind CSS for styling

## Getting Started

1. Clone the repository:

```bash
git clone <your-repo-url>
cd next-better-auth
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up your environment variables:
   Create a `.env` file in the root directory with the following variables:

```env
APP_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```
4. Generate secret:

```bash
npx @better-auth/cli@latest secret
```

5. Run database migrations:

```bash
pnpm drizzle-kit generate
```

```bash
pnpm drizzle-kit migrate
```

6. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication Flow

This project implements the following authentication features:

- Email and password sign up
- Email and password sign in
- Protected routes
- Session management

## Database Schema

The project uses Drizzle ORM with the following main tables:

- `users` - User information
- `accounts` - Authentication accounts
- `sessions` - User sessions
- `verification_tokens` - Email verification tokens

## Useful Links

- [Better Auth Documentation](https://www.better-auth.com/docs/introduction)
- [Drizzle Adapter Documentation](https://www.better-auth.com/docs/adapters/drizzle)
- [Email & Password Authentication](https://www.better-auth.com/docs/authentication/email-password)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
