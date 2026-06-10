import product1 from "../assets/images/products/product1.png.png";
import product2 from "../assets/images/products/product2.png.png";
import product3 from "../assets/images/products/product3.png.png";
import product4 from "../assets/images/products/product4.png.png";
import product5 from "../assets/images/products/product5.png.png";
import product6 from "../assets/images/products/product6.png.png";
import product7 from "../assets/images/products/product7.png.png";
import product8 from "../assets/images/products/product8.png.png";
import product9 from "../assets/images/products/product9.png.png";

const images = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
];

const productsData = [
  "Bloom Bud Gold Ring",
  "Dainty Gold Bracelet",
  "Pearl Drop Necklace",
  "Minimal Gold Bangle",
  "Square Hoop Earrings",
  "Layered Chain Bracelet",
  "Royal Gold Jewellery Set",
  "Floral Drop Earrings",
  "Classic Gold Band Ring",
  "Star Charm Earrings",
  "Crystal Hoop Earrings",
  "Sunburst Gold Earrings",
  "Antique Gold Ring",
  "Elegant Stone Bracelet",
  "Round Pendant Necklace",
  "Beaded Gold Bracelet",
  "Diamond Cut Earrings",
  "Dual Chain Bracelet",
  "Wedding Gold Set",
  "Ruby Gold Earrings",
  "Luxury Gold Ring",
];

export const products = productsData.map((title, index) => ({
  id: index + 1,
  image: images[index % images.length],
  title,
  desc: "Elegant blooming gold jewellery with delicate floral charm.",
}));