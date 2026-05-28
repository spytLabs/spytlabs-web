This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## URL Shortener / Redirect Admin

This project includes a Supabase-backed redirect system:

- Public redirect route: `/r/[code]`
- Admin dashboard: `/r/admin`

### Admin credentials

Set these in your `.env.local` or hosting environment:

- `REDIRECT_ADMIN_USERNAME`
- `REDIRECT_ADMIN_PASSWORD`
- `REDIRECT_ADMIN_SESSION_SECRET`

### Required environment variables

Add these to your `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://wrkfpcfjqtoductvjcsa.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
REDIRECT_ADMIN_USERNAME=your_admin_username
REDIRECT_ADMIN_PASSWORD=your_admin_password
REDIRECT_ADMIN_SESSION_SECRET=your_long_random_session_secret
```

### Database migration

Apply the migration in:

- `supabase/migrations/20260527_create_redirect_links_table.sql`

Once applied, create redirects from `/r/admin` and access them via `/r/{code}`.
