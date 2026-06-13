import { useState } from "react";
import "./PopularJewellery.css";
import { useNavigate } from "react-router-dom";

import braceletImg from "../../assets/images/products/bracelet.svg";
import ringImg from "../../assets/images/products/ring.svg";
import pendantImg from "../../assets/images/products/pendant.svg";

import leftArrow from "../../assets/icons/right-arrow.svg.svg";
import rightArrow from "../../assets/icons/left-arrow.svg.svg";

const products = [
  {
    id: 1,
    name: "Premium Bracelet",
    price: "$19.59",
    image: braceletImg,
    className: "bracelet-img",
  },
  {
    id: 2,
    name: "Eternal Band Ring",
    price: "$12.00",
    image: ringImg,
    className: "ring-img",
  },
  {
    id: 3,
    name: "Smart Pendant",
    price: "$24.00",
    image: pendantImg,
    className: "pendant-img",
  },
];

const PopularJewellery = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = products[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="popular-jewellery">
      <div className="popular-header">
        <h2>POPULAR JEWELLERY FOR YOU</h2>

        <p>
          Discover our most-loved pieces — timeless designs adored for every
          occasion
        </p>
      </div>

      <div className="popular-slider">
        <button
          className="slider-btn slider-left"
          onClick={handlePrev}
          aria-label="Previous product"
        >
          <img src={leftArrow} alt="Previous" />
        </button>

        <div className="popular-card">
          <div className="popular-img-box">
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              className={activeProduct.className}
            />
          </div>

          <div className="popular-info">
            <span>{activeProduct.name}</span>
            <strong>{activeProduct.price}</strong>
          </div>
        </div>

        <button
          className="slider-btn slider-right"
          onClick={handleNext}
          aria-label="Next product"
        >
          <img src={rightArrow} alt="Next" />
        </button>
      </div>

      <div className="view-all-wrapper">
        <button className="view-all-btn" onClick={() => navigate("/products")}>
          View All
        </button>
      </div>
    </section>
  );
};

export default PopularJewellery;