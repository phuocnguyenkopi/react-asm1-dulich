import React from "react";
import "./formfooter.css";

// đăng ký ở footer
const Formfooter = () => {
  return (
    <div className="bg-[#003580] py-10">
      <div className="form__footer">
        <div>
          <p>Save time, save money!</p>
          <p>Sign up and we'll send the best deals to you</p>
        </div>
        <form>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Formfooter;
