import type { ProjectExpanded } from "~/utils/types";

import { EmptySuggestionsIcon } from "./components/EmptySuggestionIcon";

import { SuggestionCard } from "../SuggestionCard";
import { AddSuggestionLink } from "../AddSuggestionLink";

type SuggestionsListProps = {
  project: ProjectExpanded;
};

export const SuggestionsList = ({ project }: SuggestionsListProps) => {
  const { suggestions } = project;

  return (
    <>
      {suggestions.length > 0 ? (
        <div className="w-full lg:absolute top-0 right-0 flex-col space-y-6 pb-12">
          {suggestions.map((suggestion) => (
            <SuggestionCard key={suggestion.id} suggestion={suggestion} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[600px] pb-12 flex justify-center items-center rounded-xl">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-12">
              <EmptySuggestionsIcon />
            </div>

            <div className="max-w-[410px] text-center mb-12">
              <h1 className="text-2xl text-fg-primary font-bold mb-2">
                There is no feedback yet.
              </h1>
              <p className="text-fg-secondary">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
            </div>

            <AddSuggestionLink project={project} />
          </div>
        </div>
      )}
    </>
  );
};
