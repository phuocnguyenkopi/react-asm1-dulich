import React from "react";
import "./navfooter.css";
import objectNavFooter from "../../data/footer.json";

const Navfooter = () => {
  const navitemfooter = objectNavFooter;
  return (
    <div className="container">
      <nav className="footer__nav">
        {navitemfooter.map((e) => {
          return (
            <ul key={e.col_number}>
              {e.col_values.map((x, i) => {
                return (
                  <li key={i}>
                    <a href="/">{x}</a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </nav>
    </div>
  );
};

export default Navfooter;
