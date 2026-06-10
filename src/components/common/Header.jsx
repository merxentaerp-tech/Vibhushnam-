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

const navItems = [
  { id: 1, icon: allIcon, alt: "All", path: "/products" },
  { id: 2, icon: braceletIcon, alt: "Bracelets", path: "/products/bracelet" },
  { id: 3, icon: ringIcon, alt: "Rings", path: "/products/ring" },
  { id: 4, icon: necklessIcon, alt: "Neckless", path: "/products/necklace" },
  { id: 5, icon: banglesIcon, alt: "Bangles", path: "/products/bangle" },
];

const Header = () => {
  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img className="header-logo" src={logo} alt="Vibhushanam" />
      </Link>

      <nav className="header-nav">
        {navItems.map((item) => (
          <Link to={item.path} className="nav-item" key={item.id}>
            <img src={item.icon} alt={item.alt} />
          </Link>
        ))}
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