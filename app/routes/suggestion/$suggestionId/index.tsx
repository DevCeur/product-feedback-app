import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";

import { getCurrentUser } from "~/services/user.server";
import { getSuggestionById } from "~/services/suggestion.server";

import { SuggestionDetailView } from "~/views/SuggestionDetailView";

export const loader: LoaderFunction = async ({ request, params }) => {
  const { user } = await getCurrentUser(request);

  const { suggestion } = await getSuggestionById({
    id: params.suggestionId as string,
  });

  const showEditSuggestion = user?.id === suggestion?.user?.id;

  return { suggestion, showEditSuggestion };
};

const SuggestionDetailRoute = () => {
  const { suggestion, showEditSuggestion } = useLoaderData();

  return (
    <SuggestionDetailView
      suggestion={suggestion}
      showEditSuggestion={showEditSuggestion}
    />
  );
};

export default SuggestionDetailRoute;
