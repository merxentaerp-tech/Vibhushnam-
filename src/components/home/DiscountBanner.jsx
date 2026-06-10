import React, { useEffect, useRef } from "react";
import "./DiscountBanner.css";

import leftImg from "../../assets/images/discount/discount-left.png";
import topImg from "../../assets/images/discount/discount-top.png";
import cardImg from "../../assets/images/discount/discount-card.png";
import bottomImg from "../../assets/images/discount/discount-bottom.png";

const DiscountBanner = () => {
  const wrapRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const resize = () => {
      const wrap = wrapRef.current;
      const banner = bannerRef.current;
      if (!wrap || !banner) return;

      const scale = wrap.offsetWidth / 1728;
      banner.style.transform = `scale(${scale})`;
      wrap.style.height = `${701 * scale}px`;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="discount-wrap" ref={wrapRef}>
      <div className="discount-banner" ref={bannerRef}>
        <div className="discount-left">
          <img src={leftImg} alt="" />
        </div>

        <div className="discount-content">
          <h2>20% DISCOUNT</h2>
          <p>
            On your first visit at our <br />
            store
          </p>
          <button>Explore Products</button>
        </div>

        <div className="discount-right">
          <img className="top-img" src={topImg} alt="" />
          <img className="card-img" src={cardImg} alt="" />
          <img className="bottom-img" src={bottomImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;