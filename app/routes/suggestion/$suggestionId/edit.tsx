import invariant from "tiny-invariant";

import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { SuggestionStatus } from "@prisma/client";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { ERROR_MESSAGE } from "~/utils/enum";

import { withAuth } from "~/utils/authPolicy.server";

import {
  getSuggestionById,
  updateSuggestion,
} from "~/services/suggestion.server";

import { EditSuggestionView } from "~/views/EditSuggestionView";

export const loader: LoaderFunction = ({ request, params }) => {
  return withAuth(request, {
    isPrivate: true,
    callback: async () => {
      const { suggestion } = await getSuggestionById({
        id: params.suggestionId as string,
      });

      return { suggestion };
    },
  });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const errors: { [x: string]: string } = {};

  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const status = formData.get("status");

  invariant(typeof title === "string");
  invariant(typeof description === "string");
  invariant(typeof category === "string");
  invariant(typeof status === "string");

  if (!title) {
    errors.title = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (!description) {
    errors.description = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  const { errors: suggestionErrors } = await updateSuggestion({
    suggestionId: params.suggestionId as string,
    data: { title, description, category, status: status as SuggestionStatus },
  });

  if (suggestionErrors) {
    return { errors: suggestionErrors };
  }

  return redirect(`/suggestion/${params.suggestionId}`);
};

const EditSuggestionRoute = () => {
  const { suggestion } = useLoaderData();

  return <EditSuggestionView suggestion={suggestion} />;
};

export default EditSuggestionRoute;
