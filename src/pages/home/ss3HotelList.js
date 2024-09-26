import React from "react";
import "./ss3HotelList.css";
const Ss3HotelList = (props) => {
  return (
    <div className="container ss3__hotel_list">
      <h2>Homes guests love</h2>
      <div className="ss3__hotel_list_items">
        {props.item.map((e) => {
          return (
            <div key={e.name} className="ss3__hotel_list_item">
              <div>
                <img src={e.image_url} alt="" />
              </div>
              <div>
                <p>
                  <a href="/detail">{e.name}</a>
                </p>
                <p className="ss3__hotel_list_item_city">{e.city}</p>
                <p className="ss3__hotel_list_item_price">
                  Starting form ${e.price}
                </p>
                <p className="ss3__hotel_list_item_rate_type">
                  <span>{e.rate}</span> {e.type}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Ss3HotelList;
