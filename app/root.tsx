import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
} from "@remix-run/react";

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import type { User } from "@prisma/client";

import { prisma } from "~/lib/prisma.server";

import { MainLayout } from "./components/MainLayout";

import { getCurrentUserId } from "./services/user.server";

import tailwindStyles from "~/styles/generated/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Product Feedback",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
];

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getCurrentUserId(request);

  let user: User | null = null;

  if (userId) {
    user = await prisma.user.findUnique({
      where: { email: "jhondoe@email.com" },
    });
  }

  return { user };
};

const App = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainLayout>
          <Outlet />
        </MainLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;
