import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import nav1Icon from "../../assets/icons/nav1.png.png";
import nav2Icon from "../../assets/icons/nav2.png.png";
import nav3Icon from "../../assets/icons/nav3.png.png";
import nav4Icon from "../../assets/icons/nav4.png.png";
import nav5Icon from "../../assets/icons/nav5.png.png";

import searchIcon from "../../assets/icons/MagnifyingGlass.svg";
import micIcon from "../../assets/icons/Microphone.svg";
import hamburgerIcon from "../../assets/icons/hamburgerIcon.png.png";

const navItems = [
  { id: 1, icon: nav1Icon, text: "All", path: "/products" },
  { id: 2, icon: nav2Icon, text: "Bracelets", path: "/products/bracelet" },
  { id: 3, icon: nav3Icon, text: "Rings", path: "/products/ring" },
  { id: 4, icon: nav4Icon, text: "Neckless", path: "/products/necklace" },
  { id: 5, icon: nav5Icon, text: "Bangles", path: "/products/bangle" },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <header className="site-header">
      <div className="header-top">
        <Link to="/" className="logo-link">
          <img className="header-logo" src={logo} alt="Vibhushanam" />
        </Link>

        <button
          className="hamburger-btn"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={hamburgerIcon} alt="Menu" />
        </button>
      </div>

      <nav className={`header-nav ${openMenu ? "show-menu" : ""}`}>
        <button className="close-drawer" onClick={() => setOpenMenu(false)}>
          ×
        </button>

        {navItems.map((item) => (
          <Link
            to={item.path}
            className={`nav-item
              ${item.id === 2 ? "bracelets-item" : ""}
              ${item.id === 5 ? "bangles-item" : ""}`}
            key={item.id}
            onClick={() => setOpenMenu(false)}
          >
            <img
              src={item.icon}
              alt={item.text}
              className={`nav-icon nav-icon-${item.id}`}
            />
            <span>{item.text}</span>
          </Link>
        ))}

        <div className="drawer-bottom-logo">
          <img src={logo} alt="Vibhushanam" />
        </div>
      </nav>

      <div className="header-search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search for gold neckless" />
        <img src={micIcon} alt="" />
      </div>
    </header>
  );
};

export default Header;