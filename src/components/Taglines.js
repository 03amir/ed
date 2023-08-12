import React from "react";
import book_icon from "../assets/book_icon.png";
import clock_icon from "../assets/clock_icon.png";
import hat_icon from "../assets/hat_icon.png";
import live_icon from "../assets/live_icon.png";
import ad_icon from "../assets/ad_icon.png";
import "../styles/taglines.css";

export default function Taglines() {
  return (
    <div className="taglines">
      <h1 className="heading">
        Access curated courses worth <br></br>
        <span className="heading-span">
          ₹ <span className="heading-span heading-span-red">18,500</span>
        </span>
        <span className="heading"> at just</span>
        <span className="heading-span heading-span-blue"> ₹ 99</span> per year!
      </h1>

      <div className="single-tagline">
        <img src={book_icon} alt="book-icon" />
        <p>
          <span className="tagline-span-blue">100+</span> Job relevant courses
        </p>
      </div>

      <div className="single-tagline">
        <img src={clock_icon} alt="clock-icon" />
        <p>
          <span className="tagline-span-blue">20,000+</span> Hours of content
        </p>
      </div>

      <div className="single-tagline">
        <img src={live_icon} alt="live-icon" />
        <p>
          <span className="tagline-span-blue">Exclusive</span> webinar access
        </p>
      </div>
      <div className="single-tagline">
        <img src={hat_icon} alt="hat-icon" />
        <p>
          Scholarship worth <span className="tagline-span-blue"> ₹94,500 </span>
        </p>
      </div>
      <div className="single-tagline">
        <img src={ad_icon} alt="ads-icon" />
        <p>
          <span className="tagline-span-blue">Ad Free </span>learning experience
        </p>
      </div>
    </div>
  );
}
