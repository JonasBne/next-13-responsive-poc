# Next Responsive PoC

## Description

Problem:

Let's say you need to create a responsive website and that you have designs for desktop and mobile versions. Imagine that there is no way to use media queries for those designs because they differ too much (for example: a mobile displays a list with cards and limited information, while a desktop shows a table with a lot of customization options). How would you do SSR in that case? The issue resides mainly around the `hydration` technique as described in the [React docs](https://react.dev/reference/react-dom/hydrate). You have to make sure that what is initially rendered on the server, also matches what is initially rendered on the client. So you have to decide on which layout you'll use to start with and both the server and client should render this HTML. Otherwise React will try to hydrate a DOM on the client that is different from the DOM that was rendered on the server. But, once the code runs on the client you should be able to take into account screen resizes etc.

Starting from this problem, I've tried to come up with some approaches to handle responsive design in Next 13, without needing to give up its strengths such as server-side rendering.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
