import React from "react";
import { Link } from "react-router-dom";
import "./CategoryGrid.css";

import bracelets from "../../assets/images/categories/bracelets.png";
import rings from "../../assets/images/categories/rings.png";
import earrings from "../../assets/images/categories/earrings.png";
import necklace from "../../assets/images/categories/necklace.png";
import bangles from "../../assets/images/categories/bangles.png";
import others from "../../assets/images/categories/others.png";

import braceletsIcon from "../../assets/images/categories/braceletsicon.png";
import ringsIcon from "../../assets/images/categories/ringsicon.png";
import earringsIcon from "../../assets/images/categories/earringsicon.png";
import necklaceIcon from "../../assets/images/categories/necklaceicon.png";
import banglesIcon from "../../assets/images/categories/banglesicon.png";
import othersIcon from "../../assets/images/categories/othersIcon.png";

import ArrowUpRight from "../../assets/images/categories/ArrowUpRight.png";

const categories = [
  {
    title: "Bracelets",
    image: bracelets,
    icon: braceletsIcon,
    path: "/products/bracelet",
  },
  {
    title: "Rings",
    image: rings,
    icon: ringsIcon,
    path: "/products/ring",
  },
  {
    title: "Earrings",
    image: earrings,
    icon: earringsIcon,
    path: "/products/earring",
  },
  {
    title: "Neckless",
    image: necklace,
    icon: necklaceIcon,
    path: "/products/necklace",
  },
  {
    title: "Bangles",
    image: bangles,
    icon: banglesIcon,
    path: "/products/bangle",
  },
  {
    title: "Others",
    image: others,
    icon: othersIcon,
    path: "/products/others",
  },
];

const CategoryGrid = () => {
  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-heading">
          <h2>Explore by Category</h2>

          <p>
            Discover our most-loved pieces — timeless designs adored for every
            occasion
          </p>
        </div>

        <div className="category-grid">
          {categories.map((item, index) => (
            <Link to={item.path} className="category-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="category-overlay"></div>

              <div className="category-content">
                <span className="category-title">{item.title}</span>

                <img src={ArrowUpRight} alt="" className="category-arrow" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;