import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";
import type { ProjectExpanded } from "~/utils/types";

import { getLastProject } from "~/services/project";

import { SuggestionsView } from "~/views/SuggestionsView";

type SuggestionsLoaderData = {
  project: ProjectExpanded;
};

export const loader: LoaderFunction = async () => {
  const { lastProject } = await getLastProject();

  return { project: lastProject };
};

const SuggestionsRoute = () => {
  const { project } = useLoaderData<SuggestionsLoaderData>();

  return <SuggestionsView project={project} />;
};

export default SuggestionsRoute;
