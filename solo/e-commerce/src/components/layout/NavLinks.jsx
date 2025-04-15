import { NavLink } from "react-router-dom";
import { useState } from "react";

export function NavLinks() {
  const [active, setActive] = useState("Home");
  const linkClassName =
    "text-4xl px-2 py-5 border-b border-transparent transition-all duration-200 ease-in hover:border-gray-700";
  const activeLinkClassName = "text-4xl px-2 py-5 border-b border-gray-700";

  function handleActive(e) {
    setActive(e);
  }
  return (
    <div className="flex justify-center grow gap-15">
      <NavLink to="/">
        <span
          onClick={() => handleActive("Home")}
          className={active === "Home" ? activeLinkClassName : linkClassName}
        >
          Home
        </span>
      </NavLink>
      <NavLink to="/about">
        <span
          onClick={() => handleActive("About")}
          className={active === "About" ? activeLinkClassName : linkClassName}
        >
          About
        </span>
      </NavLink>
      <NavLink to="/contact">
        <span
          onClick={() => handleActive("Contact")}
          className={active === "Contact" ? activeLinkClassName : linkClassName}
        >
          Contact
        </span>
      </NavLink>
      <NavLink to="/signup">
        <span
          onClick={() => handleActive("SignUp")}
          className={active === "SignUp" ? activeLinkClassName : linkClassName}
        >
          Sign Up
        </span>
      </NavLink>
    </div>
  );
}
