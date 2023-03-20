import "./Sidebar.scss";
import avatar from '../../assets/avatar2.png'
import sidebar_bg from '../../assets/sidebar_bg_img.jpg'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <img
          src={sidebar_bg}
          alt=""
          className="sidebar__img"
        />
        <div className="sidebar__data">
          <img src={avatar} alt="" className="sidebar__avatar" />
          <div className="sidebar__heading">
            <h2 className="sidebar__name">Miras Maratov</h2>
            <span className="sidebar__title">front-end blog-portfolio</span>
          </div>
          <div className="sidebar__socials">
            <a href="#">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-line"></i>
            </a>
            <a href="#">
              <i className="ri-github-line"></i>
            </a>
          </div>
          <p className="sidebar__text">
            Frontend Developer. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aut velit in praesentium debitis temporibus
            adipisci optio, totam eos ratione blanditiis!
          </p>
          <div className="sidebar__actions">
            <a href="#" className="btn btn__secondary sidebar__btn">
              My works
            </a>
            <a href="#" className="btn btn__primary sidebar__btn">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
