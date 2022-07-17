import type { InputHTMLAttributes } from "react";

import { Button } from "../Button";

type TextInputProps = {
  label: string;
  error?: string;
  description?: string;
  action?: string;
  onClickAction?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  label,
  error,
  type,
  description,
  action,
  onClickAction: handleClick,
  ...inputProps
}: TextInputProps) => {
  return (
    <label>
      <div className="mb-4 flex flex-col">
        <span className="text-sm text-fg-primary font-bold mb-1">{label}</span>

        {description && (
          <span className="text-sm text-fg-secondary">{description}</span>
        )}
      </div>

      <div className="flex space-x-4">
        <input
          type={type || "text"}
          className={`w-full text-fg-primary bg-bg-overlay px-6 py-4 rounded-lg outline-none border ${
            error
              ? "border-red-500 focus:border-red-400"
              : "border-transparent focus:border-brand-blue-primary"
          } transition-colors duration-200`}
          {...inputProps}
        />

        {action && (
          <Button colorScheme="gray" onClick={handleClick}>
            {action}
          </Button>
        )}
      </div>

      {error && <span className="text-xs text-red-500 mt-2">{error}</span>}
    </label>
  );
};
