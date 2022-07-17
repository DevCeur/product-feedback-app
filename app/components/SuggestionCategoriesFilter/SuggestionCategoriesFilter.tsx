import type { SuggestionCategory } from "@prisma/client";

const FilterButton = ({ filter }: { filter: string }) => {
  return (
    <button className="rounded-xl py-2 px-4 lg:px-5 bg-bg-overlay hover:bg-bg-overlay-light transition-colors duration-200">
      <span className="text-sm font-medium text-brand-blue-primary">
        {filter}
      </span>
    </button>
  );
};

type SuggestionCategoriesFilterProps = {
  categories: SuggestionCategory[];
};

export const SuggestionCategoriesFilter = ({
  categories,
}: SuggestionCategoriesFilterProps) => {
  return (
    <div className="w-full flex flex-wrap gap-x-2 gap-y-3 bg-white p-4 lg:p-6 rounded-xl">
      <FilterButton filter="All" />

      {categories.map((category) => (
        <FilterButton key={category.id} filter={category.title} />
      ))}
    </div>
  );
};
