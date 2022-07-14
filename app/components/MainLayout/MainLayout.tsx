import { useLoaderData } from "@remix-run/react";

import type { RootLoaderData } from "~/utils/types";

import { TopNavigation } from "../TopNavigation";

export const MainLayout: React.FC = ({ children }) => {
  const { user } = useLoaderData<RootLoaderData>();

  return (
    <div className="w-full md:w-[95%] min-h-screen max-w-[1110px] px-5 md:mx-auto flex flex-col">
      <TopNavigation user={user} />

      <div className="flex flex-1">{children}</div>
    </div>
  );
};
