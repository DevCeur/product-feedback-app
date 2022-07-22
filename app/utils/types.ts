import type {
  Comment,
  Project,
  Suggestion,
  SuggestionCategory,
  suggestionVote,
  User,
} from "@prisma/client";

export type ProjectWithSuggestions = Project & { suggestions: Suggestion[] };

export type ProjectExpanded = Project & {
  suggestions: ExtendedSuggestion[];
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

export type ExtendedComment = {
  user: User;
} & Comment;

export type ExtendedSuggestion = Suggestion & {
  votedBy: ExtendedSuggestionVote[];
  category: SuggestionCategory;
  project: ProjectExpanded;
  user: User;
  comments: ExtendedComment[];
};
