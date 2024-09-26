import React from "react";
import "./ss2HotelType.css";
const Ss2HotelType = (props) => {
  return (
    <div className="container ss2__hotel_type">
      <h2> Browse by property type</h2>
      <div className="ss2__hotel_type_items">
        {props.item.map((e) => {
          return (
            <div key={e.name} className="ss2__hotel_type_item">
              <div>
                <img src={e.image} alt="" />
              </div>
              <div>
                <p>{e.name}</p>
                <p>{e.count} hotels</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Ss2HotelType;
