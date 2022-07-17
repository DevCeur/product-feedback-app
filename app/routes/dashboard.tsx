import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";

import { withAuth } from "~/utils/authPolicy.server";

import {
  getAllUserProjects,
  getFeaturedProject,
} from "~/services/project.server";

import { DashboardView } from "~/views/DashboardView";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, {
    isPrivate: true,
    callback: async ({ user }) => {
      const { projects } = await getAllUserProjects({ userId: user?.id || "" });

      const { featuredProject } = await getFeaturedProject({
        userId: user?.id || "",
      });

      return { user, projects, featuredProject };
    },
  });
};

const DashboardRoute = () => {
  const { projects, user } = useLoaderData();

  return <DashboardView user={user} projects={projects} />;
};

export default DashboardRoute;
