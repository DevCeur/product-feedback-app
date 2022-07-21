import { Link } from "@remix-run/react";
import { BiPencil, BiShareAlt } from "react-icons/bi";

import type { Project } from "@prisma/client";
import { DeleteProjectModal } from "../DeleteProjectModal";

type ProjecQuickActionsProps = {
  project: Project;
};

export const ProjectQuickActions = ({ project }: ProjecQuickActionsProps) => {
  return (
    <div className="w-full p-4 lg:p-6 bg-white flex justify-between items-center rounded-xl">
      <DeleteProjectModal project={project} />

      <Link to={`/project/${project.id}/edit`} className="icon-button">
        <BiPencil />
      </Link>

      <button className="icon-button">
        <BiShareAlt />
      </button>
    </div>
  );
};
