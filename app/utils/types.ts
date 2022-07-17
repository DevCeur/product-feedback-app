import type {
  Project,
  Suggestion,
  SuggestionCategory,
  User,
} from "@prisma/client";

export type ProjectWithSuggestions = Project & { suggestions: Suggestion[] };

export type ProjectExpanded = Project & {
  suggestions: (Suggestion & { category: SuggestionCategory })[];
  suggestionCategories: SuggestionCategory[];
};

export type RootLoaderData = {
  user: User;
};

export type ExtendedError = Error & {
  code: string;
  meta: { target: string[] };
};

export type SuggestionExtended = Suggestion & {
  category: SuggestionCategory;
  project: ProjectExpanded;
  user: User;
};
