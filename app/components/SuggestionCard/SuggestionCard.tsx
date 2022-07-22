import { Link } from "@remix-run/react";
import { FaComment } from "react-icons/fa";

import type { ExtendedSuggestion } from "~/utils/types";

import { VoteSuggestionButton } from "../VoteSuggestionButton";

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
  suggestion: Partial<ExtendedSuggestion>;
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

        <span className="font-bold text-fg-primary">
          {suggestion.comments?.length}
        </span>
      </div>
    </>
  );
};

type SuggestionCardProps = {
  hideDetailsLink?: boolean;
  suggestion: Partial<ExtendedSuggestion>;
};

export const SuggestionCard = ({
  suggestion,
  hideDetailsLink,
}: SuggestionCardProps) => {
  return (
    <div className="w-full bg-white p-6 md:p-8 flex flex-col-reverse md:flex-row items-start justify-between md:space-x-10 rounded-xl">
      <div className="w-full md:w-min flex justify-between">
        <VoteSuggestionButton suggestion={suggestion} />

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
