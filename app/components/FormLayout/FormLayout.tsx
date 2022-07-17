import type { FormCardProps } from "../FormCard";

import { FormCard } from "../FormCard";
import { GoBackButton } from "../GoBackButton/GoBackButton";

export const FormLayout: React.FC<FormCardProps> = ({
  children,
  ...formCardProps
}) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[540px] mx-auto">
        <div className="mb-20">
          <GoBackButton />
        </div>

        <FormCard {...formCardProps}>{children}</FormCard>
      </div>
    </div>
  );
};
