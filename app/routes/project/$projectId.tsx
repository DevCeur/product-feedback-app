import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";
import type { ProjectExpanded } from "~/utils/types";

import { getCurrentUserId } from "~/services/user.server";
import { getLastProject } from "~/services/project.server";

import { ProjectOverviewView } from "~/views/ProjectOverviewView";

type SuggestionsLoaderData = {
  project: ProjectExpanded;
  isAuthenticated: boolean;
};

export const loader: LoaderFunction = async ({ request }) => {
  // TO-DO | create this functionality to make this page dynamic

  // const { project } = await getProjectById({ id: params.projectId })

  const { lastProject } = await getLastProject();

  const userId = await getCurrentUserId(request);

  return { isAuthenticated: !!userId, project: lastProject };
};

const ProjectOverviewRoute = () => {
  const { project, isAuthenticated } = useLoaderData<SuggestionsLoaderData>();

  return (
    <ProjectOverviewView project={project} isAuthenticated={isAuthenticated} />
  );
};

export default ProjectOverviewRoute;
