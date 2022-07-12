import { TopNavigation } from "../TopNavigation";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="w-full md:w-[95%] min-h-screen max-w-[1110px] px-5 md:mx-auto flex flex-col">
      <TopNavigation />

      <div className="flex flex-1">{children}</div>
    </div>
  );
};
