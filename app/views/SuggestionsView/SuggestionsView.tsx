import { Link } from "@remix-run/react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { HiLightBulb, HiPlusSm } from "react-icons/hi";

import { FeedbackCard } from "~/components/FeedbackCard";
import { ProjectBanner } from "~/components/ProjectBanner";
import { ProjectRoadmapBanner } from "~/components/ProjectRoadmapBanner";
import { FeedbackCategoriesFilter } from "~/components/FeedbackCategoriesFilter";

const AddSuggestionLink = () => {
  return (
    <Link
      to="/create-feedback"
      className="text-sm text-white font-medium py-3 px-5 min-w-[150px] flex items-center bg-brand-purple hover:bg-brand-purple-light transition-colors duration-200 rounded-xl"
    >
      <span className="inline-block">
        <HiPlusSm className="text-lg mr-2" />
      </span>
      Add Feedback
    </Link>
  );
};

export const SuggestionsView = () => {
  return (
    <div className="w-full h-full relative flex flex-col lg:grid grid-cols-4 grid-flow-col gap-7">
      <div className="w-full fixed top-0 left-0 z-50 md:hidden px-6 py-5 bg-project-gradient bg-[length:1000px] bg-left-top flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="font-bold text-white mb-1">Frontend Mentor</h3>
          <p className="text-xs text-fg-overlay">Feedback Board</p>
        </div>

        <button className="text-white text-4xl">
          <BiMenu />
        </button>
      </div>

      <div className="w-full col-span-1 hidden lg:flex flex-col lg:space-y-6 md:grid grid-cols-3 gap-2">
        <ProjectBanner />

        <FeedbackCategoriesFilter />

        <ProjectRoadmapBanner />
      </div>

      <div className="w-full h-full pt-[36px] md:pt-0 col-span-3 md:overflow-hidden flex flex-col">
        <div className="md:w-full -mx-5 bg-bg-overlay-dark text-white py-3 px-6 md:mx-auto md:px-7 mb-7 flex items-center justify-between md:rounded-xl">
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4 mr-9">
              <HiLightBulb className="text-2xl" />

              <p className="text-lg font-bold">6 Suggestions</p>
            </div>

            <button className="text-sm text-fg-overlay">
              Sort by: <span className="font-bold">Most Upvotes</span>{" "}
              <BiChevronDown className="inline-block text-lg" />
            </button>
          </div>

          <AddSuggestionLink />
        </div>

        <div className="w-full h-full lg:relative lg:overflow-scroll pb-12 lg:pb-[94px]">
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
};
