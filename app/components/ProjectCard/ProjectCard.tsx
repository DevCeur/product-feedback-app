import { Link } from "@remix-run/react";

import type { ProjectExpanded } from "~/utils/types";

type ProjectCardProps = {
  project: ProjectExpanded;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="w-auto p-4 bg-bg-overlay rounded-xl"
    >
      <h3>{project.name}</h3>
    </Link>
  );
};
