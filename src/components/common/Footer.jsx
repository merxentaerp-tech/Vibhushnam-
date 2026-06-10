import React from "react";
import "./Footer.css";

import callIcon from "../../assets/icons/CallUs.png.png";
import messageIcon from "../../assets/icons/message.png.png";
import socialIcon from "../../assets/icons/Social Media.png.png";
import { Headphones, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-info">
            <Headphones />
            <div>
              <h4>Customer Service</h4>
              <p>Mon-Sat, 11am-8pm IST</p>
            </div>
          </div>

          <div className="footer-info">
            <img src={callIcon} alt="Call Us" />
            <div>
              <h4>Call Us</h4>
              <p>+91 9999999999</p>
            </div>
          </div>

          <div className="footer-info">
            <img src={messageIcon} alt="Get in Touch" />
            <div>
              <h4>Get in Touch</h4>
              <p>care@eloura.com</p>
            </div>
          </div>

          <div className="footer-info">
            <MapPin />
            <div>
              <h4>Location</h4>
              <p>
                Collectorate, Hajipur, Vaishali - 844101, Bihar
              </p>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-about">
            <p>
              Eloura is a luxury jewellery house inspired by timeless elegance.
              We craft high-quality pieces using the finest materials —designed
              to celebrate beauty, confidence, and individuality.
            </p>
          </div>

          <div className="footer-col">
            <h3>BESTSELLERS</h3>
            <a href="#">Gold Bracelets</a>
            <a href="#">Stone Gold Ring</a>
            <a href="#">Silver Curated Bangle</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <div className="footer-col">
            <h3>QUICK LINKS</h3>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <form className="footer-form">
            <h3>Query / Feedback</h3>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Mobile No." />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Enter your feedback / query here" />
            <button type="button">Submit</button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Eloura, Inc.</p>
          <img src={socialIcon} alt="Social Media" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;