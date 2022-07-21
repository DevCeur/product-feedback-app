import { redirect } from "@remix-run/node";

import type { ActionFunction } from "@remix-run/node";

import { ROUTE } from "~/utils/enum";

import { deleteProject } from "~/services/project.server";

import { withAuth } from "~/utils/authPolicy.server";

export const action: ActionFunction = async ({ request, params }) => {
  return withAuth(request, {
    isPrivate: true,
    callback: async () => {
      const { errors } = await deleteProject({
        projectId: params.projectId as string,
      });

      if (errors) {
        return { errors };
      }

      return redirect(ROUTE.DASHBOARD);
    },
  });
};
