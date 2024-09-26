import React from "react";
import "./ss1City.css";
const Ss1City = (props) => {
  return (
    <div className="container ss1__city">
      {props.item.map((data) => {
        return (
          <div
            key={data.name}
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div>
              <h2>{data.name}</h2>
              <p>{data.subText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ss1City;
