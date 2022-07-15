import type { LoaderFunction } from "@remix-run/node";

import { withAuth } from "~/utils/authPolicy.server";

import { DashboardView } from "~/views/DashboardView";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, { isPrivate: true });
};

const DashboardRoute = () => {
  return <DashboardView />;
};

export default DashboardRoute;
