import React from "react";
import "./SearchListItem.css";

const SearchListItem = (props) => {
  const free_cancel_truetry = () => {
    return (
      <div>
        <p className="text-base font-bold text-green-700">Free cancellation</p>
        <p className="text-sm text-green-700">
          You cancel later, so lock in this great price today!
        </p>
      </div>
    );
  };
  return (
    <div className="search__list_item">
      <div className="search__list_item_left">
        <img src={props.item.image_url} alt={props.item.name} />
      </div>
      <div className="search__list_item_right">
        <div className="search__list_item_right_dis">
          <h2>{props.item.name}</h2>
          <p className="text-sm">{props.item.distance} From center</p>
          <p className="search__tag">{props.item.tag}</p>
          <p className="text-base font-bold"> {props.item.description}</p>
          <p>{props.item.type}</p>
          {props.item.free_cancel ? free_cancel_truetry() : ""}
        </div>
        <div className="search__list_item_right_price">
          <div className="search__rate">
            <span className="text-base font-bold">{props.item.rate_text}</span>
            <span className="p-2 bg-[#003580] text-white">
              {props.item.rate}
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold text-right">${props.item.price}</p>
            <p className="text-sm text-right text-gray-700">
              includes taxes and fees
            </p>
            <button className="btn__see text-lg font-bold text">
              See availabitty
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchListItem;
