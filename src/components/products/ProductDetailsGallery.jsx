import "./ProductDetailsGallery.css";

import detail1 from "../../assets/images/products/details/ring-detail-1.png.png";
import detail2 from "../../assets/images/products/details/ring-detail-2.png.png";
import detail3 from "../../assets/images/products/details/ring-detail-3.png.png";
import detail4 from "../../assets/images/products/details/ring-detail-4.png.png";

import findStoreIcon from "../../assets/icons/FindStoreicon.png.png";
import checkIcon from "../../assets/icons/Check-Availabilityicon.png.png";

const ProductDetailsGallery = () => {
  return (
    <section className="product-details-section">
      <h1 className="product-details-title">Bloom Bud Gold Ring</h1>

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

      <div className="store-check-box">
        <div className="store-left">
          <img src={findStoreIcon} alt="Find Store" />
          <span>Find Store</span>
        </div>

        <div className="store-right">
          <span>Check Availability</span>
          <img src={checkIcon} alt="Check Availability" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsGallery;