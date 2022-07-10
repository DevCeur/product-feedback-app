export const FEEDBACK_CATEGORIES_FILTERS = [
  "UI",
  "UX",
  "Enhancement",
  "Bug",
  "Feature",
];

const FilterButton = ({ filter }: { filter: string }) => {
  return (
    <button className="rounded-xl py-2 px-4 lg:px-5 bg-bg-overlay hover:bg-bg-overlay-light transition-colors duration-200">
      <span className="text-sm font-medium text-brand-blue-primary">
        {filter}
      </span>
    </button>
  );
};

export const FeedbackCategoriesFilter = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-2 gap-y-3 bg-white p-4 lg:p-6 rounded-xl">
      <FilterButton filter="All" />

      {FEEDBACK_CATEGORIES_FILTERS.map((filter) => (
        <FilterButton key={filter} filter={filter} />
      ))}
    </div>
  );
};
