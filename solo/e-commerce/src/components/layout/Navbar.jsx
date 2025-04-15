//
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavIcons } from "../common/NavIcons";
import { NavLinks } from "./NavLinks";
export function Navbar({ auth }) {
  return (
    <nav className="flex justify-center border-b border-gray-300 py-9">
      <div className="w-4/5 flex items-center">
        <div className="cursor-pointer px-5 py-2">
          <span className="font-bold text-6xl ">Exclusive</span>
        </div>
        <NavLinks />
        <div className="flex items-center rounded-lg px-10 py-5 bg-gray-100 shadow-sm w-full max-w-md">
          <input
            type="text"
            placeholder="What are you looking for ?"
            className="outline-none bg-transparent flex-1 text-2xl pr-2"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2xl"
            className="text-gray-500"
          />
        </div>
        <NavIcons auth={auth} />
      </div>
    </nav>
  );
}
