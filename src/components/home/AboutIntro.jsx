import "./AboutIntro.css";

import topImage from "../../assets/images/about/about-top.png";

import jewelleryIcon from "../../assets/images/about/jewellery.svg";
import weddingIcon from "../../assets/images/about/proposal-wedding.svg";
import giftingIcon from "../../assets/images/about/gifting.svg";

const aboutItems = [
  {
    icon: jewelleryIcon,
    title: "Jewellery",
    description:
      "From timeless classics to modern must-haves, each piece is priced transparently and fairly.",
  },
  {
    icon: weddingIcon,
    title: "Proposal & Wedding",
    description:
      "From proposal rings to wedding-day elegance, our designs are crafted to celebrate love, commitment, and every moment in between.",
  },
  {
    icon: giftingIcon,
    title: "Gifting",
    description:
      "We create pieces that mark memories, milestones, and moments of love.",
  },
];

const AboutIntro = () => {
  return (
    <section className="about-intro">
      <div className="about-top">
        <h2>
          We’re a passionate team crafting unique jewellery inspired by
          <span> family, delivering quality pieces just for you</span>
        </h2>

        <img src={topImage} alt="Jewellery" />
      </div>

      <div className="about-list">
        {aboutItems.map((item) => (
          <div className="about-row" key={item.title}>
            <div className="about-icon">
              <img src={item.icon} alt={item.title} />
            </div>

            <div className="about-title">{item.title}</div>

            <div className="about-description">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutIntro;