import { Link, useLocation } from "@remix-run/react";

import type { LinkProps } from "@remix-run/react";

export const Navlink: React.FC<LinkProps> = ({
  to,
  children,
  ...linkProps
}) => {
  const location = useLocation();

  const isInRoute = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        isInRoute ? "text-brand-blue-primary" : "text-fg-secondary"
      } hover:text-fg-primary transition-colors duration-200`}
      {...linkProps}
    >
      {children}
    </Link>
  );
};
