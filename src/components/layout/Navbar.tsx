import React from "react";
import { Link } from "react-router-dom";

const routes = [
  { name: "Home", path: "/" },
  { name: "Blogs", path: "/blogs" },
  { name: "Projects", path: "/projects" },
];
function Navbar() {
  return (
    <header className="fixed top-0 w-full shadow-lg bg-white text-black z-20">
      <nav>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="ml-10 space-x-4 items-baseline">
              <div className="hidden md:block">
                <div className="flex items-center">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {routes.map((r) => (
                      <Link key={r.name} to={r.path}>
                        <span
                          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          aria-current="page"
                        >
                          {r.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
