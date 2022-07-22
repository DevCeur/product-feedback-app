import type {
  Project,
  Suggestion,
  SuggestionCategory,
  suggestionVote,
  User,
} from "@prisma/client";

export type ProjectWithSuggestions = Project & { suggestions: Suggestion[] };

export type ProjectExpanded = Project & {
  suggestions: SuggestionExtended[];
  suggestionCategories: SuggestionCategory[];
};

export type RootLoaderData = {
  user: User;
};

export type ExtendedError = Error & {
  code: string;
  meta: { target: string[] };
};

export type ExtendedSuggestionVote = {
  user: User;
  suggestion: Suggestion;
} & suggestionVote;

export type SuggestionExtended = Suggestion & {
  votedBy: ExtendedSuggestionVote[];
  category: SuggestionCategory;
  project: ProjectExpanded;
  user: User;
};
