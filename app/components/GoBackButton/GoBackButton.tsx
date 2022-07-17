import { useNavigate } from "@remix-run/react";
import { BiChevronLeft } from "react-icons/bi";

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center space-x-2"
    >
      <BiChevronLeft className="text-lg text-brand-blue-primary" />

      <span className="text-sm font-bold text-fg-secondary hover:underline">
        Go Back
      </span>
    </button>
  );
};
