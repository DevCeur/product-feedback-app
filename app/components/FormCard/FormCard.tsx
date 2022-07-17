import type { IconType } from "react-icons/lib";

export type FormCardProps = {
  title: string;
  icon?: IconType;
  summary?: string;
  variant?: "default" | "centered";
};

export const FormCard: React.FC<FormCardProps> = ({
  title,
  summary,
  children,
  icon: Icon,
  variant = "default",
}) => {
  return (
    <div className="w-full h-min max-w-[540px] bg-white p-12 rounded-xl relative">
      {Icon && (
        <div className="absolute -top-[28px] w-14 h-14 flex items-center justify-center bg-project-gradient bg-[length:275px] bg-left-bottom text-white rounded-full">
          <Icon className="text-2xl" />
        </div>
      )}

      <div
        className={`${
          variant === "centered" ? "text-center" : "text-left"
        } mb-10`}
      >
        <h2
          className={`${
            variant === "centered" ? "text-center" : "text-left"
          } text-2xl text-fg-primary font-bold`}
        >
          {title}
        </h2>

        {summary && (
          <span className="block text-sm text-fg-secondary mt-2">
            {summary}
          </span>
        )}
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};
