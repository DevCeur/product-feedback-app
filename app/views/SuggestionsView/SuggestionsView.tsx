import { Link } from "@remix-run/react";
import { BiChevronDown } from "react-icons/bi";
import { HiLightBulb, HiPlusSm } from "react-icons/hi";

import { ProjectBanner } from "~/components/ProjectBanner";
import { ProjectRoadmapBanner } from "~/components/ProjectRoadmapBanner";
import { FeedbackCategoriesFilter } from "~/components/FeedbackCategoriesFilter";

export const SuggestionsView = () => {
  return (
    <div className="w-full h-full grid grid-cols-4 grid-flow-col gap-7">
      <div className="w-full col-span-1 flex flex-col space-y-7">
        <ProjectBanner />

        <FeedbackCategoriesFilter />

        <ProjectRoadmapBanner />
      </div>

      <div className="w-full h-full col-span-3 overflow-hidden flex flex-col">
        <div className="w-full bg-bg-overlay-dark text-white py-5 px-7 mb-7 flex items-center justify-between rounded-xl">
          <div className="flex items-center">
            <div className="flex items-center space-x-4 mr-9">
              <HiLightBulb className="text-2xl" />

              <p className="text-lg font-bold">6 Suggestions</p>
            </div>

            <button className="text-sm text-fg-overlay">
              Sort by: <span className="font-bold">Most Upvotes</span>{" "}
              <BiChevronDown className="inline-block text-lg" />
            </button>
          </div>

          <Link
            to="/create-feedback"
            className="text-sm text-white font-medium py-3 px-5 min-w-[150px] flex items-center bg-brand-purple hover:bg-brand-purple-light transition-colors duration-200 rounded-xl"
          >
            <span className="inline-block">
              <HiPlusSm className="text-lg mr-2" />
            </span>
            Add Feedback
          </Link>
        </div>

        <div className="h-full relative overflow-scroll pb-[94px]">
          <div className="w-full h-[2000px] bg-white absolute top-0 right-0" />
        </div>
      </div>
    </div>
  );
};
