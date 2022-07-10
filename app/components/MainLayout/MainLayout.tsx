export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="w-full md:w-[90%] min-h-screen max-w-[1110px] px-5 md:mx-auto pt-12 lg:pt-[94px] flex">
      <div className="flex-1">{children}</div>
    </div>
  );
};
