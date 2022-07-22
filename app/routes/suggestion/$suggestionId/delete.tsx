import { redirect } from "@remix-run/node";

import type { ActionFunction } from "@remix-run/node";

import { deleteSuggestion } from "~/services/suggestion.server";
import { withAuth } from "~/utils/authPolicy.server";

export const action: ActionFunction = async ({ request, params }) => {
  return withAuth(request, {
    isPrivate: true,
    callback: async () => {
      const formData = await request.formData();

      const projectId = formData.get("projectId");

      const { errors } = await deleteSuggestion({
        id: params.suggestionId as string,
      });

      if (errors) {
        console.log(errors);
      }

      return redirect(`/project/${projectId}`);
    },
  });
};
