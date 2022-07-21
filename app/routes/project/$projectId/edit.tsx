import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";

import { withAuth } from "~/utils/authPolicy.server";

import { getProjectById } from "~/services/project.server";

import { EditProjectView } from "~/views/EditProjectView";

export const loader: LoaderFunction = ({ request, params }) => {
  return withAuth(request, {
    isPrivate: true,
    callback: async () => {
      const { project } = await getProjectById({
        id: params.projectId as string,
      });

      return { project };
    },
  });
};

const EditProjectRoute = () => {
  const { project } = useLoaderData();

  return <EditProjectView project={project} />;
};

export default EditProjectRoute;
