# dota-pos-nextjs

this is a proof of concept project to create the first point of sales system by our new team

## Kamu perlu

1. Install node 18.19.0
2. Clone repository ini
3. Buka VSCode atau lainnya dan jalankan `npm install`
4. Untuk jalankan project `npm run dev`
5. Pastikan mysql terinstall untuk local development
6. Buatlah `.env` dengan isi berikut

```
NODE_ENV='development'
MYSQL_HOST_DEV=127.0.0.1
MYSQL_PORT_DEV=3306
MYSQL_USERNAME_DEV='root'
MYSQL_PASSWORD_DEV='root'
MYSQL_DATABASE_DEV='dotapos'

MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USERNAME='root'
MYSQL_PASSWORD='root'
MYSQL_DATABASE='dotapos'
```

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

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
