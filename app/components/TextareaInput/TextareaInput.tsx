import type { TextareaHTMLAttributes } from "react";

type TextareaInputProps = {
  label: string;
  error?: string;
  description?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaInput = ({
  label,
  error,
  description,
  ...inputProps
}: TextareaInputProps) => {
  return (
    <label>
      <div className="mb-4 flex flex-col">
        <span className="text-sm text-fg-primary font-bold mb-1">{label}</span>

        {description && (
          <span className="text-sm text-fg-secondary">{description}</span>
        )}
      </div>

      <div className="flex space-x-4">
        <textarea
          className={`w-full text-sm text-fg-primary bg-bg-overlay px-6 py-4 rounded-lg outline-none border ${
            error
              ? "border-red-500 focus:border-red-400"
              : "border-transparent focus:border-brand-blue-primary"
          } transition-colors duration-200`}
          {...inputProps}
        />
      </div>

      {error && <span className="text-xs text-red-500 mt-2">{error}</span>}
    </label>
  );
};
