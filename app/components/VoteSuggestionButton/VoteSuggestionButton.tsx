import { useEffect, useState } from "react";
import { useFetcher } from "@remix-run/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import type { ExtendedSuggestion } from "~/utils/types";

import { useUser } from "~/hooks/useUser";

type VoteSuggestionButtonProps = {
  suggestion: Partial<ExtendedSuggestion>;
};

export const VoteSuggestionButton = ({
  suggestion,
}: VoteSuggestionButtonProps) => {
  const { submit } = useFetcher();

  const [isLoading, setIsLoading] = useState(true);
  const [isVotedByUser, setIsVotedByUser] = useState(false);

  const user = useUser((state) => state.user);

  const handleToggleVote = () => {
    if (user) {
      submit(
        {
          userId: user.id as string,
          subaction: isVotedByUser ? "unvote" : "vote",
          votedById: suggestion.votedBy?.find((vote) => vote.userId === user.id)
            ?.id as string,
        },
        { method: "post", action: `/suggestion/${suggestion.id}/toggle-vote` }
      );
    }
  };

  useEffect(() => {
    if (user) {
      setIsVotedByUser(
        Boolean(
          suggestion.votedBy
            ?.map((vote) => vote.user.id)
            .includes(user.id as string)
        )
      );
    }

    setIsLoading(false);
  }, [suggestion.votedBy, user]);

  return (
    <button
      onClick={handleToggleVote}
      disabled={isLoading}
      className={`px-3 py-2 flex md:flex-col items-center justify-center space-x-2 md:space-x-0 ${
        isVotedByUser
          ? "bg-brand-blue-primary hover:bg-brand-blue-primary-light"
          : "bg-bg-overlay hover:bg-bg-overlay-light"
      } rounded-xl transition-all duration-200`}
    >
      {isVotedByUser ? (
        <BiChevronDown
          className={`text-xl ${
            isVotedByUser ? "text-white" : "text-brand-blue-primary"
          }`}
        />
      ) : (
        <BiChevronUp
          className={`text-xl ${
            isVotedByUser ? "text-white" : "text-brand-blue-primary"
          }`}
        />
      )}

      <span
        className={`text-sm font-bold ${
          isVotedByUser ? "text-white" : "text-fg-primary"
        }`}
      >
        {suggestion.votes}
      </span>
    </button>
  );
};
