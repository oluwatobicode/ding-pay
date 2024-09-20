import { NavLink } from "react-router-dom";
import "./MobileNav.css";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <ul className="mobile-nav-items">
        <li className="mobile-nav-link">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "mobile-active-link" : "")}
          >
            <span>Personal</span>
          </NavLink>
        </li>

        <li className="mobile-nav-link">
          <NavLink
            to="/Business"
            className={({ isActive }) => (isActive ? "mobile-active-link" : "")}
          >
            <span>Business</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
