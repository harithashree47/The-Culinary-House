import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const routeNames = {
  "/": "Home",
  "/about": "About",
  "/menu": "Food",
  "/contact": "Contact",
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="bg-[#fff6ec] py-4">
      <div className="max-w-7xl mx-auto px-6">
        <ol className="flex items-center text-sm text-gray-600">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="hover:text-[var(--primary)] transition font-medium"
            >
              Home
            </Link>
          </li>

          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />

                {isLast ? (
                  <span className="font-semibold text-gray-900">
                    {routeNames[to] || value}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-[var(--primary)] transition font-medium"
                  >
                    {routeNames[to] || value}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
