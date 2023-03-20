import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/" className="nav__link active">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Portfolio
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Blog
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              About
            </Link>
          </li>
        </ul>
        <div className="nav__right">
          {/* <Link to="#" className="nav__profile"><i className="ri-user-3-line"></i></Link> */}
          <form className="nav__search">
            <input type="search" placeholder="Search..." />
            <small>ENTER</small>
          </form>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
