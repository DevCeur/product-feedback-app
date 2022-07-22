import { Link } from "@remix-run/react";

import type { User } from "@prisma/client";
import type { ExtendedSuggestion } from "~/utils/types";

import { GoBackButton } from "~/components/GoBackButton";
import { SuggestionCard } from "~/components/SuggestionCard";
import { CreateSuggestionCommentForm } from "~/components/CreateSuggestionCommentForm";

type SuggestionDetailViewProps = {
  user: User;
  suggestion: ExtendedSuggestion;
  showEditSuggestion: boolean;
};

export const SuggestionDetailView = ({
  user,
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

      <div className="mb-6">
        <SuggestionCard suggestion={suggestion} hideDetailsLink />
      </div>

      <div>
        {suggestion.comments.map((comment) => (
          <span key={comment.id}>{comment.message}</span>
        ))}
      </div>

      <CreateSuggestionCommentForm user={user} suggestion={suggestion} />
    </div>
  );
};
