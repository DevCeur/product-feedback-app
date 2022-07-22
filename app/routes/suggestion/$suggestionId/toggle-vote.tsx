import invariant from "tiny-invariant";

import type { ActionFunction } from "@remix-run/node";

import { toggleVote } from "~/services/suggestion.server";

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const userId = formData.get("userId");
  const votedById = formData.get("votedById");
  const subaction = formData.get("subaction");

  const suggestionId = params.suggestionId;

  invariant(typeof userId === "string");
  invariant(typeof suggestionId === "string");
  invariant(typeof votedById === "string");
  invariant(typeof subaction === "string");

  const { suggestion, errors } = await toggleVote({
    userId,
    votedById,
    subaction,
    suggestionId,
  });

  if (errors) {
    return { errors };
  }

  return { success: true, suggestion };
};
