import { FC } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const Header: FC = () => {
  return (
    <header>
      <div className="link-container">
        <Link to={"/"}>
          <span className="home-link">Домашняя страница брат</span>
        </Link>
      </div>
      <div className="right-container">
        <div className="username-container">
          <span className="username">USER</span>
        </div>
        <div className="menu-container">
          *выпадающее меню*
        </div>
      </div>
    </header>
  );
};
