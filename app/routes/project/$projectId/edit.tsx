import { useLoaderData } from "@remix-run/react";

import { redirect } from "@remix-run/node";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { ERROR_MESSAGE, ROUTE } from "~/utils/enum";
import { withAuth } from "~/utils/authPolicy.server";

import { getProjectById, updateProject } from "~/services/project.server";

import { EditProjectView } from "~/views/EditProjectView";
import invariant from "tiny-invariant";

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

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const errors: { [x: string]: string } = {};

  const name = formData.get("name");

  invariant(typeof name === "string");

  if (!name) {
    errors.name = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  const { errors: updateErrors } = await updateProject({
    projectId: params.projectId as string,
    data: { name },
  });

  if (updateErrors) {
    return { errors: updateErrors };
  }

  return redirect(ROUTE.DASHBOARD);
};

const EditProjectRoute = () => {
  const { project } = useLoaderData();

  return <EditProjectView project={project} />;
};

export default EditProjectRoute;
