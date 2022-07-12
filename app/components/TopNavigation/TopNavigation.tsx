import { Link } from "@remix-run/react";

import { Navlink } from "../Navlink";

export const TopNavigation = () => {
  return (
    <nav className="p-6 rounded-b-xl bg-white mb-10 flex justify-between items-center">
      <div>
        <Link
          to="/"
          className="text-brand-blue-primary hover:text-brand-blue-primary-light text-lg font-semibold transition-colors duration-200"
        >
          <span className="hidden md:inline-block">ProductFeedback</span>
          <span className="">PF</span>
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Navlink to="/sign-in">Sign In</Navlink>
        <Navlink to="/sign-up">Create Acocunt</Navlink>
      </div>
    </nav>
  );
};
