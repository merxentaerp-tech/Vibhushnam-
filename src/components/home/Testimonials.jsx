import React, { useEffect, useState } from "react";
import "./Testimonials.css";

import mobileBox from "../../assets/images/testimonials/Mobile-View Box.png.png";

import customer1 from "../../assets/images/testimonials/customer1.png.png";
import customer2 from "../../assets/images/testimonials/customer2.png.png";
import customer3 from "../../assets/images/testimonials/customer3.png.png";
import customer4 from "../../assets/images/testimonials/customer4.png.png";

const testimonials = [
  {
    id: 1,
    box: mobileBox,
    image: customer1,
    name: "Aarohi Mehra",
    text: "Elegant craftsmanship and premium quality. Every piece feels luxurious and beautifully designed.",
  },
  {
    id: 2,
    box: mobileBox,
    image: customer2,
    name: "Kiara Sharma",
    text: "Timeless jewellery with stunning detailing. Perfect for every special occasion and a great shopping experience.",
  },
  {
    id: 3,
    box: mobileBox,
    image: customer3,
    name: "Meera Kapoor",
    text: "Beautiful finish, excellent quality and a truly premium experience.",
  },
  {
    id: 4,
    box: mobileBox,
    image: customer4,
    name: "Ananya Roy",
    text: "Amazing packaging and elegant design. A perfect gift for loved ones and a great shopping experience.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const activeItem = testimonials[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-title">
        <span>TESTIMONIALS</span>
        <h2>OUR LOYAL CUSTOMERS</h2>
      </div>

      <div className="testimonials-slider desktop-testimonials">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <img className="card-box" src={item.box} alt="" />

            <img className="customer-img" src={item.image} alt={item.name} />

            <div className="review-content">
              <h4>{item.name}</h4>
              <p>"{item.text}"</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mobile-testimonials">
        <div className="mobile-testimonial-card">
          <img className="mobile-card-box" src={mobileBox} alt="" />

          <img
            className="mobile-customer-img"
            src={activeItem.image}
            alt={activeItem.name}
          />

          <div className="mobile-review-content">
            <h4>{activeItem.name}</h4>
            <p>"{activeItem.text}"</p>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;