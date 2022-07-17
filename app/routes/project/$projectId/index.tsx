import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";
import type { ProjectExpanded } from "~/utils/types";

import { getCurrentUserId } from "~/services/user.server";
import { getProjectById } from "~/services/project.server";

import { ProjectOverviewView } from "~/views/ProjectOverviewView";

type SuggestionsLoaderData = {
  project: ProjectExpanded;
  isAuthenticated: boolean;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { projectId } = params;

  const { project } = await getProjectById({ id: projectId || "" });

  const userId = await getCurrentUserId(request);

  return { isAuthenticated: !!userId, project: project };
};

const ProjectOverviewRoute = () => {
  const { project, isAuthenticated } = useLoaderData<SuggestionsLoaderData>();

  return (
    <ProjectOverviewView project={project} isAuthenticated={isAuthenticated} />
  );
};

export default ProjectOverviewRoute;
