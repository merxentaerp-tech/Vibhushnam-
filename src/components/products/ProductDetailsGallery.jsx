import "./ProductDetailsGallery.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import detail1 from "../../assets/images/products/details/ring-detail-1.png.png";
import detail2 from "../../assets/images/products/details/ring-detail-2.png.png";
import detail3 from "../../assets/images/products/details/ring-detail-3.png.png";
import detail4 from "../../assets/images/products/details/ring-detail-4.png.png";

import findStoreIcon from "../../assets/icons/FindStoreicon.png.png";
import checkIcon from "../../assets/icons/Check-Availabilityicon.png.png";
import arrowMobile from "../../assets/icons/arrowMobile.png.png";
import vectorIcon from "../../assets/icons/Vector.png";

const ProductDetailsGallery = () => {
  const navigate = useNavigate();
  const [showAvailability, setShowAvailability] = useState(false);

  return (
    <section className="product-details-section">
      <h1 className="product-details-title">
        <img
          src={arrowMobile}
          alt="Back"
          className="mobile-back-arrow"
          onClick={() => navigate(-1)}
        />
        Bloom Bud Gold Ring
      </h1>

      <div className="product-details-gallery">
        <div className="gallery-img-box left-img">
          <img src={detail1} alt="Bloom Bud Gold Ring" />
        </div>

        <div className="gallery-img-box right-img">
          <img src={detail2} alt="Bloom Bud Gold Ring" />
        </div>

        <div className="gallery-img-box left-img">
          <img src={detail3} alt="Bloom Bud Gold Ring" />
        </div>

        <div className="gallery-img-box right-img">
          <img src={detail4} alt="Bloom Bud Gold Ring" />
        </div>
      </div>

      <div className={`store-check-box ${showAvailability ? "active" : ""}`}>
        <div className="store-left">
          <img src={findStoreIcon} alt="Find Store" />
          <span>Find Store</span>
        </div>

        <div
          className="store-right"
          onClick={() => setShowAvailability((prev) => !prev)}
        >
          <span>Check Availability</span>
          <img src={vectorIcon} alt="Check Availability" />
        </div>

        {showAvailability && (
          <div className="availability-detail">
            <div className="availability-location">
              <img src={checkIcon} alt="" />
              <p>
                Hudda Metro Station Sector 29, Gurgaon,
                <br />
                120007
              </p>
            </div>

            <div className="availability-contact">
              <span>Store Contact No.</span>
              <p>+91 9999-888888</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailsGallery;