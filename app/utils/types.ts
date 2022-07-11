import type { Project, Suggestion, SuggestionCategory } from "@prisma/client";

export type ProjectWithSuggestions = Project & { suggestions: Suggestion[] };

export type ProjectExpanded = Project & {
  suggestions: (Suggestion & { category: SuggestionCategory })[];
  suggestionCategories: SuggestionCategory[];
};
