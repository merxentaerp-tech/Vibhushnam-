import React from "react";
import "./Testimonials.css";

import box1 from "../../assets/images/testimonials/Box.png.png";
import box2 from "../../assets/images/testimonials/Box2.png.png";
import box3 from "../../assets/images/testimonials/Box3.png.png";
import box4 from "../../assets/images/testimonials/Box4.png.png";

import customer1 from "../../assets/images/testimonials/customer1.png.png";
import customer2 from "../../assets/images/testimonials/customer2.png.png";
import customer3 from "../../assets/images/testimonials/customer3.png.png";
import customer4 from "../../assets/images/testimonials/customer4.png.png";

const testimonials = [
  {
    id: 1,
    box: box1,
    image: customer1,
    name: "Aarohi Mehra",
    text: "Elegant craftsmanship and premium quality. Every piece feels luxurious and beautifully designed.",
    className: "card-one",
  },
  {
    id: 2,
    box: box2,
    image: customer2,
    name: "Kiara Sharma",
    text: "Timeless jewellery with stunning detailing. Perfect for every special occasion and a great shopping experience.",
    className: "card-two",
  },
  {
    id: 3,
    box: box3,
    image: customer3,
    name: "Meera Kapoor",
    text: "Beautiful finish, excellent quality and a truly premium experience.",
    className: "card-three",
  },
  {
    id: 4,
    box: box4,
    image: customer4,
    name: "Ananya Roy",
    text: "Amazing packaging and elegant design. A perfect gift for loved ones and a great shopping experience.",
    className: "card-four",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-title">
        <span>TESTIMONIALS</span>
        <h2>OUR LOYAL CUSTOMERS</h2>
      </div>

      <div className="testimonials-slider">
        {testimonials.map((item) => (
          <div className={`testimonial-card ${item.className}`} key={item.id}>
            <img className="card-box" src={item.box} alt="" />

            <img className="customer-img" src={item.image} alt={item.name} />

            <div className="review-content">
              <h4>{item.name}</h4>
              <p>"{item.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;