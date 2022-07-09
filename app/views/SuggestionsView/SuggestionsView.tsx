export const SuggestionsView = () => {
  return (
    <div className="w-full h-full grid grid-cols-4 grid-flow-col gap-7">
      <div className="w-full col-span-1 flex flex-col space-y-7">
        <div className="h-[180px] bg-white" />

        <div className="h-[180px] bg-white" />

        <div className="h-[180px] bg-white" />
      </div>

      <div className="w-full h-full col-span-3 overflow-hidden flex flex-col">
        <div className="w-full bg-bg-overlay-dark text-white p-6 mb-7 rounded-xl">
          <span>Suggestions</span>
        </div>

        <div className="h-full relative overflow-scroll pb-[94px]">
          <div className="w-full h-[2000px] bg-white absolute top-0 right-0" />
        </div>
      </div>
    </div>
  );
};
