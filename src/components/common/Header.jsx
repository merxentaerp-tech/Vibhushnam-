import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import allIcon from "../../assets/icons/All.svg";
import banglesIcon from "../../assets/icons/Bangles.svg";
import braceletIcon from "../../assets/icons/Braclet.svg";
import necklessIcon from "../../assets/icons/Neckless.svg";
import ringIcon from "../../assets/icons/Ring.svg";

import searchIcon from "../../assets/icons/MagnifyingGlass.svg";
import micIcon from "../../assets/icons/Microphone.svg";
import hamburgerIcon from "../../assets/icons/hamburgerIcon.png.png";

const navItems = [
  { id: 1, icon: allIcon, alt: "All", path: "/products" },
  { id: 2, icon: braceletIcon, alt: "Bracelets", path: "/products/bracelet" },
  { id: 3, icon: ringIcon, alt: "Rings", path: "/products/ring" },
  { id: 4, icon: necklessIcon, alt: "Neckless", path: "/products/necklace" },
  { id: 5, icon: banglesIcon, alt: "Bangles", path: "/products/bangle" },
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
            className="nav-item"
            key={item.id}
            onClick={() => setOpenMenu(false)}
          >
            <img src={item.icon} alt={item.alt} />
            <span>{item.alt}</span>
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