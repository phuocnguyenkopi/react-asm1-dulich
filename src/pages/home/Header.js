import React, { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
const Header = () => {
  const [displayCarenda, setdisplayCarenda] = useState(false);
  const [state, setState] = useState([
    {
      startDate: "",
      endDate: null,
      key: "selection",
    },
  ]);
  console.log(state);

  const focusHanller = () => {
    setdisplayCarenda(true);
  };
  //   setdisplayCarenda(false);

  const handleSearchClick = function (e) {
    //chuyển trang
    e.preventDefault(); //chặng sưj kiện mặc định của btn
    window.location.replace("/search");
  };
  const handleDateChange = (ranges) => {
    // Cập nhật state với phạm vi ngày mới
    setState([ranges.selection]);

    // Tắt chế độ DateRange sau khi chọn ngày
    state[0].endDate ? setdisplayCarenda(false) : setdisplayCarenda(true);
  };

  return (
    <div className="header__content container text-white">
      <h2>A lifetime of discounts? It's Genius</h2>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      <button>Login/Register</button>
      <form className="form_header_search">
        <div>
          <label>
            <i className="fa fa-bed"></i>
          </label>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div>
          <label>
            <i className="fa fa-calendar"></i>
          </label>
          <input
            type="text"
            onFocus={focusHanller}
            placeholder="22/06/2022 To 22/06/2022"
            value={
              state[0].startDate
                ? ` ${
                    state[0].startDate
                      ? format(state[0].startDate, "dd/MM/yyyy")
                      : ""
                  } To ${
                    state[0].endDate
                      ? format(state[0].endDate, "dd/MM/yyyy")
                      : ""
                  }`
                : ""
            }
          />
        </div>
        <div>
          <label>
            <i className="fa-solid fa-person"></i>
          </label>
          <input type="text" placeholder="1 adult • 0 children • 1 room " />
        </div>
        <button className="btn__header_search" onClick={handleSearchClick}>
          Search
        </button>
      </form>
      {/* phần nâng cao */}
      {displayCarenda ? (
        <div className="display__modal">
          <DateRange
            editableDateInputs={true}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
