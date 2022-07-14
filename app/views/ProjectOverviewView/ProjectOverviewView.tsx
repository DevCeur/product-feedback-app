import { Link } from "@remix-run/react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { HiLightBulb, HiPlusSm } from "react-icons/hi";

import type { ProjectExpanded } from "~/utils/types";

import { ProjectBanner } from "~/components/ProjectBanner";
import { SuggestionCard } from "~/components/SuggestionCard";
import { ProjectQuickActions } from "~/components/ProjectQuickActions";
import { ProjectRoadmapBanner } from "~/components/ProjectRoadmapBanner";
import { SuggestionCategoriesFilter } from "~/components/SuggestionCategoriesFilter";

const AddSuggestionLink = () => {
  return (
    <Link
      to="/create-feedback"
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

type ProjectOverviewViewProps = {
  project: ProjectExpanded;
  isAuthenticated?: boolean;
};

export const ProjectOverviewView = ({
  project,
  isAuthenticated,
}: ProjectOverviewViewProps) => {
  return (
    <div
      className={`w-full flex flex-col lg:grid grid-cols-4 grid-flow-col md:gap-7 ${
        isAuthenticated && "pb-12 2xl:pb-0"
      }`}
    >
      <div className="w-full col-span-1 hidden lg:flex flex-col lg:space-y-6 md:grid grid-cols-3 gap-2">
        <div className="flex flex-col space-y-2">
          <ProjectBanner project={project} />

          {isAuthenticated && (
            <div className="hidden md:block lg:hidden">
              <ProjectQuickActions />
            </div>
          )}
        </div>

        {isAuthenticated && (
          <div className="hidden lg:block">
            <ProjectQuickActions />
          </div>
        )}

        <SuggestionCategoriesFilter categories={project.suggestionCategories} />

        <ProjectRoadmapBanner project={project} />
      </div>

      <div className="w-full h-full md:pt-0 col-span-3 md:overflow-hidden flex flex-col">
        <div className="w-full bg-bg-overlay-dark text-white py-3 px-6 md:mx-auto md:px-7 md:mb-7 flex items-center justify-between md:rounded-xl rounded-t-xl">
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4 mr-9">
              <HiLightBulb className="text-2xl" />

              <p className="text-lg font-bold">
                {project.suggestions.length} Suggestions
              </p>
            </div>

            <button className="text-sm text-fg-overlay">
              Sort by: <span className="font-bold">Most Upvotes</span>{" "}
              <BiChevronDown className="inline-block text-lg" />
            </button>
          </div>

          <AddSuggestionLink />
        </div>

        <div className="w-full md:hidden px-6 py-5 mb-12 sticky top-0 bg-project-gradient bg-[length:1000px] bg-left-top flex justify-between items-center rounded-b-xl">
          <div className="flex flex-col">
            <h3 className="font-bold text-white mb-1">{project.name}</h3>
            <p className="text-xs text-fg-overlay">Feedback Board</p>
          </div>

          <button className="text-white text-4xl">
            <BiMenu />
          </button>
        </div>

        <div className="w-full h-full lg:relative lg:overflow-auto lg:pb-[94px] ">
          <div className="w-full lg:absolute top-0 right-0 flex-col space-y-6 pb-12">
            {project.suggestions.map((suggestion) => (
              <SuggestionCard key={suggestion.id} suggestion={suggestion} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
