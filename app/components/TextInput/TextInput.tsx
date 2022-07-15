import type { InputHTMLAttributes } from "react";

type TextInputProps = {
  label: string;
  error?: string;
  description?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  label,
  error,
  type,
  description,
  ...inputProps
}: TextInputProps) => {
  return (
    <label>
      <div className="mb-4 flex flex-col">
        <span className="text-sm text-fg-primary font-bold">{label}</span>

        {description && (
          <span className="text-sm text-fg-secondary">{description}</span>
        )}
      </div>

      <input
        type={type || "text"}
        className={`w-full text-fg-primary bg-bg-overlay px-6 py-4 rounded-lg outline-none border ${
          error
            ? "border-red-500 focus:border-red-400"
            : "border-transparent focus:border-brand-blue-primary"
        } transition-colors duration-200`}
        {...inputProps}
      />

      {error && <span className="text-xs text-red-500 mt-2">{error}</span>}
    </label>
  );
};
