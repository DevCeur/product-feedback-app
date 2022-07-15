type FormCardProps = {
  title: string;
  summary?: string;
  variant?: "default" | "centered";
};

export const FormCard: React.FC<FormCardProps> = ({
  title,
  summary,
  variant,
  children,
}) => {
  return (
    <div className="w-full h-min max-w-[540px] bg-white p-12 rounded-xl">
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
