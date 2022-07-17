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

import { MainLayout } from "./components/MainLayout";

import { getCurrentUser, getCurrentUserId } from "./services/user.server";

import tailwindStyles from "~/styles/generated/tailwind.css";
import menuButtonStyles from "@reach/menu-button/styles.css";
import listboxStyles from "@reach/listbox/styles.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Product Feedback",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: menuButtonStyles },
  { rel: "stylesheet", href: listboxStyles },
];

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getCurrentUserId(request);

  let user: User | null = null;

  if (userId) {
    const { user: authUser } = await getCurrentUser(request);

    user = authUser;
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
