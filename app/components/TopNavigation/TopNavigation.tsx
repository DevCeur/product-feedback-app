import { Link } from "@remix-run/react";

import type { User } from "@prisma/client";

import { ROUTE } from "~/utils/enum";

import { Navlink } from "../Navlink";
import { ProfileMenu } from "../ProfileMenu";

type TopNavigationProps = {
  user: User;
};

export const TopNavigation = ({ user }: TopNavigationProps) => {
  return (
    <nav className="w-full h-16 py-4 px-6 rounded-b-xl bg-white mb-10 flex justify-between items-center">
      <div className="flex items-center">
        <Link
          to={user ? ROUTE.DASHBOARD : "/sign-in"}
          className="text-brand-blue-primary hover:text-brand-blue-primary-light text-lg font-semibold transition-colors duration-200"
        >
          <span className="hidden md:inline-block">ProductFeedback</span>
          <span className="md:hidden">PF</span>
        </Link>

        {user && (
          <div className="ml-6 pl-6 flex items-center space-x-6 border-l border-slate-200">
            <Navlink to={ROUTE.DASHBOARD}>Dashboard</Navlink>
            <Navlink to={ROUTE.CREATE_PROJECT}>Create Project</Navlink>
          </div>
        )}
      </div>

      {user ? (
        <div className="flex justify-center items-center">
          <ProfileMenu user={user} />
        </div>
      ) : (
        <div className="flex items-center space-x-6">
          <Navlink to={ROUTE.SIGN_IN}>Sign In</Navlink>
          <Navlink to={ROUTE.SIGN_UP}>Create Acocunt</Navlink>
        </div>
      )}
    </nav>
  );
};
