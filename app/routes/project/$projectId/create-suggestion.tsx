import invariant from "tiny-invariant";

import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { ERROR_MESSAGE } from "~/utils/enum";

import { getCurrentUserId } from "~/services/user.server";
import { getProjectById } from "~/services/project.server";
import { createSuggestion } from "~/services/suggestion.server";

import { withAuth } from "~/utils/authPolicy.server";

import { CreateSuggestionView } from "~/views/CreateSuggestionView";

export const loader: LoaderFunction = ({ request, params }) => {
  return withAuth(request, {
    isPrivate: true,
    callback: async () => {
      const { project } = await getProjectById({ id: params.projectId || "" });

      return { project };
    },
  });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();

  const errors: { [x: string]: string } = {};

  const userId = await getCurrentUserId(request);
  const projectId = params.projectId;

  const title = formData.get("title");
  const category = formData.get("category");
  const description = formData.get("description");

  invariant(typeof title === "string");
  invariant(typeof category === "string");
  invariant(typeof description === "string");

  if (!title) {
    errors.title = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (!description) {
    errors.description = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  const { errors: suggestionErrors } = await createSuggestion({
    userId,
    projectId: projectId as string,
    data: { title, category, description },
  });

  if (suggestionErrors) {
    return { errors: suggestionErrors };
  }

  return redirect(`/project/${projectId}`);
};

const CreateSuggestionRoute = () => {
  const { project } = useLoaderData();

  return <CreateSuggestionView project={project} />;
};

export default CreateSuggestionRoute;
