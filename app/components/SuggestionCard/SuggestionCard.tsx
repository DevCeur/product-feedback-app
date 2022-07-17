import type { Suggestion, SuggestionCategory } from "@prisma/client";

import { Link } from "@remix-run/react";
import { BiChevronUp } from "react-icons/bi";
import { FaComment } from "react-icons/fa";

export const SuggestionCategoryBadge = ({ category }: { category: string }) => {
  return (
    <div className="inline-block py-2 px-4 lg:px-5 bg-bg-overlay transition-colors duration-200 rounded-xl">
      <span className="text-sm font-medium text-brand-blue-primary">
        {category}
      </span>
    </div>
  );
};

type SuggestionCardProps = {
  suggestion: Suggestion & { category: SuggestionCategory };
};

export const SuggestionCard = ({ suggestion }: SuggestionCardProps) => {
  return (
    <div className="w-full bg-white p-6 md:p-8 flex flex-col-reverse md:flex-row items-start justify-between md:space-x-10 rounded-xl">
      <div className="w-full md:w-min flex justify-between">
        <button className="px-3 py-2 flex md:flex-col items-center justify-center space-x-2 md:space-x-0 bg-bg-overlay hover:bg-bg-overlay-light rounded-xl transition-all duration-200">
          <BiChevronUp className="text-xl text-brand-blue-primary" />

          <span className="text-sm font-bold text-fg-primary">
            {suggestion.votes}
          </span>
        </button>

        <Link
          to="/feedback-detail"
          className="flex md:hidden items-center space-x-3"
        >
          <FaComment className="text-xl text-bg-overlay-light" />

          <span className="font-bold text-fg-primary">2</span>
        </Link>
      </div>

      <Link
        to="/feedback-detail"
        className="flex-1 mb-6 md:mb-0 flex items-center justify-between"
      >
        <div>
          <p className="md:text-lg font-bold text-fg-primary mb-1">
            {suggestion.title}
          </p>
          <p className="text-sm text-fg-secondary mb-3">
            {suggestion.description}
          </p>
          <SuggestionCategoryBadge category={suggestion.category.title} />
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <FaComment className="text-xl text-bg-overlay-light" />

          <span className="font-bold text-fg-primary">2</span>
        </div>
      </Link>
    </div>
  );
};
