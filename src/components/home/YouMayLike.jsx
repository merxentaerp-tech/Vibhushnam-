import React from "react";
import "./YouMayLike.css";

import like1 from "../../assets/images/products/like1.png";
import like2 from "../../assets/images/products/like2.png";
import like3 from "../../assets/images/products/like3.png";
import like4 from "../../assets/images/products/like4.png";
import like5 from "../../assets/images/products/like5.png";
import like6 from "../../assets/images/products/like6.png";

const products = [
  {
    img: like1,
    category: "Chain",
    title: "24 Caratte Men’s Chain 50 cm, SC400",
  },
  {
    img: like2,
    category: "Dimond Set",
    title: "Stainless Steel Men’s Chain 50 cm, SC400",
  },
  {
    img: like3,
    category: "Ring",
    title: "Modern Stylish Women’s Gold Ring",
  },
  {
    img: like4,
    category: "Chain",
    title: "Stainless Steel Men’s Chain 50 cm, SC400",
  },
  {
    img: like5,
    category: "Dimond Set",
    title: "Stainless Steel Men’s Chain 50 cm, SC400",
  },
  {
    img: like6,
    category: "Pendant",
    title: "Stainless Steel Men’s Chain 50 cm, SC400",
  },
];

const YouMayLike = () => {
  return (
    <section className="you-may-like-section">
      <h2 className="you-may-like-heading">You Might Also Like</h2>

      <div className="you-may-like-grid">
        {products.map((product, index) => (
          <div className="you-may-like-card" key={index}>
            <img src={product.img} alt={product.title} />

            <p className="product-category">{product.category}</p>
            <p className="product-name">{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouMayLike;