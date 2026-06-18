import { useState } from "react";
import "./ProductGrid.css";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/products";
import viewProductMobIcon from "../../assets/icons/viewProductMob.png.png";

const headingMap = {
  ring: "RINGS",
  bracelet: "BRACELETS",
  necklace: "NECKLACES",
  bangle: "BANGLES",
};

const ProductGrid = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [gender, setGender] = useState("Gender");
  const [metal, setMetal] = useState("Metal");

  const pageTitle = category
    ? headingMap[category] || "JEWELLERY"
    : "ALL JEWELLERY";

  const categoryProducts = category
    ? products.filter((item) =>
        item.title.toLowerCase().includes(category.toLowerCase())
      )
    : products;

  const filteredProducts = categoryProducts.filter((item) => {
    const genderMatch = gender === "Gender" || item.gender === gender;
    const metalMatch = metal === "Metal" || item.metal === metal;

    return genderMatch && metalMatch;
  });

  const handleViewProduct = () => {
    navigate("/product-details");
  };

  return (
    <section className="products-page">
      <h1 className="products-title">
        {category ? (
          pageTitle
        ) : (
          <>
            ALL <span>JEWELLERY</span>
          </>
        )}
      </h1>

      <div className="products-filter-row">
        <div className="products-filters">
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>Gender</option>
            <option>Men</option>
            <option>Women</option>
          </select>

          <select value={metal} onChange={(e) => setMetal(e.target.value)}>
            <option>Metal</option>
            <option>Gold</option>
            <option>Silver</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img className="product-img" src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button className="view-product-btn" onClick={handleViewProduct}>
              <span className="view-product-text">View Product</span>

              <img
                className="view-product-mobile"
                src={viewProductMobIcon}
                alt="View Product"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;