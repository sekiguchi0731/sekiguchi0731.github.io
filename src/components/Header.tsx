import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Hinata SEKIGUCHI</h1>
      {/* ナビゲーションメニュー */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/club">Club</Link>
          </li>
          <li>
            <Link to="/major">Major</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/achievement">Achievement</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
