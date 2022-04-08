import { NavLink } from "react-router-dom";

const routes = [
  { name: "Day 1", path: "/" },
  { name: "Day 2", path: "/day2" },
  { name: "Day 3", path: "/day3" },
  { name: "Day 4", path: "/day4" },
  { name: "Day 5", path: "/day5" },
  { name: "Redux", path: "/redux" },
  { name: "About", path: "/about" },
  { name: "Profile", path: "/profile" },
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
                      <NavLink key={r.name} to={r.path}>
                        <span
                          className="bg-gray-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                          aria-current="page"
                        >
                          {r.name}
                        </span>
                      </NavLink>
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
