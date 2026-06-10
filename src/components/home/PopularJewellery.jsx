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

  return (
    <section className="popular-jewellery">
      <div className="popular-header">
        <h2>POPULAR JEWELLERY FOR YOU</h2>

        <p>
          Discover our most-loved pieces — timeless designs adored for every
          occasion
        </p>
      </div>

      <button className="slider-btn slider-left">
        <img src={leftArrow} alt="Previous" />
      </button>

      <button className="slider-btn slider-right">
        <img src={rightArrow} alt="Next" />
      </button>

      <div className="popular-products">
        {products.map((item) => (
          <div className="popular-card" key={item.id}>
            <div className="popular-img-box">
              <img
                src={item.image}
                alt={item.name}
                className={item.className}
              />
            </div>

            <div className="popular-info">
              <span>{item.name}</span>
              <strong>{item.price}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrapper">
        <button
          className="view-all-btn"
          onClick={() => navigate("/products")}
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default PopularJewellery;