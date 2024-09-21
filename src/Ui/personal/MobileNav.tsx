import { NavLink } from "react-router-dom";
import "./MobileNav.css";

const MobileNav = () => {
  return (
    <div className="mobile-navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "mobile-navbar-link mobile-active-link"
            : "mobile-navbar-link"
        }
      >
        Personal
      </NavLink>

      <NavLink
        to="/Business"
        className={({ isActive }) =>
          isActive
            ? "mobile-navbar-link mobile-active-link"
            : "mobile-navbar-link"
        }
      >
        Business
      </NavLink>
    </div>
  );
};

export default MobileNav;
