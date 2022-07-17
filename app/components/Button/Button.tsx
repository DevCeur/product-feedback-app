import type { ButtonHTMLAttributes } from "react";

import type { IconType } from "react-icons/lib";

type ButtonProps = {
  colorScheme?: "purple" | "blue" | "gray" | "red";
  icon?: IconType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const COLORS_BY_COLOR_SCHEME = {
  purple: {
    background: "bg-brand-purple",
    hovered: "hover:bg-brand-purple-light",
  },
  blue: {
    background: "bg-brand-blue-primary",
    hovered: "hover:bg-brand-blue-primary-light",
  },
  gray: {
    background: "bg-fg-primary",
    hovered: "hover:bg-brand-gray-primary-light",
  },
  red: { background: "bg-brand-red", hovered: "hover:bg-brand-red-light" },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme,
  icon: Icon,
  ...buttonProps
}) => {
  return (
    <button
      className={`text-sm text-white font-medium py-3 px-5 flex items-center ${
        COLORS_BY_COLOR_SCHEME[colorScheme || "purple"].background
      } ${
        COLORS_BY_COLOR_SCHEME[colorScheme || "purple"].hovered
      } transition-colors duration-200 rounded-xl`}
      {...buttonProps}
    >
      {Icon && (
        <span className="inline-block">
          <Icon className="text-lg mr-2" />
        </span>
      )}

      <span className="w-full inline-block text-center">{children}</span>
    </button>
  );
};
