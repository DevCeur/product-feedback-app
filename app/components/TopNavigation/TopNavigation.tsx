import { Link } from "@remix-run/react";

import type { User } from "@prisma/client";

import { ROUTE } from "~/utils/enum";

import { Navlink } from "../Navlink";

type TopNavigationProps = {
  user: User;
};

export const TopNavigation = ({ user }: TopNavigationProps) => {
  return (
    <nav className="w-full h-16 py-4 px-6 rounded-b-xl bg-white mb-10 flex justify-between items-center">
      <div className="flex items-center">
        <Link
          to="/"
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
          <Link
            to={ROUTE.PROFILE}
            className="w-12 h-12 overflow-hidden rounded-full"
          >
            <img
              src={user.avatar}
              alt={`${user.username} avatar`}
              className="inline-block w-10"
            />
          </Link>
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
