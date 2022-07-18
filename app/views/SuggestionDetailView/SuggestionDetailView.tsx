import { Link } from "@remix-run/react";

import type { SuggestionExtended } from "~/utils/types";

import { GoBackButton } from "~/components/GoBackButton";
import { SuggestionCard } from "~/components/SuggestionCard";

type SuggestionDetailViewProps = {
  suggestion: SuggestionExtended;
  showEditSuggestion: boolean;
};

export const SuggestionDetailView = ({
  suggestion,
  showEditSuggestion,
}: SuggestionDetailViewProps) => {
  return (
    <div className="w-full max-w-[730px] mx-auto">
      <div className="w-full flex justify-between items-center mb-6">
        <GoBackButton />

        {showEditSuggestion && (
          <Link
            to={`/suggestion/${suggestion.id}/edit`}
            className="px-6 py-3 text-sm font-semibold bg-brand-blue-primary text-white rounded-xl"
          >
            Edit Feedback
          </Link>
        )}
      </div>

      <SuggestionCard suggestion={suggestion} hideDetailsLink />
    </div>
  );
};
