import { redirect } from "@remix-run/node";

import type { ActionFunction } from "@remix-run/node";

import { deleteSuggestion } from "~/services/suggestion.server";

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const projectId = formData.get("projectId");

  const { errors } = await deleteSuggestion({
    id: params.suggestionId as string,
  });

  if (errors) {
    return { errors };
  }

  return redirect(`/project/${projectId}`);
};
