import type { LoaderFunction } from "@remix-run/node";

import { withAuth } from "~/utils/authPolicy.server";

import { getAllUserProjects } from "~/services/project.server";

import { DashboardView } from "~/views/DashboardView";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, {
    isPrivate: true,
    callback: async ({ user }) => {
      const { projects } = await getAllUserProjects({ userId: user?.id || "" });

      return { projects };
    },
  });
};

const DashboardRoute = () => {
  const { projects } = useLoaderData();

  return <DashboardView projects={projects} />;
};

export default DashboardRoute;
