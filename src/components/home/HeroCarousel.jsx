import { useEffect, useState } from "react";
import { heroSlides } from "../../data/heroSlides";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);

  const slidesWithClone = [...heroSlides, heroSlides[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      setTransitionOn(true);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeIndex === heroSlides.length) {
      const resetTimer = setTimeout(() => {
        setTransitionOn(false);
        setActiveIndex(0);
      }, 1000);

      return () => clearTimeout(resetTimer);
    }
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setTransitionOn(true);
    setActiveIndex(index);
  };

  return (
    <section className="hero-carousel">
      <div
        className={`hero-track ${transitionOn ? "with-transition" : ""}`}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {slidesWithClone.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img
              className="hero-image"
              src={slide.image}
              alt={`Hero ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index ||
              (activeIndex === heroSlides.length && index === 0)
                ? "active"
                : ""
            }
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;