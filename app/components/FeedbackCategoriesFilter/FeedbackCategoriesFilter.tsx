export const FEEDBACK_CATEGORIES_FILTERS = [
  "UI",
  "UX",
  "Enhancement",
  "Bug",
  "Feature",
];

const FilterButton = ({ filter }: { filter: string }) => {
  return (
    <div className="rounded-xl py-[6px] px-5 bg-bg-overlay">
      <span className="text-sm font-medium text-brand-blue-primary">
        {filter}
      </span>
    </div>
  );
};

export const FeedbackCategoriesFilter = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-2 gap-y-3 bg-white p-6 rounded-xl">
      <FilterButton filter="All" />

      {FEEDBACK_CATEGORIES_FILTERS.map((filter) => (
        <FilterButton key={filter} filter={filter} />
      ))}
    </div>
  );
};
