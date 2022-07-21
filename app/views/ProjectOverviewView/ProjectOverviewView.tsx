import { HiLightBulb } from "react-icons/hi";
import { BiChevronDown, BiMenu } from "react-icons/bi";

import type { ProjectExpanded } from "~/utils/types";

import { ProjectBanner } from "~/components/ProjectBanner";
import { SuggestionsList } from "~/components/SuggestionsList";
import { AddSuggestionLink } from "~/components/AddSuggestionLink";
import { ProjectQuickActions } from "~/components/ProjectQuickActions";
import { ProjectRoadmapBanner } from "~/components/ProjectRoadmapBanner";
import { SuggestionCategoriesFilter } from "~/components/SuggestionCategoriesFilter";

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
              <ProjectQuickActions project={project} />
            </div>
          )}
        </div>

        {isAuthenticated && (
          <div className="hidden lg:block">
            <ProjectQuickActions project={project} />
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

          <AddSuggestionLink project={project} />
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
          <SuggestionsList project={project} />
        </div>
      </div>
    </div>
  );
};
