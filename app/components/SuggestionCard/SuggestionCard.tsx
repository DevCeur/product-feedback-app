import { Link } from "@remix-run/react";
import { BiChevronUp } from "react-icons/bi";
import { FaComment } from "react-icons/fa";

import type { SuggestionExtended } from "~/utils/types";

export const SuggestionCategoryBadge = ({ category }: { category: string }) => {
  return (
    <div className="inline-block py-2 px-4 lg:px-5 bg-bg-overlay transition-colors duration-200 rounded-xl">
      <span className="text-sm font-medium text-brand-blue-primary">
        {category}
      </span>
    </div>
  );
};

export const SuggestionContent = ({
  suggestion,
}: {
  suggestion: Partial<SuggestionExtended>;
}) => {
  return (
    <>
      <div>
        <p className="md:text-lg font-bold text-fg-primary mb-1">
          {suggestion.title}
        </p>
        <p className="text-sm text-fg-secondary mb-3">
          {suggestion.description}
        </p>
        <SuggestionCategoryBadge
          category={suggestion?.category?.title as string}
        />
      </div>

      <div className="hidden md:flex items-center space-x-3">
        <FaComment className="text-xl text-bg-overlay-light" />

        <span className="font-bold text-fg-primary">2</span>
      </div>
    </>
  );
};

type SuggestionCardProps = {
  hideDetailsLink?: boolean;
  suggestion: Partial<SuggestionExtended>;
};

export const SuggestionCard = ({
  suggestion,
  hideDetailsLink,
}: SuggestionCardProps) => {
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
          to={`/suggestion/${suggestion.id}`}
          className="flex md:hidden items-center space-x-3"
        >
          <FaComment className="text-xl text-bg-overlay-light" />

          <span className="font-bold text-fg-primary">2</span>
        </Link>
      </div>

      {hideDetailsLink ? (
        <div className="flex-1 mb-6 md:mb-0 flex items-center justify-between">
          <SuggestionContent suggestion={suggestion} />
        </div>
      ) : (
        <Link
          to={`/suggestion/${suggestion.id}`}
          className="flex-1 mb-6 md:mb-0 flex items-center justify-between"
        >
          <SuggestionContent suggestion={suggestion} />
        </Link>
      )}
    </div>
  );
};
