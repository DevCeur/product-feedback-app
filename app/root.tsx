import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/node";

import tailwindStyles from "~/styles/generated/tailwind.css";

import { MainLayout } from "./components/MainLayout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Product Feedback",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
];

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
