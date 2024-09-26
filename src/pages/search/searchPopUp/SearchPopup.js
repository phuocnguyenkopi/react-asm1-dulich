import React from "react";
import "./SearchPopup.css";
const SearchPopup = () => {
  return (
    <div className="search__pop_up">
      <div>
        <h2>Search</h2>
        <form>
          <div className="search__pop_up_top">
            <label>Destination</label>
            <input type="text" />
          </div>
          <div className="search__pop_up_top">
            <label>Check-in Date</label>
            <input type="text" placeholder="06/24/2022 to 06/24/2022" />
          </div>
          <div className="search__pop_up_bottom">
            <p>Options</p>
            <div>
              <label>Min price per night</label>
              <input type="text" />
            </div>
            <div>
              <label>Max price per night</label>
              <input type="text" />
            </div>
            <div>
              <label>Adult</label>
              <input type="text" />
            </div>
            <div>
              <label>Children</label>
              <input type="text" />
            </div>
            <div>
              <label>Room</label>
              <input type="text" />
            </div>
          </div>
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};
export default SearchPopup;
