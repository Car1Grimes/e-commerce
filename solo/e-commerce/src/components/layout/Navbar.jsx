//
import { NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <nav className="flex justify-center py-6">
      <div className="w-4/5 flex items-center">
        <div className="cursor-pointer px-5 py-2">
          <span className="font-bold text-6xl ">Exclusive</span>
        </div>
        <div className="flex justify-center grow">
          <NavLink to="/">
            <span className="text-3xl p-4">Home</span>
          </NavLink>
          <NavLink to="/about">
            <span className="text-3xl p-4">About</span>
          </NavLink>
          <NavLink to="/contact">
            <span className="text-3xl p-4">Contact</span>
          </NavLink>
          <NavLink to="/signup">
            <span className="text-3xl p-4">Sign Up</span>
          </NavLink>
        </div>
        <div>
          <p className="text-3xl">Search form</p>
        </div>
      </div>
    </nav>
  );
}
