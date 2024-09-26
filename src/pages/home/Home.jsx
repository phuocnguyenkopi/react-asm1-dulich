import NavBar from "./NavBar";
import Header from "./Header";
import Ss1City from "./ss1City";
import Ss2HotelType from "./ss2HotelType";
import Ss3HotelList from "./ss3HotelList";
import Formfooter from "./formfooter";
import Navfooter from "./navfooter";

import objectCity from "../../data/city.json";
import objectListType from "../../data/type.json";
import objectListHotel from "../../data/hotel_list.json";
// import objectListHotel from "../../../data/hotel_list.json";
// // city.json
const DummyDataCity = objectCity;
//type
const listType = objectListType;
//hotel_list
const listHotel = objectListHotel;

const Home = () => {
  return (
    <div className="">
      {/* start header */}
      <header className="bg-[#003580] pt-5">
        <NavBar />
        <Header />
      </header>
      {/* end header */}

      {/* start body */}
      <Ss1City item={DummyDataCity} />
      <Ss2HotelType item={listType} />
      <Ss3HotelList item={listHotel} />
      {/* end body */}

      {/* start footer */}
      <Formfooter />
      <Navfooter />
      {/* end footer */}
    </div>
  );
};

export default Home;
