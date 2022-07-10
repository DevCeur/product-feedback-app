import { Link } from "@remix-run/react";
import { BiChevronUp } from "react-icons/bi";
import { FaComment } from "react-icons/fa";

export const FeedbackCategory = ({ category }: { category: string }) => {
  return (
    <div className="inline-block py-2 px-4 lg:px-5 bg-bg-overlay transition-colors duration-200 rounded-xl">
      <span className="text-sm font-medium text-brand-blue-primary">
        {category}
      </span>
    </div>
  );
};

export const FeedbackCard = () => {
  return (
    <div className="w-full bg-white p-[28px] flex items-start justify-between space-x-10 rounded-xl">
      <button className="px-3 py-2 flex flex-col items-center justify-center bg-bg-overlay hover:bg-bg-overlay-light rounded-xl transition-all duration-200">
        <BiChevronUp className="text-xl text-brand-blue-primary" />
        <span className="text-sm font-bold text-fg-primary">112</span>
      </button>

      <Link
        to="/feedback-detail"
        className="flex-1 flex items-center justify-between"
      >
        <div>
          <p className="text-lg font-bold text-fg-primary mb-1">
            Add Tags For Solutions
          </p>
          <p className="text-fg-secondary mb-3">
            Easier to search for solutions based on a specific stack.
          </p>
          <FeedbackCategory category="Enhancement" />
        </div>

        <div className="flex items-center space-x-3">
          <FaComment className="text-xl text-bg-overlay-light" />

          <span className="font-bold text-fg-primary">2</span>
        </div>
      </Link>
    </div>
  );
};
