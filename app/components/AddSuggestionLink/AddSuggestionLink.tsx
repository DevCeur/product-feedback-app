import { Link } from "@remix-run/react";
import { HiPlusSm } from "react-icons/hi";

import type { ProjectExpanded } from "~/utils/types";

type AddSugestionLinkProps = {
  project: ProjectExpanded;
};

export const AddSuggestionLink = ({ project }: AddSugestionLinkProps) => {
  return (
    <Link
      to={`/project/${project.id}/create-suggestion`}
      className="text-sm text-white font-medium py-2 px-4 space-x-1 md:py-3 md:px-5 flex items-center bg-brand-purple hover:bg-brand-purple-light transition-colors duration-200 rounded-xl"
    >
      <span className="inline-block">
        <HiPlusSm className="text-xl md:text-base md:mr-2" />
      </span>
      <span className="hidden md:inline-block">Add Feedback</span>
      <span className="inline-block md:hidden">Add</span>
    </Link>
  );
};
