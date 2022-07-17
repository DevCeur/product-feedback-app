import { useNavigate } from "@remix-run/react";
import { BiChevronLeft } from "react-icons/bi";

import type { FormCardProps } from "../FormCard";

import { FormCard } from "../FormCard";

export const FormLayout: React.FC<FormCardProps> = ({
  children,
  ...formCardProps
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full max-w-[540px] mx-auto">
        <div className="mb-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2"
          >
            <BiChevronLeft className="text-lg text-brand-blue-primary" />
            <span className="text-sm font-bold text-fg-secondary">Go Back</span>
          </button>
        </div>

        <FormCard {...formCardProps}>{children}</FormCard>
      </div>
    </div>
  );
};
