import invariant from "tiny-invariant";

import type { ActionFunction } from "@remix-run/node";

import { ERROR_MESSAGE } from "~/utils/enum";

import { createComment } from "~/services/comment.server";

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const errors: { [x: string]: string } = {};

  const message = formData.get("message");
  const userId = formData.get("userId");

  const suggestionId = params.suggestionId;

  invariant(typeof userId === "string");
  invariant(typeof message === "string");
  invariant(typeof suggestionId === "string");

  if (!message) {
    errors.message = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (message && message.length > 255) {
    errors.message = "This comment is too long.";
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  const { errors: commentErrors } = await createComment({
    userId,
    message,
    suggestionId,
  });

  if (commentErrors) {
    return { errors: commentErrors };
  }

  return { success: true };
};
