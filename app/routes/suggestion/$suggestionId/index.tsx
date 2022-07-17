import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";

import { getSuggestionById } from "~/services/suggestion.server";

import { SuggestionDetailView } from "~/views/SuggestionDetailView";

export const loader: LoaderFunction = async ({ request, params }) => {
  const { suggestion } = await getSuggestionById({
    id: params.suggestionId as string,
  });

  return { suggestion };
};

const SuggestionDetailRoute = () => {
  const { suggestion } = useLoaderData();

  return <SuggestionDetailView suggestion={suggestion} />;
};

export default SuggestionDetailRoute;
