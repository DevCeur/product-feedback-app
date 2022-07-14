// delete me when project selection is ready!

import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";
import type { ProjectExpanded } from "~/utils/types";

import { getLastProject } from "~/services/project.server";

import { ProjectOverviewView } from "~/views/ProjectOverviewView";

type SuggestionsLoaderData = {
  project: ProjectExpanded;
};

export const loader: LoaderFunction = async () => {
  const { lastProject } = await getLastProject();

  return { project: lastProject };
};

const SuggestionsRoute = () => {
  const { project } = useLoaderData<SuggestionsLoaderData>();

  return <ProjectOverviewView project={project} />;
};

export default SuggestionsRoute;
