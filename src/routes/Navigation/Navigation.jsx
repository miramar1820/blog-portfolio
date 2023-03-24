import { NavLink, Outlet } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/portfolio" className="nav__link">
              Portfolio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/blog" className="nav__link">
              Blog
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__link">
              About
            </NavLink>
          </li>
        </ul>
        <div className="nav__right">
          {/* <NavLink to="#" className="nav__profile"><i className="ri-user-3-line"></i></NavLink> */}
          <form className="nav__search">
            <input type="search" placeholder="Search..." />
            <small>ENTER</small>
          </form>
        </div>
      </nav>
      <section className="content">
        <Outlet />
      </section>
    </>
  );
};

export default Navigation;
