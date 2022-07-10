export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="w-[90%] min-h-screen max-w-[1110px] mx-auto pt-12 lg:pt-[94px] flex">
      <div className="flex-1">{children}</div>
    </div>
  );
};
